import { DataDestinationConnectorWhereInput } from "./DataDestinationConnectorWhereInput";
import { DataDestinationConnectorOrderByInput } from "./DataDestinationConnectorOrderByInput";

export type DataDestinationConnectorFindManyArgs = {
  where?: DataDestinationConnectorWhereInput;
  orderBy?: Array<DataDestinationConnectorOrderByInput>;
  skip?: number;
  take?: number;
};
