import React from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Input,
  Button,
  Badge,
  Spinner,
} from "reactstrap";
import {
  useGetTestCategoryLazyQuery,
  TestCategoryFragment,
  NewTestCategoryInput,
  useUpdateTestCategoryMutation,
  EnglishCertificateType,
  useUpdateTestMutation, 
  useRemoveFromCatMutation, SkillsType
} from "../../../../schema/schema";
import { Link, useParams } from "react-router-dom";
import { QuestionContext } from "./QuestionContext";
import { useFormik } from "formik";
import * as yup from "yup";
import { store } from "react-notifications-component";
import { notificationAdd } from "../../utils/Notification";
import ErrorMessage from "../Error";
import { ButtonAddTest } from "../ButtonQuestion/ButtonAddTest";
import ModalTest from "./ModalTest";

interface CreateAndEditTestCategoryProps {}

const CreateAndEditTestCategory: React.FC<CreateAndEditTestCategoryProps> = ({}) => {
  const questionContext = React.useContext(QuestionContext);
  const notification = notificationAdd("Test Category", "Update");
  const { id } = useParams();
  // create and mark it draft
  const [
    getTestCategoryQuery,
    getTestCategoryResponse,
  ] = useGetTestCategoryLazyQuery();
  const [updateTestCategory] = useUpdateTestCategoryMutation();
  const [
    updateTestMutation,
    updateTestMutationResult,
  ] = useUpdateTestMutation();
  const [
    removeTestFromCatMutation,
    removeTestFromCatMutationResult,
  ] = useRemoveFromCatMutation();
  const [idRemove, setIdRemove] = React.useState("");
  React.useEffect(() => {
    id &&
      getTestCategoryQuery({
        variables: {
          id,
        },
      });
  }, [id]);
  let testCategoryData: TestCategoryFragment | undefined;
  if (getTestCategoryResponse.data) {
    testCategoryData = getTestCategoryResponse.data.getTestCategory;
  }
  const tests = testCategoryData?.tests;
  const refetchTestCategory = () => {
    getTestCategoryResponse.refetch && getTestCategoryResponse.refetch();
  };
  React.useEffect(() => {
    if (updateTestMutationResult.data || removeTestFromCatMutationResult.data) {
      refetchTestCategory();
      removeTestFromCatMutationResult.data &&
        setIdRemove(removeTestFromCatMutationResult.data.removeFromCat.id);
    }
  }, [updateTestMutationResult.loading, removeTestFromCatMutationResult.loading]);
  let initialValues: NewTestCategoryInput = {
    id: testCategoryData?.id,
    certificateType: testCategoryData?.certificateType,
    testCategoryName: testCategoryData?.testCategoryName!,
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: yup.object().shape({
        testCategoryName: yup.string().required("Test Category name is a required field"),
    }),
    onSubmit: async (values) => {
      const result = await updateTestCategory({
        variables: {
          data: values,
        },
      });
      if (result.data?.updateTestCategory) {
        store.addNotification(notification);
      }
    },
  });

  if (getTestCategoryResponse.loading) {
    return <>{"...loading"}</>;
  }

  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-center">
        <h5 className="title">Create Test Category</h5>
      </CardHeader>
      <CardBody>
        <Form onSubmit={formik.handleSubmit}>
          <Row>
            <Col sm="12">
              <div className="d-flex justify-content-between pl-5 align-items-end">
                <FormGroup className="w-50">
                  <label>Test Category Name</label>
                  <Input
                    placeholder="Test Category Name"
                    name="testCategoryName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.testCategoryName || ""}
                    className={formik.errors.testCategoryName && "input-error"}
                  />
                  <ErrorMessage message={formik.errors.testCategoryName} />
                </FormGroup>

                <div>
                  <Button
                    type="submit"
                    className="bg-info font-weight-bold font-10"
                  >
                    Submit
                  </Button>
                  <Link
                    to={`/admin/toiec/test-categories`}
                    className="bg-danger btn font-weight-bold font-10"
                  >
                    Cancel
                  </Link>
                </div>
              </div>
            </Col>

            <Col sm="12">
              <div className="px-4 mt-5">
                <div className="d-flex mb-2 px-2 justify-content-between align-items-center">
                  <span
                    style={{ width: "10%" }}
                    className="font-10 text-primary text-center font-weight-semi"
                  >
                    Order
                  </span>
                  <span
                    style={{ width: "20%" }}
                    className="font-10 text-primary text-center font-weight-semi"
                  >
                    Test Name
                  </span>
                  <span
                    style={{ width: "20%" }}
                    className="font-10 text-primary text-center font-weight-semi"
                  >
                    Skill
                  </span>
                  <span
                    style={{ width: "20%" }}
                    className="font-10 text-primary text-center font-weight-semi"
                  >
                    Certificate
                  </span>
                  <span
                    style={{ width: "10%" }}
                    className="font-10 text-primary text-center font-weight-semi"
                  >
                    Action
                  </span>
                </div>
                <div>
                  <>
                    {tests &&
                      tests.map((t, t_index) => {
                        let t_order = t.displayOrder;
                        return (
                          <div
                            className="d-flex mb-2 px-2 justify-content-between align-items-center"
                            key={t_index}
                          >
                            <span
                              style={{ width: "10%" }}
                              className="font-10 text-center text-primary font-weight-semi"
                            >
                              <Input
                                defaultValue={t.displayOrder}
                                type="number"
                                onChange={(e) => {
                                  t_order = parseInt(e.target.value);
                                }}
                              />
                            </span>
                            <span
                              style={{ width: "20%" }}
                              className="font-10 text-center text-primary font-weight-semi"
                            >
                              {t.testName}
                            </span>
                            <span
                              style={{ width: "20%" }}
                              className="text-center"
                            >
                      {t.skillType === SkillsType.Reading ? (
                        <Badge color="success">{t.skillType}</Badge>
                      ) : (
                        <Badge color="info">{t.skillType}</Badge>
                      )}
                    </span>
                            <span
                              style={{ width: "20%" }}
                              className="text-center"
                            >
                              {t.certificateType ===
                              EnglishCertificateType.Toiec ? (
                                <Badge color="primary">
                                  {t.certificateType}
                                </Badge>
                              ) : (
                                <Badge color="brand">{t.certificateType}</Badge>
                              )}
                            </span>
                            <div className="d-flex">
                              <Button
                                className="btn-icon btn-round mr-1"
                                color="info"
                                size="sm"
                                type="button"
                                onClick={async (e) => {
                                  e.preventDefault();
                                  await updateTestMutation({
                                    variables: {
                                      data: {
                                        id: t.id,
                                        displayOrder: t_order,
                                      },
                                    },
                                  });
                                }}
                              >
                                <i className="now-ui-icons users_single-02"></i>
                              </Button>
                              <Button className="btn btn-sm mr-1 btn-warning btn-icon btn-round">
                                <i className="now-ui-icons ui-2_settings-90"></i>
                              </Button>
                              <Button
                                className="btn-icon btn-round text-center"
                                color="danger"
                                size="sm"
                                type="button"
                                onClick={async (e) => {
                                  e.preventDefault();
                                  await removeTestFromCatMutation({
                                    variables: {
                                      id: t.id,
                                    },
                                  });
                                }}
                              >
                                {removeTestFromCatMutationResult.loading &&
                                idRemove === t.id ? (
                                  <Spinner color="primary" />
                                ) : (
                                  <i className="now-ui-icons ui-1_simple-remove"></i>
                                )}
                              </Button>
                            </div>
                          </div>
                        );
                      })}
                  </>
                  <ButtonAddTest />
                </div>{" "}
              </div>
            </Col>
            <ModalTest testCategoryId={testCategoryData?.id} refetchTestCategory={refetchTestCategory} tests={testCategoryData?.tests}/>
          </Row>
        </Form>
      </CardBody>
    </Card>
  );
};

export default CreateAndEditTestCategory;
