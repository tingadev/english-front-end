import React from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
  Form,
  Button,
} from "reactstrap";
import Select from "react-select";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  EnglishCertificateType,
  NewTestGroupInput,
    TestGroupFragment,
  useCreateTestGroupMutation,
  useGetTestGroupLazyQuery,
  useUpdateTestGroupMutation,
} from "../../../../schema/schema";
import { store } from "react-notifications-component";
import { Link, useParams } from "react-router-dom";
import { notificationAdd } from "../../utils/Notification";
import ErrorMessage from "../../components/Error";
import { EnglishCertificateOptions } from "../../components/QuestionsAndTest/CreateAndEditPart";

interface CreateAndEditTestGroupProps {
    testsGroupData?: TestGroupFragment[];
}

export const ListOfTestGroups = [
  {
    value: "",
    label: "Chose Test Group",
  },
];


const CreateAndEditTestGroup: React.FC<CreateAndEditTestGroupProps> = ({testsGroupData}) => {
  const { testGroupId } = useParams();
  let notification = notificationAdd("Test Group");
  
  if (testGroupId) {
    notification = notificationAdd("Test Group", "Updated");
  }
  const [listOfTestGroupsSelect, setListOfTestGroupsSelect] = React.useState(
    ListOfTestGroups
  );
  const [certificateTypeSelect, setCertificateTypeSelect] = React.useState(
    EnglishCertificateOptions[0]
  );
  let initialValues: NewTestGroupInput = {
    testGroupName: "",
  };
  const [
    createTestGroupMutation,
    createTestGroupMutationResult,
  ] = useCreateTestGroupMutation();
  const [
    updateTestGroupMutation,
    updateTestGroupMutationResult,
  ] = useUpdateTestGroupMutation();
  const [
    getTestGroupQuery,
    getTestGroupQueryRespone,
  ] = useGetTestGroupLazyQuery();
 
  React.useEffect(() => {
    if (!testGroupId) {
      return;
    }
    getTestGroupQuery({
      variables: {
        id: testGroupId,
      },
    });
  }, [testGroupId]);
  if (getTestGroupQueryRespone.data) {
    const { __typename, testCategories, ...data } = getTestGroupQueryRespone.data.getTestGroup;
    initialValues = data;
  }
  React.useEffect(() => {
    testsGroupData?.map((tg) => {
        const data = {
            value: tg.id,
            label: tg.testGroupName,
        }
        setListOfTestGroupsSelect([
            ...listOfTestGroupsSelect,
            data,
        ])
    })
   
  }, [testsGroupData]);

  React.useEffect(() => {
    EnglishCertificateOptions.find((prop, key) => {
      if (prop.value === getTestGroupQueryRespone?.data?.getTestGroup.certificateType) {
        setCertificateTypeSelect(EnglishCertificateOptions[key]);
      }
    });
  },[getTestGroupQueryRespone.data])


  const [shouldValidate, setShouldValidate] = React.useState(false);
  const formik = useFormik({
    enableReinitialize: true,
    validateOnChange: shouldValidate,
    validateOnBlur: shouldValidate,
    initialValues: initialValues,
    validationSchema: yup.object().shape({
        testGroupName: yup.string().required("Test Group Name is a required field"),
        link: yup.string().required("Link is a required field"),
        certificateType: yup.string().required("Type of test is a required field"),
     
    }),
    onSubmit: async (values) => {
      if (testGroupId) {
        const result = await updateTestGroupMutation({
          variables: {
            data: values,
          },
        });
        if (result.data?.updateTestGroup) {
          store.addNotification(notification);
          getTestGroupQueryRespone.refetch &&
            getTestGroupQueryRespone.refetch();
        }
      } else {
        const result = await createTestGroupMutation({
          variables: {
            data: values,
          },
        });
        if (result.data?.createTestGroup) {
          store.addNotification(notification);
          formik.resetForm();
        }
      }
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Row>
          <Col>
            <Card>
              <CardHeader className="d-flex justify-content-between align-items-center">
                <h5 className="title">
                  {!testGroupId ? "Create Test Group" : "Update Test Group"}
                </h5>
                <div>
                  <Button
                    type="button"
                    className="bg-info font-weight-bold font-10"
                    onClick={() => {
                      formik.submitForm();
                      setShouldValidate(true);
                    }}
                  >
                    Submit
                  </Button>
                  <Link
                    to={`/admin/test-group`}
                    className="bg-danger btn font-weight-bold font-10"
                  >
                    Cancel
                  </Link>
                </div>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col className="pr-1" md="6">
                    <FormGroup>
                      <label>Test Group Name</label>
                      <Input
                        placeholder="Part Name"
                        name="testGroupName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.testGroupName || ""}
                        className={formik.errors.testGroupName && "input-error"}
                      />

                      <ErrorMessage message={formik.errors.testGroupName} />
                    </FormGroup>
                  </Col>
                  {/* <Col md="6" className="pl-1">
                    <FormGroup>
                      <label>Children of</label>
                      <Select
                        className="react-select react-select-primary"
                        onChange={(opt: any) => {
                            setListOfTestGroupsSelect(opt)
                          formik.setFieldValue("parentId", opt.value);
                        }}
                        value={listOfTestGroupsSelect[0]}
                        classNamePrefix="react-select"
                        placeholder="Chose type of Test"
                        name="parentId"
                        options={listOfTestGroupsSelect}
                      ></Select>
                      <ErrorMessage message={formik.errors.parentId} />
                    </FormGroup>
                  </Col> */}

                  <Col md="6" className="pl-1">
                    <FormGroup>
                      <label>Label Test</label>
                      <Select
                        className="react-select react-select-primary"
                        onChange={(opt: any) => {
                          setCertificateTypeSelect(opt)
                          formik.setFieldValue("certificateType", opt.value);
                        }}
                        value={certificateTypeSelect}
                        classNamePrefix="react-select"
                        placeholder="Chose type of Test"
                        name="certificateType"
                        options={EnglishCertificateOptions}
                      ></Select>
                      <ErrorMessage message={formik.errors.certificateType} />
                    </FormGroup>
                  </Col>
                  <Col className="pr-1" md="3">
                    <FormGroup>
                      <label>Link</label>
                      <Input
                        placeholder="Link"
                        name="link"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.link || ""}
                        className={formik.errors.link && "input-error"}
                      />

                      <ErrorMessage message={formik.errors.link} />
                    </FormGroup>
                  </Col>
                 
                </Row>
               
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default CreateAndEditTestGroup;
