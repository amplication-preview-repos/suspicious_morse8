export type EtlExecutionCreateInput = {
  status?: string | null;
  logs?: string | null;
  finishedAt?: Date | null;
  startedAt?: Date | null;
  configuration?: string | null;
};
