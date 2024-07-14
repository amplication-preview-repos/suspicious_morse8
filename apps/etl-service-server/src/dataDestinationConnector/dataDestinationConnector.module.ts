import { Module } from "@nestjs/common";
import { DataDestinationConnectorModuleBase } from "./base/dataDestinationConnector.module.base";
import { DataDestinationConnectorService } from "./dataDestinationConnector.service";
import { DataDestinationConnectorController } from "./dataDestinationConnector.controller";
import { DataDestinationConnectorResolver } from "./dataDestinationConnector.resolver";

@Module({
  imports: [DataDestinationConnectorModuleBase],
  controllers: [DataDestinationConnectorController],
  providers: [
    DataDestinationConnectorService,
    DataDestinationConnectorResolver,
  ],
  exports: [DataDestinationConnectorService],
})
export class DataDestinationConnectorModule {}
