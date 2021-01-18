import React from "react";
import PanelHeader from "../../components/PanelHeader/PanelHeader";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import CreateAndEditTestGroup from "./CreateAndEditTestGroup";
import { Button, Input, Table } from "reactstrap";
import {
  OrderDirection,
  useGetTestGroupsLazyQuery,
  useUpdateTestGroupMutation,
} from "../../../../schema/schema";
import { notificationAdd } from "../../utils/Notification";
import { store } from "react-notifications-component";
import Select from "react-select";
// import { Route, Switch, Redirect } from "react-router-dom";
// interface ToeicAdminProps {}
const StatusOptions = [
  { 
    value: true,
    label: "Visible",
  },
  {
    value: false,
    label: "Hidden",
  }
]
const TestGroup: React.FC<{}> = () => {
  const match = useRouteMatch();
  const notification = notificationAdd("Test Group", "Updated");
  const [
    getTestGroupsQuery,
    getTestGroupsQueryRespone,
  ] = useGetTestGroupsLazyQuery();
  const variables = {
    data: {
      orderDirection: OrderDirection.Asc
    },
  }
  const refetch = () => {
    getTestGroupsQueryRespone.refetch && getTestGroupsQueryRespone.refetch(variables)
  }
  const [
    updateTestGroupMutation,
    updateTestGroupMutationResult,
  ] = useUpdateTestGroupMutation();
 
  React.useEffect(() => {
    getTestGroupsQuery({
      variables
    });
    refetch();
  }, []);
  
  React.useEffect(() => {
    refetch();
  },[updateTestGroupMutationResult.loading])
  if (getTestGroupsQueryRespone.loading) {
    return <div>{`Loading...`}</div>;
  }
  const testsGroupData = getTestGroupsQueryRespone.data?.getTestGroups.testGroups;
  return (
    <>
      <PanelHeader
        content={
          <div className="header text-center">
            <h2 className="title">Test Group</h2>
            <p className="category">Management Test Group</p>
          </div>
        }
      />
      <div className="content">
        <Switch>
          <Route path={[`${match.path}/create-test-group`, `${match.path}/edit-test-group/:testGroupId`]}>
            <CreateAndEditTestGroup testsGroupData={testsGroupData} />
          </Route>
          <Route path={`${match.path}`}>
            <div className="d-flex h-100 flex-column position-relative">
              <div className="w-100">
                <div className="px-4 py-2 bg-white font-weight-semi font-10">
                  <Link
                    className="btn-info btn text-white"
                    to={`${match.url}/create-test-group`}
                  >
                    Create Test Group
                  </Link>
                </div>
              </div>
              <div className="w-100 px-4 bg-white table-responsive-h100">
                  <Table responsive >
                    <thead className="text-primary font-10">
                      <tr>
                        <th className="text-center font-weight-semi">
                          Test Group Name
                        </th>
                        <th className="text-center font-weight-semi">Link</th>
                        <th className="text-center font-weight-semi" style={{
                          width: "15%"
                        }}>Status</th>
                        <th className="text-center font-weight-semi">Order</th>
                        <th className="text-center font-weight-semi">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {testsGroupData &&
                        testsGroupData.map((testGroup) => {
                          let order = testGroup.displayOrder;
                          let StatusDefault = StatusOptions.find(s => s.value === testGroup.isPublished)
                          let updateIsPublic : any
                          return (
                            <tr key={testGroup.id}>
                              <td className="text-center font-weight-semi">
                                <Link to={`${match.path}/edit-test-group/${testGroup.id}`}>
                                  {testGroup.testGroupName}
                                </Link>
                              </td>
                              <td className="text-center font-weight-semi">
                                {testGroup.link}
                              </td>
                              <td className="text-center font-weight-semi">
                                <Select
                                  options={StatusOptions}
                                  defaultValue={StatusDefault}
                                  classNamePrefix="react-select"
                                  onChange={(opt) => {
                                    updateIsPublic = opt
                                  }}
                                >
                                  
                                </Select>
                              </td>
                              <td>
                                <Input
                                placeholder="Order"
                                type="number"
                                onChange={(e) => {
                                  order = parseInt(e.target.value);
                                }}
                                defaultValue={
                                  testGroup.displayOrder
                                }
                                className={`mx-auto width-4rem bg-white`}
                                />
                              </td>
                              <td className="text-center">
                                <Button
                                  className="btn-icon btn-round mr-1"
                                  color="info"
                                  size="sm"
                                  type="button"
                                  onClick={async () => {
                                    const res = await updateTestGroupMutation({
                                      variables: {
                                        data: {
                                          id: testGroup.id,
                                          displayOrder: order,
                                          testGroupName:
                                            testGroup.testGroupName,
                                          isPublished: updateIsPublic ? updateIsPublic.value : testGroup.isPublished
                                        },
                                      },
                                    });
                                    if(res.data?.updateTestGroup){
                                      store.addNotification(notification);
                                    }

                                  }}
                                >
                                  <i className="now-ui-icons users_single-02"></i>
                                </Button>
                                <Link
                                  className="btn btn-sm mr-1 btn-warning btn-icon btn-round"
                                  to={`${match.path}/edit-test-group/${testGroup.id}`}
                                >
                                  <i className="now-ui-icons ui-2_settings-90"></i>
                                </Link>
                                <Button
                                  className="btn-icon btn-round"
                                  color="danger"
                                  size="sm"
                                  type="button"
                                  // onClick={async () => {
                                  //   await removeTestCategoryMutation({
                                  //     variables: {
                                  //       id: testCategory.id,
                                  //     },
                                  //   });
                                  // }}
                                >
                                  <i className="now-ui-icons ui-1_simple-remove"></i>
                                </Button>
                              </td>
                            </tr>
                          );
                          
                        })}
                    </tbody>
                  </Table>
                 
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default TestGroup;
