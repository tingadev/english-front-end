import React from "react";
import PanelHeader from "../../components/PanelHeader";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import CreateAndEditTestGroup from "./CreateAndEditTestGroup";
import {
  OrderDirection,
  useGetTestGroupsInfoQuery,
} from "../../../../schema/schema";
import ListTestGroup from "./ListTestGroup";
const TestGroup: React.FC<{}> = () => {
  const match = useRouteMatch();
  const variables = {
    data: {
      orderDirection: OrderDirection.Asc,
    },
  };
  const { data, loading, refetch } = useGetTestGroupsInfoQuery({
    variables,
  });
  const testsGroupData = data?.getTestGroups.testGroups;
  React.useMemo(() => {
    refetch();
  }, [refetch]);


  return (
    <>
      <PanelHeader>
        <div className="header text-center">
          <h2 className="title">Test Group</h2>
          <p className="category">Management Test Group</p>
        </div>
      </PanelHeader>
      <div className="content">
        <Switch>
          <Route
            path={[
              `${match.path}/create-test-group`,
              `${match.path}/edit-test-group/:testGroupId`,
            ]}
          >
            <CreateAndEditTestGroup testsGroupData={testsGroupData}/>
          </Route>
          <Route path={`${match.path}`}>
            <ListTestGroup testsGroupData={testsGroupData} loading={loading} />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default TestGroup;
