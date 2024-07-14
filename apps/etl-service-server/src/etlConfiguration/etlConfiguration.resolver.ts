import * as graphql from "@nestjs/graphql";
import { EtlConfigurationResolverBase } from "./base/etlConfiguration.resolver.base";
import { EtlConfiguration } from "./base/EtlConfiguration";
import { EtlConfigurationService } from "./etlConfiguration.service";

@graphql.Resolver(() => EtlConfiguration)
export class EtlConfigurationResolver extends EtlConfigurationResolverBase {
  constructor(protected readonly service: EtlConfigurationService) {
    super(service);
  }
}
