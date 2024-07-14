import * as graphql from "@nestjs/graphql";
import { DataSourceConnectorResolverBase } from "./base/dataSourceConnector.resolver.base";
import { DataSourceConnector } from "./base/DataSourceConnector";
import { DataSourceConnectorService } from "./dataSourceConnector.service";

@graphql.Resolver(() => DataSourceConnector)
export class DataSourceConnectorResolver extends DataSourceConnectorResolverBase {
  constructor(protected readonly service: DataSourceConnectorService) {
    super(service);
  }
}
