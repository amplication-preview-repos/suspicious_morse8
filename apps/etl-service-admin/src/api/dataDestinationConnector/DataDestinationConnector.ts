import { JsonValue } from "type-fest";

export type DataDestinationConnector = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  typeField: string | null;
  endpoint: string | null;
  credentials: JsonValue;
};
