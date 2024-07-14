/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  EtlConfiguration as PrismaEtlConfiguration,
} from "@prisma/client";

export class EtlConfigurationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EtlConfigurationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.etlConfiguration.count(args);
  }

  async etlConfigurations(
    args: Prisma.EtlConfigurationFindManyArgs
  ): Promise<PrismaEtlConfiguration[]> {
    return this.prisma.etlConfiguration.findMany(args);
  }
  async etlConfiguration(
    args: Prisma.EtlConfigurationFindUniqueArgs
  ): Promise<PrismaEtlConfiguration | null> {
    return this.prisma.etlConfiguration.findUnique(args);
  }
  async createEtlConfiguration(
    args: Prisma.EtlConfigurationCreateArgs
  ): Promise<PrismaEtlConfiguration> {
    return this.prisma.etlConfiguration.create(args);
  }
  async updateEtlConfiguration(
    args: Prisma.EtlConfigurationUpdateArgs
  ): Promise<PrismaEtlConfiguration> {
    return this.prisma.etlConfiguration.update(args);
  }
  async deleteEtlConfiguration(
    args: Prisma.EtlConfigurationDeleteArgs
  ): Promise<PrismaEtlConfiguration> {
    return this.prisma.etlConfiguration.delete(args);
  }
}
