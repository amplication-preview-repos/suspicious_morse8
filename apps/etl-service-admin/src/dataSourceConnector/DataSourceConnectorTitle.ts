import { DataSourceConnector as TDataSourceConnector } from "../api/dataSourceConnector/DataSourceConnector";

export const DATASOURCECONNECTOR_TITLE_FIELD = "name";

export const DataSourceConnectorTitle = (
  record: TDataSourceConnector
): string => {
  return record.name?.toString() || String(record.id);
};
