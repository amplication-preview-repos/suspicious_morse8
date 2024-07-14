import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { EtlExecutionController } from "../etlExecution.controller";
import { EtlExecutionService } from "../etlExecution.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  status: "exampleStatus",
  logs: "exampleLogs",
  finishedAt: new Date(),
  startedAt: new Date(),
  configuration: "exampleConfiguration",
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  status: "exampleStatus",
  logs: "exampleLogs",
  finishedAt: new Date(),
  startedAt: new Date(),
  configuration: "exampleConfiguration",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    status: "exampleStatus",
    logs: "exampleLogs",
    finishedAt: new Date(),
    startedAt: new Date(),
    configuration: "exampleConfiguration",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  status: "exampleStatus",
  logs: "exampleLogs",
  finishedAt: new Date(),
  startedAt: new Date(),
  configuration: "exampleConfiguration",
};

const service = {
  createEtlExecution() {
    return CREATE_RESULT;
  },
  etlExecutions: () => FIND_MANY_RESULT,
  etlExecution: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("EtlExecution", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EtlExecutionService,
          useValue: service,
        },
      ],
      controllers: [EtlExecutionController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /etlExecutions", async () => {
    await request(app.getHttpServer())
      .post("/etlExecutions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        finishedAt: CREATE_RESULT.finishedAt.toISOString(),
        startedAt: CREATE_RESULT.startedAt.toISOString(),
      });
  });

  test("GET /etlExecutions", async () => {
    await request(app.getHttpServer())
      .get("/etlExecutions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          finishedAt: FIND_MANY_RESULT[0].finishedAt.toISOString(),
          startedAt: FIND_MANY_RESULT[0].startedAt.toISOString(),
        },
      ]);
  });

  test("GET /etlExecutions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/etlExecutions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /etlExecutions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/etlExecutions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        finishedAt: FIND_ONE_RESULT.finishedAt.toISOString(),
        startedAt: FIND_ONE_RESULT.startedAt.toISOString(),
      });
  });

  test("POST /etlExecutions existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/etlExecutions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        finishedAt: CREATE_RESULT.finishedAt.toISOString(),
        startedAt: CREATE_RESULT.startedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/etlExecutions")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
