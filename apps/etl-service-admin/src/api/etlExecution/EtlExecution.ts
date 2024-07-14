export type EtlExecution = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status: string | null;
  logs: string | null;
  finishedAt: Date | null;
  startedAt: Date | null;
  configuration: string | null;
};
