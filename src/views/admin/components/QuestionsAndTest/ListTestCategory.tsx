import React from "react";
import {
  CardHeader,
  CardTitle,
  Table,
  Badge,
  Button,
} from "reactstrap";
import {
  EnglishCertificateType,
  useGetTestCategoriesQuery,
  useRemoveTestCategoryMutation,
  useUpdateTestCategoryMutation,
} from "../../../../schema/schema";
import { Link } from "react-router-dom";
import ModalDelete from "../Modal/Delete";
import LazyLoad from "../LazyLoad";
interface ListTestCategoryProps {
  setIconPills: (val: string) => void;
}

const ListTestCategory: React.FC<ListTestCategoryProps> = ({
  setIconPills,
}) => {
  const [isOpenModalDelete, setIsOpenModalDelete] = React.useState(false);
  const testCategoriesQuery = useGetTestCategoriesQuery({
    variables: {
      data: {
        certificateType: EnglishCertificateType.Toiec,
      },
    },
  });

  const [
    updateTestCategoryMutation,
    updateTestCategoryMutationResult,
  ] = useUpdateTestCategoryMutation();
  const [
    removeTestCategoryMutation,
    removeTestCategoryMutationResult,
  ] = useRemoveTestCategoryMutation();

  const fetchMoreTestCategories = React.useCallback((): void => {
    if (
      testCategoriesQuery.loading ||
      !testCategoriesQuery.data ||
      !testCategoriesQuery.data.getTestCategories ||
      !testCategoriesQuery.data.getTestCategories.nextCursor
    )
      return;
    testCategoriesQuery.fetchMore({
      variables: {
        data: {
          certificateType: EnglishCertificateType.Toiec,
          cursor:
            testCategoriesQuery.data &&
            testCategoriesQuery.data.getTestCategories?.nextCursor,
        },
      },
      updateQuery: (prev, next) => {
        return {
          ...prev,
          getTestCategories: {
            ...prev.getTestCategories,
            getTestCategories: [
              ...prev.getTestCategories.testCategories,
              ...(next.fetchMoreResult
                ? next.fetchMoreResult.getTestCategories.testCategories
                : []),
            ],
            nextCursor:
              next?.fetchMoreResult?.getTestCategories?.nextCursor ?? null,
          },
        };
      },
    });
  }, [testCategoriesQuery]);

  const [testCategoryIdRemoved, setTestCategoryIdRemoved] = React.useState("");
  const removeTestCategory = async () => {
    await removeTestCategoryMutation({
      variables: {
        id: testCategoryIdRemoved,
      },
    });
  };
  React.useEffect(() => {
    setIconPills("test-categories");
    testCategoriesQuery.refetch();
  }, [setIconPills, testCategoriesQuery]);

  React.useEffect(() => {
    updateTestCategoryMutationResult.data?.updateTestCategory &&
      testCategoriesQuery.refetch();
    if (removeTestCategoryMutationResult.data?.removeTestCategory) {
      testCategoriesQuery.refetch();
      setIsOpenModalDelete(false);
    }
  }, [
    updateTestCategoryMutationResult.loading,
    removeTestCategoryMutationResult.loading,
    updateTestCategoryMutationResult.data,
    removeTestCategoryMutationResult.data,
    testCategoriesQuery,
  ]);
  if (testCategoriesQuery.loading) {
    return <>{"Loading...."}</>;
  }
  const testCategories =
    testCategoriesQuery.data?.getTestCategories.testCategories;
  return (
    <>
      <CardHeader>
        <CardTitle tag="h4">List of Tests</CardTitle>
      </CardHeader>
      <LazyLoad className='p-0' refetchQuery={fetchMoreTestCategories}>
        <Table responsive>
          <thead className="text-primary font-10">
            <tr>
              <th className="text-right" style={{ width: "5%" }}></th>
              <th className="text-center font-weight-semi">Test Name</th>
              <th className="text-center font-weight-semi">Certificate</th>
              <th className="text-center font-weight-semi">Status</th>
              <th className="text-center font-weight-semi">Actions</th>
            </tr>
          </thead>
          <tbody>
            {testCategories &&
              testCategories.map((testCategory, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td className="text-left font-weight-semi">
                      <Link
                        to={`create-test-category/${testCategory.certificateType.toLowerCase()}/${
                          testCategory.id
                        }`}
                      >
                        {testCategory.testCategoryName}
                      </Link>
                    </td>
                    <td className="text-center">
                      {testCategory.certificateType ===
                      EnglishCertificateType.Toiec ? (
                        <Badge color="primary">
                          {testCategory.certificateType}
                        </Badge>
                      ) : (
                        <Badge color="brand">
                          {testCategory.certificateType}
                        </Badge>
                      )}
                    </td>
                    <td className="text-center font-weight-semi">
                      {testCategory.isPublished ? "Published" : "Draft"}
                    </td>
                    <td className="text-center">
                      <Button
                        className="btn-icon btn-round mr-1"
                        color="info"
                        size="sm"
                        type="button"
                        onClick={async () => {
                          await updateTestCategoryMutation({
                            variables: {
                              data: {
                                id: testCategory.id,
                                isPublished: !testCategory.isPublished,
                                testCategoryName: testCategory.testCategoryName,
                              },
                            },
                          });
                        }}
                      >
                        <i className="now-ui-icons users_single-02"></i>
                      </Button>
                      <Link
                        className="btn btn-sm mr-1 btn-warning btn-icon btn-round"
                        to={`create-test-category/${testCategory.certificateType.toLowerCase()}/${
                          testCategory.id
                        }`}
                      >
                        <i className="now-ui-icons ui-2_settings-90"></i>
                      </Link>
                      <Button
                        className="btn-icon btn-round"
                        color="danger"
                        size="sm"
                        type="button"
                        onClick={async () => {
                          setTestCategoryIdRemoved(testCategory.id);
                          setIsOpenModalDelete(true);
                          console.log("isOpenModalDelete", isOpenModalDelete);
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
          callback={removeTestCategory}
          loading={removeTestCategoryMutationResult.loading}
        />
      </LazyLoad>
    </>
  );
};

export default ListTestCategory;
