import * as graphql from "@nestjs/graphql";
import { EtlExecutionResolverBase } from "./base/etlExecution.resolver.base";
import { EtlExecution } from "./base/EtlExecution";
import { EtlExecutionService } from "./etlExecution.service";

@graphql.Resolver(() => EtlExecution)
export class EtlExecutionResolver extends EtlExecutionResolverBase {
  constructor(protected readonly service: EtlExecutionService) {
    super(service);
  }
}
