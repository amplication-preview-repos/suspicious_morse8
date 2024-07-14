import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const EtlConfigurationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="dataSource" source="dataSource" />
      </SimpleForm>
    </Edit>
  );
};
