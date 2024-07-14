import { EtlConfigurationWhereInput } from "./EtlConfigurationWhereInput";
import { EtlConfigurationOrderByInput } from "./EtlConfigurationOrderByInput";

export type EtlConfigurationFindManyArgs = {
  where?: EtlConfigurationWhereInput;
  orderBy?: Array<EtlConfigurationOrderByInput>;
  skip?: number;
  take?: number;
};
