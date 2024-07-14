import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EtlConfigurationService } from "./etlConfiguration.service";
import { EtlConfigurationControllerBase } from "./base/etlConfiguration.controller.base";

@swagger.ApiTags("etlConfigurations")
@common.Controller("etlConfigurations")
export class EtlConfigurationController extends EtlConfigurationControllerBase {
  constructor(protected readonly service: EtlConfigurationService) {
    super(service);
  }
}
