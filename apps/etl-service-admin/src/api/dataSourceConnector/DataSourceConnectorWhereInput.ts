import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type DataSourceConnectorWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  typeField?: StringNullableFilter;
  endpoint?: StringNullableFilter;
  credentials?: JsonFilter;
};
