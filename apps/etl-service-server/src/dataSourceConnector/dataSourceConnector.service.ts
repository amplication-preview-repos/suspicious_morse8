import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DataSourceConnectorServiceBase } from "./base/dataSourceConnector.service.base";

@Injectable()
export class DataSourceConnectorService extends DataSourceConnectorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
