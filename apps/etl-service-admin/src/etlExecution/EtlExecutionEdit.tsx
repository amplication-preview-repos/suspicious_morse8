import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const EtlExecutionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="status" source="status" />
        <TextInput label="logs" multiline source="logs" />
        <DateTimeInput label="finishedAt" source="finishedAt" />
        <DateTimeInput label="startedAt" source="startedAt" />
        <TextInput label="configuration" source="configuration" />
      </SimpleForm>
    </Edit>
  );
};
