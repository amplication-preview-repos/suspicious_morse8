import { DataDestinationConnector as TDataDestinationConnector } from "../api/dataDestinationConnector/DataDestinationConnector";

export const DATADESTINATIONCONNECTOR_TITLE_FIELD = "name";

export const DataDestinationConnectorTitle = (
  record: TDataDestinationConnector
): string => {
  return record.name?.toString() || String(record.id);
};
