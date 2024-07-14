import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const EtlExecutionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="status" source="status" />
        <TextInput label="logs" multiline source="logs" />
        <DateTimeInput label="finishedAt" source="finishedAt" />
        <DateTimeInput label="startedAt" source="startedAt" />
        <TextInput label="configuration" source="configuration" />
      </SimpleForm>
    </Create>
  );
};
