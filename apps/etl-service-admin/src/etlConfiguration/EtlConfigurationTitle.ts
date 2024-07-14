import { EtlConfiguration as TEtlConfiguration } from "../api/etlConfiguration/EtlConfiguration";

export const ETLCONFIGURATION_TITLE_FIELD = "name";

export const EtlConfigurationTitle = (record: TEtlConfiguration): string => {
  return record.name?.toString() || String(record.id);
};
