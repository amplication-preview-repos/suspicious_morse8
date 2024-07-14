import { SortOrder } from "../../util/SortOrder";

export type EtlExecutionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  logs?: SortOrder;
  finishedAt?: SortOrder;
  startedAt?: SortOrder;
  configuration?: SortOrder;
};
