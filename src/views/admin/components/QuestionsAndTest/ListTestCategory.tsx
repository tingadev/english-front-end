import React from "react";
import {
  CardHeader,
  CardTitle,
  CardBody,
  Table,
  Badge,
  Button,
} from "reactstrap";
import {
  EnglishCertificateType,
  SkillsType,
  useGetTestCategoriesQuery,
  useRemoveTestCategoryMutation,
  useUpdateTestCategoryMutation,
} from "../../../../schema/schema";
import { Link } from "react-router-dom";
interface ListTestCategoryProps {
  setIconPills: (val: string) => void;
}

const ListTestCategory: React.FC<ListTestCategoryProps> = ({
  setIconPills,
}) => {
  const { data, loading, refetch } = useGetTestCategoriesQuery({
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
  React.useEffect(() => {
    setIconPills("test-categories");
    refetch();
  }, []);

  React.useEffect(() => {
    updateTestCategoryMutationResult.data?.updateTestCategory && refetch();
    removeTestCategoryMutationResult.data?.removeTestCategory && refetch();
  }, [
    updateTestCategoryMutationResult.loading,
    removeTestCategoryMutationResult.loading,
  ]);
  if (loading) {
    return <>{"Loading...."}</>;
  }
  const testCategories = data?.getTestCategories.testCategories;
  return (
    <>
      <CardHeader>
        <CardTitle tag="h4">List of Tests</CardTitle>
      </CardHeader>
      <CardBody>
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
                          await removeTestCategoryMutation({
                            variables: {
                              id: testCategory.id,
                            },
                          });
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
      </CardBody>
    </>
  );
};

export default ListTestCategory;
