import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Select from "react-select";
import { Button, Input, Table } from "reactstrap";
import { notificationAdd } from "../../utils/Notification";
import { store } from "react-notifications-component";
import {
  TestGroupChildInfoFragment,
  TestGroupInfoFragment,
  useUpdateTestGroupMutation,
} from "../../../../schema/schema";
const arrow = require("../../../../assets/img/arrow_square.svg");
const StatusOptions = [
  {
    value: true,
    label: "Visible",
  },
  {
    value: false,
    label: "Hidden",
  },
];
interface ListTestGroupProps {
  testsGroupData?: TestGroupInfoFragment[];
}
const ListTestGroup: React.FC<ListTestGroupProps> = ({ testsGroupData }) => {
  const match = useRouteMatch();
  return (
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
        <Table responsive>
          <thead className="text-primary font-10">
            <tr>
              <th className="text-center font-weight-semi">Test Group Name</th>
              <th className="text-center font-weight-semi">Link</th>
              <th
                className="text-center font-weight-semi"
                style={{
                  width: "15%",
                }}
              >
                Status
              </th>
              <th className="text-center font-weight-semi">Order</th>
              <th className="text-center font-weight-semi">Actions</th>
            </tr>
          </thead>
          <tbody>
            <ListBody testsGroupData={testsGroupData} />
          </tbody>
        </Table>
      </div>
    </div>
  );
};

const ListBody: React.FC<ListTestGroupProps> = ({ testsGroupData }) => {
  return (
    <>
      {testsGroupData &&
        testsGroupData.map((testGroup) => {
          const testGroupsChild = testGroup.testGroupsChild.slice();
          return (
            <>
              <ListBodyChild key={testGroup.id} testGroup={testGroup} />
              {testGroupsChild &&
                testGroupsChild.length > 0 &&
                testGroupsChild
                  .sort((a, b) => a.displayOrder - b.displayOrder)
                  .map((testGroupChild) => {
                    return (
                      <ListBodyChild
                        key={testGroupChild.id}
                        isChild
                        testGroup={testGroupChild}
                      />
                    );
                  })}
            </>
          );
        })}
    </>
  );
};

const ListBodyChild: React.FC<{
  testGroup: TestGroupInfoFragment | TestGroupChildInfoFragment;
  isChild?: boolean;
}> = ({ testGroup, isChild }) => {
  const match = useRouteMatch();
  const [updateTestGroupMutation] = useUpdateTestGroupMutation();
  const notification = notificationAdd("Test Group", "Updated");
  let order = testGroup.displayOrder;
  let StatusDefault = StatusOptions.find(
    (s) => s.value === testGroup.isPublished
  );
  let updateIsPublic: any;
  return (
    <tr key={testGroup.id}>
      <td className={`text-left font-weight-semi ${isChild ? "pl-4" : ""}`}>
        <Link to={`${match.path}/edit-test-group/${testGroup.id}`}>
          {isChild && <img width="30px" src={arrow} alt="arrow_square" />}{" "}
          {testGroup.testGroupName}
        </Link>
      </td>
      <td className="text-center font-weight-semi">{testGroup.link}</td>
      <td className="text-center font-weight-semi">
        <Select
          options={StatusOptions}
          defaultValue={StatusDefault}
          classNamePrefix="react-select"
          onChange={(opt) => {
            updateIsPublic = opt;
          }}
        ></Select>
      </td>
      <td>
        <Input
          placeholder="Order"
          type="number"
          onChange={(e) => {
            order = parseInt(e.target.value);
          }}
          defaultValue={testGroup.displayOrder}
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
            const { isPublished, __typename, ...remainingData } = testGroup;
            const res = await updateTestGroupMutation({
              variables: {
                data: {
                  ...remainingData,
                  displayOrder: order,
                },
              },
            });
            if (res.data?.updateTestGroup) {
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
};

export default ListTestGroup;
