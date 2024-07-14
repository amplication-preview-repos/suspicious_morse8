import { InputJsonValue } from "../../types";

export type DataDestinationConnectorCreateInput = {
  name?: string | null;
  typeField?: string | null;
  endpoint?: string | null;
  credentials?: InputJsonValue;
};
