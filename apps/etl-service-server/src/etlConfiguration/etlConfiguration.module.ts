import { Module } from "@nestjs/common";
import { EtlConfigurationModuleBase } from "./base/etlConfiguration.module.base";
import { EtlConfigurationService } from "./etlConfiguration.service";
import { EtlConfigurationController } from "./etlConfiguration.controller";
import { EtlConfigurationResolver } from "./etlConfiguration.resolver";

@Module({
  imports: [EtlConfigurationModuleBase],
  controllers: [EtlConfigurationController],
  providers: [EtlConfigurationService, EtlConfigurationResolver],
  exports: [EtlConfigurationService],
})
export class EtlConfigurationModule {}
