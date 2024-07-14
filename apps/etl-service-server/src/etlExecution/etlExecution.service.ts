import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EtlExecutionServiceBase } from "./base/etlExecution.service.base";

@Injectable()
export class EtlExecutionService extends EtlExecutionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
