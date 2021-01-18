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
import { useFormik, useFormikContext } from "formik";
import * as yup from "yup";
import {
  EnglishCertificateType,
  SkillsType,
  useCreatePartMutation,
  useGetPartLazyQuery,
  useUpdatePartMutation,
  NewPartInput,
} from "../../../../schema/schema";
import ErrorMessage from "../Error";
import { store } from "react-notifications-component";
import { Link, useParams } from "react-router-dom";
import { notificationAdd } from "../../utils/Notification";
import TinyMCETextarea from "../TinyMCETextarea";

interface CreateEditPartProps {
  partId?: string;
}
export const EnglishCertificateOptions = [
  {
    value: "",
    label: "Chose type of test",
  },
  {
    value: EnglishCertificateType.Toeic,
    label: EnglishCertificateType.Toeic,
  },
  {
    value: EnglishCertificateType.Ielts,
    label: EnglishCertificateType.Ielts,
  },
  {
    value: EnglishCertificateType.Custom,
    label: EnglishCertificateType.Custom,
  },
  {
    value: EnglishCertificateType.Blog,
    label: EnglishCertificateType.Blog,
  },
];

export const SkillsTypeOptions = [
  {
    value: "",
    label: "Chose type of skill",
  },
  {
    value: SkillsType.Reading,
    label: SkillsType.Reading,
  },
  {
    value: SkillsType.Listening,
    label: SkillsType.Listening,
  },
];

const CreateAndEditPart: React.FC<CreateEditPartProps> = () => {
  const { partId } = useParams();
  let notification = notificationAdd("Part");
  if (partId) {
    notification = notificationAdd("Part", "Updated");
  }
  const [certificateTypeSelect, setCertificateTypeSelect] = React.useState(
    EnglishCertificateOptions[0]
  );
  const [skillTypeSelect, setSkillTypeSelect] = React.useState(
    SkillsTypeOptions[0]
  );
  let initialValues: NewPartInput = {
    partName: "",
    description: "",
    certificateType: EnglishCertificateOptions[0]
      .value as EnglishCertificateType,
    skillType: SkillsTypeOptions[0].value as SkillsType,
  };
  const [getPartQuery, getPartResponse] = useGetPartLazyQuery();

  React.useEffect(() => {
    if (!partId) {
      return;
    }
    getPartQuery({
      variables: {
        id: partId,
      },
    });
  }, [partId]);
  if (getPartResponse.data) {
    const { __typename, ...data } = getPartResponse.data.part;
    initialValues = data;
  }
  React.useEffect(() => {
    if (getPartResponse.data) {
      SkillsTypeOptions.find((prop, key) => {
        if (prop.value === initialValues.skillType) {
          setSkillTypeSelect(SkillsTypeOptions[key]);
        }
      });
      EnglishCertificateOptions.find((prop, key) => {
        if (prop.value === initialValues.certificateType) {
          setCertificateTypeSelect(EnglishCertificateOptions[key]);
        }
      });
    }
  }, [getPartResponse]);
  const [createPart] = useCreatePartMutation();
  const [updatePart] = useUpdatePartMutation();
  const [shouldValidate, setShouldValidate] = React.useState(false);
  const formik = useFormik({
    enableReinitialize: true,
    validateOnChange: shouldValidate,
    validateOnBlur: shouldValidate,
    initialValues: initialValues,
    validationSchema: yup.object().shape({
      partName: yup.string().required("Part Name is a required field"),
      description: yup.string().required("Description is a required field"),
      certificateType: yup
        .string()
        .required("Certificate Type is a required field"),
      skillType: yup.string().required("Skill Type is a required field"),
    }),
    onSubmit: async (values) => {
      if (partId) {
        const result = await updatePart({
          variables: {
            data: values
          },
        });
        if (result.data?.updatePart) {
          store.addNotification(notification);
          getPartResponse.refetch && getPartResponse.refetch();
        }
      } else {
        const result = await createPart({
          variables: {
            data: values,
          },
        });
        if (result.data?.createPart) {
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
                <h5 className="title">{!partId ? 'Create Part' : 'Update Part'}</h5>
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
                    to={`/admin/toeic/part`}
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
                      <label>Part Name</label>
                      <Input
                        placeholder="Part Name"
                        name="partName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.partName}
                        className={formik.errors.partName && "input-error"}
                      />

                      <ErrorMessage message={formik.errors.partName} />
                    </FormGroup>
                  </Col>
                  <Col md="3" className="pl-1">
                    <FormGroup>
                      <label>Type of test</label>
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
                  <Col md="3" className="pl-1">
                    <FormGroup>
                      <label>Skill</label>
                      <Select
                        className="react-select react-select-primary"
                        onChange={(opt: any) => {
                          setSkillTypeSelect(opt);
                          formik.setFieldValue("skillType", opt.value);
                        }}
                        classNamePrefix="react-select"
                        placeholder="Single Select"
                        value={skillTypeSelect}
                        name="skillType"
                        options={SkillsTypeOptions}
                      ></Select>
                      <ErrorMessage message={formik.errors.skillType} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col className="pr-1" md="6">
                    <FormGroup>
                      <label>Description</label>
                      <TinyMCETextarea
                        textareaName="description"
                        onEditorChange={(e: any) => {
                          formik.setFieldValue("description", e);
                        }}
                        value={formik.values.description}
                      />
                      <ErrorMessage message={formik.errors.description} />
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

export default CreateAndEditPart;
