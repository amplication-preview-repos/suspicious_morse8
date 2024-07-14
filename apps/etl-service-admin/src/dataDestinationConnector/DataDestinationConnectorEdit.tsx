import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DataDestinationConnectorEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="type" source="typeField" />
        <TextInput label="endpoint" source="endpoint" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
