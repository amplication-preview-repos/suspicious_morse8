import { InputJsonValue } from "../../types";

export type DataSourceConnectorCreateInput = {
  name?: string | null;
  typeField?: string | null;
  endpoint?: string | null;
  credentials?: InputJsonValue;
};
