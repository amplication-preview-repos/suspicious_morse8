import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DataSourceConnectorList } from "./dataSourceConnector/DataSourceConnectorList";
import { DataSourceConnectorCreate } from "./dataSourceConnector/DataSourceConnectorCreate";
import { DataSourceConnectorEdit } from "./dataSourceConnector/DataSourceConnectorEdit";
import { DataSourceConnectorShow } from "./dataSourceConnector/DataSourceConnectorShow";
import { DataDestinationConnectorList } from "./dataDestinationConnector/DataDestinationConnectorList";
import { DataDestinationConnectorCreate } from "./dataDestinationConnector/DataDestinationConnectorCreate";
import { DataDestinationConnectorEdit } from "./dataDestinationConnector/DataDestinationConnectorEdit";
import { DataDestinationConnectorShow } from "./dataDestinationConnector/DataDestinationConnectorShow";
import { EtlExecutionList } from "./etlExecution/EtlExecutionList";
import { EtlExecutionCreate } from "./etlExecution/EtlExecutionCreate";
import { EtlExecutionEdit } from "./etlExecution/EtlExecutionEdit";
import { EtlExecutionShow } from "./etlExecution/EtlExecutionShow";
import { EtlConfigurationList } from "./etlConfiguration/EtlConfigurationList";
import { EtlConfigurationCreate } from "./etlConfiguration/EtlConfigurationCreate";
import { EtlConfigurationEdit } from "./etlConfiguration/EtlConfigurationEdit";
import { EtlConfigurationShow } from "./etlConfiguration/EtlConfigurationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ETLService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="DataSourceConnector"
          list={DataSourceConnectorList}
          edit={DataSourceConnectorEdit}
          create={DataSourceConnectorCreate}
          show={DataSourceConnectorShow}
        />
        <Resource
          name="DataDestinationConnector"
          list={DataDestinationConnectorList}
          edit={DataDestinationConnectorEdit}
          create={DataDestinationConnectorCreate}
          show={DataDestinationConnectorShow}
        />
        <Resource
          name="EtlExecution"
          list={EtlExecutionList}
          edit={EtlExecutionEdit}
          create={EtlExecutionCreate}
          show={EtlExecutionShow}
        />
        <Resource
          name="EtlConfiguration"
          list={EtlConfigurationList}
          edit={EtlConfigurationEdit}
          create={EtlConfigurationCreate}
          show={EtlConfigurationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
