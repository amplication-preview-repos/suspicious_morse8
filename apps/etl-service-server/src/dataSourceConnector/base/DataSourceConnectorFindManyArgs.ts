/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DataSourceConnectorWhereInput } from "./DataSourceConnectorWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DataSourceConnectorOrderByInput } from "./DataSourceConnectorOrderByInput";

@ArgsType()
class DataSourceConnectorFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DataSourceConnectorWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DataSourceConnectorWhereInput, { nullable: true })
  @Type(() => DataSourceConnectorWhereInput)
  where?: DataSourceConnectorWhereInput;

  @ApiProperty({
    required: false,
    type: [DataSourceConnectorOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DataSourceConnectorOrderByInput], { nullable: true })
  @Type(() => DataSourceConnectorOrderByInput)
  orderBy?: Array<DataSourceConnectorOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DataSourceConnectorFindManyArgs as DataSourceConnectorFindManyArgs };
