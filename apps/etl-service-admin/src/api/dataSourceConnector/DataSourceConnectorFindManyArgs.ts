import { DataSourceConnectorWhereInput } from "./DataSourceConnectorWhereInput";
import { DataSourceConnectorOrderByInput } from "./DataSourceConnectorOrderByInput";

export type DataSourceConnectorFindManyArgs = {
  where?: DataSourceConnectorWhereInput;
  orderBy?: Array<DataSourceConnectorOrderByInput>;
  skip?: number;
  take?: number;
};
