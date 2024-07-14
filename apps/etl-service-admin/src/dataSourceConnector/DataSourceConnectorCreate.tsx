import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DataSourceConnectorCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="type" source="typeField" />
        <TextInput label="endpoint" source="endpoint" />
        <div />
      </SimpleForm>
    </Create>
  );
};
