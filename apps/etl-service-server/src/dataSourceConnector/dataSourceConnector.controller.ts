import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DataSourceConnectorService } from "./dataSourceConnector.service";
import { DataSourceConnectorControllerBase } from "./base/dataSourceConnector.controller.base";

@swagger.ApiTags("dataSourceConnectors")
@common.Controller("dataSourceConnectors")
export class DataSourceConnectorController extends DataSourceConnectorControllerBase {
  constructor(protected readonly service: DataSourceConnectorService) {
    super(service);
  }
}
