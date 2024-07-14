import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EtlExecutionService } from "./etlExecution.service";
import { EtlExecutionControllerBase } from "./base/etlExecution.controller.base";

@swagger.ApiTags("etlExecutions")
@common.Controller("etlExecutions")
export class EtlExecutionController extends EtlExecutionControllerBase {
  constructor(protected readonly service: EtlExecutionService) {
    super(service);
  }
}
