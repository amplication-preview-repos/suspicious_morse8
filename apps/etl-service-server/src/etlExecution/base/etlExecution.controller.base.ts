/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { EtlExecutionService } from "../etlExecution.service";
import { EtlExecutionCreateInput } from "./EtlExecutionCreateInput";
import { EtlExecution } from "./EtlExecution";
import { EtlExecutionFindManyArgs } from "./EtlExecutionFindManyArgs";
import { EtlExecutionWhereUniqueInput } from "./EtlExecutionWhereUniqueInput";
import { EtlExecutionUpdateInput } from "./EtlExecutionUpdateInput";

export class EtlExecutionControllerBase {
  constructor(protected readonly service: EtlExecutionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EtlExecution })
  async createEtlExecution(
    @common.Body() data: EtlExecutionCreateInput
  ): Promise<EtlExecution> {
    return await this.service.createEtlExecution({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        status: true,
        logs: true,
        finishedAt: true,
        startedAt: true,
        configuration: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [EtlExecution] })
  @ApiNestedQuery(EtlExecutionFindManyArgs)
  async etlExecutions(@common.Req() request: Request): Promise<EtlExecution[]> {
    const args = plainToClass(EtlExecutionFindManyArgs, request.query);
    return this.service.etlExecutions({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        status: true,
        logs: true,
        finishedAt: true,
        startedAt: true,
        configuration: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EtlExecution })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async etlExecution(
    @common.Param() params: EtlExecutionWhereUniqueInput
  ): Promise<EtlExecution | null> {
    const result = await this.service.etlExecution({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        status: true,
        logs: true,
        finishedAt: true,
        startedAt: true,
        configuration: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: EtlExecution })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEtlExecution(
    @common.Param() params: EtlExecutionWhereUniqueInput,
    @common.Body() data: EtlExecutionUpdateInput
  ): Promise<EtlExecution | null> {
    try {
      return await this.service.updateEtlExecution({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          status: true,
          logs: true,
          finishedAt: true,
          startedAt: true,
          configuration: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: EtlExecution })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEtlExecution(
    @common.Param() params: EtlExecutionWhereUniqueInput
  ): Promise<EtlExecution | null> {
    try {
      return await this.service.deleteEtlExecution({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          status: true,
          logs: true,
          finishedAt: true,
          startedAt: true,
          configuration: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
