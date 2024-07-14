import { EtlExecution as TEtlExecution } from "../api/etlExecution/EtlExecution";

export const ETLEXECUTION_TITLE_FIELD = "status";

export const EtlExecutionTitle = (record: TEtlExecution): string => {
  return record.status?.toString() || String(record.id);
};
