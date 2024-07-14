import { InputJsonValue } from "../../types";

export type DataSourceConnectorUpdateInput = {
  name?: string | null;
  typeField?: string | null;
  endpoint?: string | null;
  credentials?: InputJsonValue;
};
