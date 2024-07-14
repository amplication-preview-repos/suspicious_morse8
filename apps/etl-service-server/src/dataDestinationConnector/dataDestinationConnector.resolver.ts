import * as graphql from "@nestjs/graphql";
import { DataDestinationConnectorResolverBase } from "./base/dataDestinationConnector.resolver.base";
import { DataDestinationConnector } from "./base/DataDestinationConnector";
import { DataDestinationConnectorService } from "./dataDestinationConnector.service";

@graphql.Resolver(() => DataDestinationConnector)
export class DataDestinationConnectorResolver extends DataDestinationConnectorResolverBase {
  constructor(protected readonly service: DataDestinationConnectorService) {
    super(service);
  }
}
