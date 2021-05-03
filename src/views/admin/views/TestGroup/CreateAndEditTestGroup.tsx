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
} from "reactstrap";
import Select from "react-select";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  EnglishCertificateType,
  GroupType,
  NewTestGroupInput,
  TestGroupInfoFragment,
  useCreateTestGroupMutation,
  useGetTestGroupInfoLazyQuery,
  useUniqueLinkTestGroupMutation,
  useUpdateTestGroupMutation,
} from "../../../../schema/schema";
import { store } from "react-notifications-component";
import { useParams } from "react-router-dom";
import { notificationAdd } from "../../utils/Notification";
import ErrorMessage from "../../components/Error";
import { EnglishCertificateOptions } from "../../components/QuestionsAndTest/CreateAndEditPart";
import Loading from "../../../../components/Loading";
import ButtonSubmitGroup from "../../components/ButtonSubmit";
import { generateLink } from "../../utils/GenerateLink";
const penEdit = require("../../../../assets/img/pen.svg");
interface CreateAndEditTestGroupProps {
  testsGroupData?: TestGroupInfoFragment[];
}

export const ListOfTestGroups: { value: string | null; label: string }[] = [
  {
    value: null,
    label: "Chose test group",
  },
];

const GroupTypeOptions = [
  {
    value: "",
    label: "Chose type",
  },
  {
    value: GroupType.Test,
    label: "Test",
  },
  {
    value: GroupType.Blog,
    label: "Blog",
  },
  {
    value: GroupType.Landing,
    label: "Landing",
  },
];

const CreateAndEditTestGroup: React.FC<CreateAndEditTestGroupProps> = ({
  testsGroupData,
}) => {
  const { testGroupId } = useParams() as { testGroupId?: string };
  const [isDisableEditLink, setIsDisableEditLink] = React.useState(true);
  const [uniqueLinkTestGroupMutation] = useUniqueLinkTestGroupMutation();
  const notification = notificationAdd(
    "Test Group",
    `${testGroupId ? "Updated" : ""}`
  );
  const [getTestGroupQuery, getTestGroupResponse] = useGetTestGroupInfoLazyQuery();
  React.useEffect(() => {
    testGroupId &&
      getTestGroupQuery({
        variables: {
          id: testGroupId,
        },
      });
  }, [getTestGroupQuery, testGroupId]);
  const [
    selectedGroupTypeOptions,
    setSelectedGroupTypeOptions,
  ] = React.useState(GroupTypeOptions[1]);
  const [selectedTestGroup, setSelectedTestGroup] = React.useState(
    ListOfTestGroups[0]
  );
  const [certificateTypeSelect, setCertificateTypeSelect] = React.useState(
    EnglishCertificateOptions[1]
  );
  const testGroupData = getTestGroupResponse.data?.getTestGroup;
  React.useMemo(() => {
    if (testGroupData) {
      const selected = testsGroupData?.find(
        (t) => t.id === testGroupData.parentId
      );
      console.log('testGroupData', testGroupData);
      selected &&
        setSelectedTestGroup({
          value: selected.id,
          label: selected.testGroupName,
        });
      setSelectedGroupTypeOptions({
        value: testGroupData.groupType,
        label: testGroupData.groupType,
      });
      EnglishCertificateOptions.find((prop, key) => {
        if (prop.value === testGroupData?.certificateType) {
          setCertificateTypeSelect(EnglishCertificateOptions[key]);
        }
        return null;
      });
    }
  }, [testGroupData]);

  const [
    createTestGroupMutation,
    createTestGroupResponse,
  ] = useCreateTestGroupMutation();
  const [
    updateTestGroupMutation,
    updateTestGrouResponse,
  ] = useUpdateTestGroupMutation();

  const [defaultListTestGroup, setDefaultListTestGroup] = React.useState(
    ListOfTestGroups
  );

  let initialValues: NewTestGroupInput = {
    testGroupName: testGroupData?.testGroupName || "",
    link: testGroupData?.link || "",
    groupType: testGroupData?.groupType || GroupType.Test,
    parentId: testGroupData?.parentId || null,
    certificateType:
      testGroupData?.certificateType || EnglishCertificateType.Toeic,
    displayOrder: testGroupData?.displayOrder || 0,
  };

  React.useMemo(() => {
    if (!testsGroupData) {
      return ListOfTestGroups;
    }
    setDefaultListTestGroup([
      ...ListOfTestGroups,
      ...testsGroupData.map((tg) => {
        const data = {
          value: tg.id,
          label: tg.testGroupName,
        };
        return data;
      }),
    ]);
  }, [testsGroupData]);

  const [shouldValidate, setShouldValidate] = React.useState(false);
  const formik = useFormik({
    enableReinitialize: true,
    validateOnChange: shouldValidate,
    validateOnBlur: shouldValidate,
    initialValues,
    validationSchema: yup.object().shape({
      testGroupName: yup
        .string()
        .required("Test Group Name is a required field"),
      link: yup.string().trim().required("Link is a required field"),
      certificateType: yup
        .string()
        .required("Type of test is a required field"),
      groupType: yup.string().trim().required("GroupType is a required field"),
    }),
    onSubmit: async (values) => {
      const { link, ...remainingData } = values;
      const linkTrim = link.trim();
      const res = await uniqueLinkTestGroupMutation({
        variables: {
          link: linkTrim,
          id: testGroupId,
        },
      });
      if (res.data?.uniqueLinkTestGroup) {
        formik.setErrors({
          link: "This link already exists, please try again !",
        });
        return;
      }
      if (testGroupId) {
        const result = await updateTestGroupMutation({
          variables: {
            data: { id: testGroupId, link: linkTrim, ...remainingData },
          },
        });
        if (result.data?.updateTestGroup) {
          store.addNotification(notification);
        }
      } else {
        const result = await createTestGroupMutation({
          variables: {
            data: { link: linkTrim, ...remainingData },
          },
        });
        if (result.data?.createTestGroup) {
          store.addNotification(notification);
          formik.resetForm();
        }
      }
    },
  });
  if (getTestGroupResponse.loading) {
    return <Loading />;
  }

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
                <ButtonSubmitGroup
                  onClick={() => {
                    formik.submitForm();
                    setShouldValidate(true);
                  }}
                  link={`/admin/test-group`}
                  loading={
                    createTestGroupResponse.loading ||
                    updateTestGrouResponse.loading
                  }
                />
              </CardHeader>
              <CardBody>
                <Row>
                  <Col className="pr-1" md="4">
                    <FormGroup>
                      <label>Test Group Name</label>
                      <Input
                        placeholder="Test Group Name"
                        name="testGroupName"
                        type="text"
                        onChange={(e) => {
                          formik.handleChange(e);
                          const generatedLink = generateLink(e.target.value);
                          isDisableEditLink &&
                            formik.setFieldValue("link", generatedLink);
                        }}
                        onBlur={formik.handleBlur}
                        value={formik.values.testGroupName || ""}
                        className={formik.errors.testGroupName && "input-error"}
                      />

                      <ErrorMessage message={formik.errors.testGroupName} />
                    </FormGroup>
                  </Col>
                  <Col md="4" className="pl-1">
                    <FormGroup>
                      <label>Children of</label>
                      <Select
                        className="react-select react-select-primary"
                        onChange={(opt: any) => {
                          formik.setFieldValue("parentId", opt.value);
                          setSelectedTestGroup(opt);
                        }}
                        value={selectedTestGroup}
                        classNamePrefix="react-select"
                        placeholder="Chose type of Test"
                        name="parentId"
                        options={defaultListTestGroup}
                      ></Select>
                      <ErrorMessage message={formik.errors.parentId} />
                    </FormGroup>
                  </Col>

                  <Col md="4" className="pl-1">
                    <FormGroup>
                      <label>Type</label>
                      <Select
                        className="react-select react-select-primary"
                        onChange={(opt: any) => {
                          formik.setFieldValue("groupType", opt.value);
                          setSelectedGroupTypeOptions(opt);
                        }}
                        value={selectedGroupTypeOptions}
                        classNamePrefix="react-select"
                        placeholder="Chose type of Test"
                        name="groupType"
                        options={GroupTypeOptions}
                      ></Select>
                      <ErrorMessage message={formik.errors.groupType} />
                    </FormGroup>
                  </Col>

                  <Col md="6" className="pr-1">
                    <FormGroup>
                      <label>Label Test</label>
                      <Select
                        className="react-select react-select-primary"
                        onChange={(opt: any) => {
                          setCertificateTypeSelect(opt);
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
                  <Col className="pl-1" md="6">
                    <FormGroup>
                      <label>Link</label>
                      <div className="d-flex align-items-center">
                        <Input
                          placeholder="Link"
                          name="link"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.link || ""}
                          className={formik.errors.link && "input-error"}
                          disabled={isDisableEditLink}
                        />
                        <span
                          className="ml-2 cursor-pointer"
                          onClick={() => setIsDisableEditLink(false)}
                        >
                          <img alt="penEdit" src={penEdit} />
                        </span>
                      </div>
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
