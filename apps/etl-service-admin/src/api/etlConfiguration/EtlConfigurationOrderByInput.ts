import { SortOrder } from "../../util/SortOrder";

export type EtlConfigurationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  dataSource?: SortOrder;
};
