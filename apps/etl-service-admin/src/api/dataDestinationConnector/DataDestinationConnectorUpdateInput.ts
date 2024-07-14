import { InputJsonValue } from "../../types";

export type DataDestinationConnectorUpdateInput = {
  name?: string | null;
  typeField?: string | null;
  endpoint?: string | null;
  credentials?: InputJsonValue;
};
