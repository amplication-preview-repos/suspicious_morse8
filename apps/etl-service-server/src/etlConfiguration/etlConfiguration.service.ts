import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EtlConfigurationServiceBase } from "./base/etlConfiguration.service.base";

@Injectable()
export class EtlConfigurationService extends EtlConfigurationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
