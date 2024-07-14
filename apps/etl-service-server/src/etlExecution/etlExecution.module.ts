import { Module } from "@nestjs/common";
import { EtlExecutionModuleBase } from "./base/etlExecution.module.base";
import { EtlExecutionService } from "./etlExecution.service";
import { EtlExecutionController } from "./etlExecution.controller";
import { EtlExecutionResolver } from "./etlExecution.resolver";

@Module({
  imports: [EtlExecutionModuleBase],
  controllers: [EtlExecutionController],
  providers: [EtlExecutionService, EtlExecutionResolver],
  exports: [EtlExecutionService],
})
export class EtlExecutionModule {}
