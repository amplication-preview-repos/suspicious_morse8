import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DataDestinationConnectorServiceBase } from "./base/dataDestinationConnector.service.base";

@Injectable()
export class DataDestinationConnectorService extends DataDestinationConnectorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
