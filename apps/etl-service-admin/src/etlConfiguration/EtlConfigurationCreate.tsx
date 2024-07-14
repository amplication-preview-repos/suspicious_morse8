import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const EtlConfigurationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="dataSource" source="dataSource" />
      </SimpleForm>
    </Create>
  );
};
