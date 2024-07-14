import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type EtlExecutionWhereInput = {
  id?: StringFilter;
  status?: StringNullableFilter;
  logs?: StringNullableFilter;
  finishedAt?: DateTimeNullableFilter;
  startedAt?: DateTimeNullableFilter;
  configuration?: StringNullableFilter;
};
