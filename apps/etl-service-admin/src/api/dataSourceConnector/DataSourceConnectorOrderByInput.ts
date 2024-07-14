import { SortOrder } from "../../util/SortOrder";

export type DataSourceConnectorOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
  endpoint?: SortOrder;
  credentials?: SortOrder;
};
