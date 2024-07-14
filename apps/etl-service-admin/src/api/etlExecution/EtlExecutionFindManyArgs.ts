import { EtlExecutionWhereInput } from "./EtlExecutionWhereInput";
import { EtlExecutionOrderByInput } from "./EtlExecutionOrderByInput";

export type EtlExecutionFindManyArgs = {
  where?: EtlExecutionWhereInput;
  orderBy?: Array<EtlExecutionOrderByInput>;
  skip?: number;
  take?: number;
};
