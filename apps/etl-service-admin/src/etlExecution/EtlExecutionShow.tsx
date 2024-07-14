import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const EtlExecutionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="status" source="status" />
        <TextField label="logs" source="logs" />
        <TextField label="finishedAt" source="finishedAt" />
        <TextField label="startedAt" source="startedAt" />
        <TextField label="configuration" source="configuration" />
      </SimpleShowLayout>
    </Show>
  );
};
