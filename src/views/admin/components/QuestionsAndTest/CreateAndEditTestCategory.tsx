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
  useRemoveFromCatMutation,
  SkillsType,
  OrderDirection,
  TestGroupFragment,
  useGetTestGroupsQuery,
} from "../../../../schema/schema";
import { Link, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { store } from "react-notifications-component";
import { notificationAdd } from "../../utils/Notification";
import ErrorMessage from "../Error";
import { ButtonAddTest } from "../ButtonQuestion/ButtonAddTest";
import ModalTest from "./ModalTest";
import { ListOfTestGroups } from "../../views/TestGroup/CreateAndEditTestGroup";
import Select from "react-select";
import _ from "lodash";

interface CreateAndEditTestCategoryProps {}

const CreateAndEditTestCategory: React.FC<CreateAndEditTestCategoryProps> = () => {
  const notification = notificationAdd("Test Category", "Update");
  const { id } = useParams() as { id?: string };
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

  const getTestGroupsQuery = useGetTestGroupsQuery({
    variables: {
      data: {
        orderDirection: OrderDirection.Asc,
      },
    },
  });

  const [idRemove, setIdRemove] = React.useState("");

  React.useEffect(() => {
    id &&
      getTestCategoryQuery({
        variables: {
          id,
        },
      });
  }, [id]);
  let testsGroupData: TestGroupFragment[] | undefined;
  if (getTestGroupsQuery.data) {
    testsGroupData = getTestGroupsQuery.data.getTestGroups.testGroups;
  }

  const defaultListTestGroup = React.useMemo(() => {
    if (!testsGroupData) {
      return ListOfTestGroups;
    }
    return [
      ...ListOfTestGroups,
      ...testsGroupData.map((tg) => {
        const data = {
          value: tg.id,
          label: tg.testGroupName,
        };
        return data;
      }),
    ];
  }, [testsGroupData]);
  let defaultValue: any;

  let testCategoryData: TestCategoryFragment | undefined;
  if (getTestCategoryResponse.data) {
    testCategoryData = getTestCategoryResponse.data.getTestCategory;
    defaultValue = defaultListTestGroup.find(
      (e) => e.value === testCategoryData?.testGroup?.id
    );
  }
  const tests = _.cloneDeep(testCategoryData?.tests);
  const refetchTestCategory = () => {
    getTestCategoryResponse.refetch && getTestCategoryResponse.refetch();
  };
  React.useEffect(() => {
    if (updateTestMutationResult.data || removeTestFromCatMutationResult.data) {
      refetchTestCategory();
      removeTestFromCatMutationResult.data &&
        setIdRemove(removeTestFromCatMutationResult.data.removeFromCat.id);
    }
  }, [
    updateTestMutationResult.loading,
    removeTestFromCatMutationResult.loading,
  ]);
  let initialValues: NewTestCategoryInput = {
    id: testCategoryData?.id,
    certificateType: testCategoryData?.certificateType,
    testCategoryName: testCategoryData?.testCategoryName!,
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: yup.object().shape({
      testCategoryName: yup
        .string()
        .required("Test Category name is a required field"),
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
                    to={`/admin/toeic/test-categories`}
                    className="bg-danger btn font-weight-bold font-10"
                  >
                    Cancel
                  </Link>
                </div>
              </div>
            </Col>
            <Col md="6" className="">
              <FormGroup className="pl-5">
                <label>Test Group</label>
                <Select
                  className="react-select react-select-primary"
                  onChange={(opt: any) => {
                    formik.setFieldValue("testGroupId", opt.value);
                  }}
                  defaultValue={defaultValue}
                  classNamePrefix="react-select"
                  placeholder="Chose type of Test Group"
                  name="testGroupId"
                  options={defaultListTestGroup}
                ></Select>
                <ErrorMessage message={formik.errors.testGroupId} />
              </FormGroup>
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
                      tests
                        .sort((a, b) => a.displayOrder - b.displayOrder)
                        .map((t, t_index) => {
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
                                    t.displayOrder = parseInt(e.target.value);
                                  }}
                                />
                              </span>
                              <span
                                style={{ width: "20%" }}
                                className="font-10 text-center font-weight-semi"
                              >
                                <Link
                                  to={`/admin/toeic/create-test-toeic/${t.skillType.toLowerCase()}/${
                                    t.id
                                  }`}
                                  className="text-primary"
                                >
                                  {t.testName}
                                </Link>
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
                                EnglishCertificateType.Toeic ? (
                                  <Badge color="primary">
                                    {t.certificateType}
                                  </Badge>
                                ) : (
                                  <Badge color="brand">
                                    {t.certificateType}
                                  </Badge>
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
                                          displayOrder: t.displayOrder,
                                        },
                                      },
                                    });
                                  }}
                                >
                                  <i className="now-ui-icons users_single-02"></i>
                                </Button>
                                <Link
                                  to={`/admin/toeic/create-test-toeic/${t.skillType.toLowerCase()}/${
                                    t.id
                                  }`}
                                  className="btn btn-sm mr-1 btn-warning btn-icon btn-round"
                                >
                                  <i className="now-ui-icons ui-2_settings-90"></i>
                                </Link>
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
            <ModalTest
              testCategoryId={testCategoryData?.id}
              refetchTestCategory={refetchTestCategory}
              tests={testCategoryData?.tests}
            />
          </Row>
        </Form>
      </CardBody>
    </Card>
  );
};

export default CreateAndEditTestCategory;
