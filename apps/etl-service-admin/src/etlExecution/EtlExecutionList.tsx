import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EtlExecutionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ETLExecutions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="status" source="status" />
        <TextField label="logs" source="logs" />
        <TextField label="finishedAt" source="finishedAt" />
        <TextField label="startedAt" source="startedAt" />
        <TextField label="configuration" source="configuration" />
      </Datagrid>
    </List>
  );
};
