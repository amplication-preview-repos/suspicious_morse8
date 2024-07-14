import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DataDestinationConnectorService } from "./dataDestinationConnector.service";
import { DataDestinationConnectorControllerBase } from "./base/dataDestinationConnector.controller.base";

@swagger.ApiTags("dataDestinationConnectors")
@common.Controller("dataDestinationConnectors")
export class DataDestinationConnectorController extends DataDestinationConnectorControllerBase {
  constructor(protected readonly service: DataDestinationConnectorService) {
    super(service);
  }
}
