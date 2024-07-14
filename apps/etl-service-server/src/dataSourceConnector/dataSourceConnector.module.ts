import { Module } from "@nestjs/common";
import { DataSourceConnectorModuleBase } from "./base/dataSourceConnector.module.base";
import { DataSourceConnectorService } from "./dataSourceConnector.service";
import { DataSourceConnectorController } from "./dataSourceConnector.controller";
import { DataSourceConnectorResolver } from "./dataSourceConnector.resolver";

@Module({
  imports: [DataSourceConnectorModuleBase],
  controllers: [DataSourceConnectorController],
  providers: [DataSourceConnectorService, DataSourceConnectorResolver],
  exports: [DataSourceConnectorService],
})
export class DataSourceConnectorModule {}
