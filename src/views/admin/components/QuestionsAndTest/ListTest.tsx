import React from "react";
import {
  CardHeader,
  CardTitle,
  Table,
  Badge,
  Button,
  Label,
  Input,
} from "reactstrap";
import {
  EnglishCertificateType,
  SkillsType,
  TestIdsInput,
  useGetTestsQuery,
  useRemoveTestMutation,
  useUpdateTestMutation,
} from "../../../../schema/schema";
import { Link } from "react-router-dom";
import ModalDelete from "../Modal/Delete";
import LazyLoad from "../LazyLoad";
interface ListTestProps {
  setIconPills?: (val: string) => void;
  modal?: boolean;
  setTestIds?: (val: TestIdsInput) => void;
  testIds?: TestIdsInput;
  testIdsForget?: string[];
}

const ListTest: React.FC<ListTestProps> = ({
  setIconPills,
  modal,
  setTestIds,
  testIds,
  testIdsForget,
}) => {
  const [isOpenModalDelete, setIsOpenModalDelete] = React.useState(false);
  const [testIdRemoved, setTestRemove] = React.useState("");
  const testsQuery = useGetTestsQuery({
    variables: {
      data: {
        certificateType: EnglishCertificateType.Toiec,
        testIds: {
          ids: testIdsForget || [],
        },
      },
    },
  });
  const [
    updateTestMutation,
    updateTestMutationResult,
  ] = useUpdateTestMutation();
  React.useEffect(() => {
    setIconPills && setIconPills("tests");
    testsQuery.refetch();
  }, []);

  const [
    removeTestMutation,
    removeTestMutationResult,
  ] = useRemoveTestMutation();

  const removeTest = async () => {
    await removeTestMutation({
      variables: {
        id: testIdRemoved,
      },
    });
  };

  const fetchMoreTests = React.useCallback((): void => {
    if (
      testsQuery.loading ||
      !testsQuery.data ||
      !testsQuery.data.getTests ||
      !testsQuery.data.getTests.nextCursor
    )
      return;
    testsQuery.fetchMore({
      variables: {
        data: {
          certificateType: EnglishCertificateType.Toiec,
          testIds: {
            ids: testIdsForget || [],
          },
          cursor: testsQuery.data && testsQuery.data.getTests?.nextCursor,
        },
      },
      updateQuery: (prev, next) => {
        return {
          ...prev,
          getTestCategories: {
            ...prev.getTests,
            tests: [
              ...prev.getTests.tests,
              ...(next.fetchMoreResult
                ? next.fetchMoreResult.getTests.tests
                : []),
            ],
            nextCursor: next?.fetchMoreResult?.getTests?.nextCursor ?? null,
          },
        };
      },
    });
  }, [testIdsForget, testsQuery]);

  React.useEffect(() => {
    (updateTestMutationResult.data?.updateTest ||
      removeTestMutationResult.data) &&
      testsQuery.refetch();
  }, [
    updateTestMutationResult.loading,
    removeTestMutationResult.loading,
    updateTestMutationResult.data,
    removeTestMutationResult.data,
    testsQuery,
  ]);
  if (testsQuery.loading) {
    return <>{"Loading...."}</>;
  }
  const tests = testsQuery.data?.getTests.tests;
  return (
    <>
      {!modal && (
        <CardHeader>
          <CardTitle tag="h4">List of Tests</CardTitle>
        </CardHeader>
      )}
      <LazyLoad className='p-0' refetchQuery={fetchMoreTests}>
        <Table responsive>
          <thead className="text-primary font-10">
            <tr>
              <th className="text-right" style={{ width: "5%" }}></th>
              <th className="text-center font-weight-semi">Test Name</th>
              <th className="text-center font-weight-semi">Certificate</th>
              <th className="text-center font-weight-semi">Skill</th>
              <th className="text-center font-weight-semi">Status</th>
              <th className="text-center font-weight-semi">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tests &&
              tests.map((test, index) => {
                return (
                  <tr key={index}>
                    {modal && (
                      <td className="form-check m-0 p-td-initial">
                        <Label check>
                          <Input
                            type="checkbox"
                            onChange={async (e) => {
                              if (e.target.checked) {
                                testIds &&
                                  setTestIds &&
                                  setTestIds({
                                    ids: [...testIds.ids, test.id],
                                  });
                              } else {
                                const res = testIds?.ids.filter(
                                  (t) => t !== test.id
                                );
                                res &&
                                  setTestIds &&
                                  setTestIds({
                                    ids: res,
                                  });
                              }
                            }}
                          />
                          <span className="form-check-sign"></span>
                        </Label>
                      </td>
                    )}
                    {!modal && <td>{index + 1}</td>}
                    <td className="text-left font-weight-semi">
                      <Link
                        to={`create-test-toiec/${test.skillType.toLowerCase()}/${
                          test.id
                        }`}
                      >
                        {test.testName}
                      </Link>
                    </td>
                    <td className="text-center">
                      {test.certificateType === EnglishCertificateType.Toiec ? (
                        <Badge color="primary">{test.certificateType}</Badge>
                      ) : (
                        <Badge color="brand">{test.certificateType}</Badge>
                      )}
                    </td>
                    <td className="text-center">
                      {test.skillType === SkillsType.Reading ? (
                        <Badge color="success">{test.skillType}</Badge>
                      ) : (
                        <Badge color="info">{test.skillType}</Badge>
                      )}
                    </td>
                    <td className="text-center font-weight-semi">
                      {test.isPublished ? "Published" : "Draft"}
                    </td>
                    <td className="text-center">
                      <Button
                        className="btn-icon btn-round mr-1"
                        color="info"
                        size="sm"
                        type="button"
                        onClick={async () => {
                          await updateTestMutation({
                            variables: {
                              data: {
                                id: test.id,
                                isPublished: !test.isPublished,
                                testName: test.testName,
                              },
                            },
                          });
                        }}
                      >
                        <i className="now-ui-icons users_single-02"></i>
                      </Button>
                      <Link
                        className="btn btn-sm mr-1 btn-warning btn-icon btn-round"
                        to={`create-test-toiec/${test.skillType}/${test.id}`}
                      >
                        <i className="now-ui-icons ui-2_settings-90"></i>
                      </Link>
                      <Button
                        className="btn-icon btn-round"
                        color="danger"
                        size="sm"
                        type="button"
                        onClick={() => {
                          setTestRemove(test.id);
                          setIsOpenModalDelete(true);
                        }}
                      >
                        <i className="now-ui-icons ui-1_simple-remove"></i>
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        <ModalDelete
          isOpen={isOpenModalDelete}
          onClose={setIsOpenModalDelete}
          callback={removeTest}
          loading={removeTestMutationResult.loading}
        />
      </LazyLoad>
    </>
  );
};

export default ListTest;
