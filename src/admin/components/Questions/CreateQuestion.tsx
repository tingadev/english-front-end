import React from "react";
import { Link } from "react-router-dom";
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
  CustomInput,
} from "reactstrap";
import { notificationAdd } from "../../utils/Notification";
import { EnglishCertificateOptions, SkillsTypeOptions } from "./CreatePart";
import {
  EnglishCertificateType,
  NewQuestionInput,
  QuestionType,
  useCreateQuestionMutation,
  SkillsType,
  AnswersInput,
  useGetPartsLazyQuery,
  PartFragment,
} from "../../../schema/schema";
import Select from "react-select";
import { useFormik } from "formik";
import * as yup from "yup";
import { store } from "react-notifications-component";
import ErrorMessage from "../Error";
import TinyMCETextarea from "../TinyMCETextarea";
// import { Route, Switch, Redirect } from "react-router-dom";

const answersKey : AnswersInput[] = [
  {
    keyAnswer: "A",
    answerContent: ""
  },
  {
    keyAnswer: "B",
    answerContent: ""
  },
  {
    keyAnswer: "C",
    answerContent: ""
  },
  {
    keyAnswer: "D",
    answerContent: ""
  },
];
let PartsOptions = [
  {
    value: '0',
    label: "Chose part",
  },
];
interface ToiecAdminProps {}

const CreateQuestion: React.FC<ToiecAdminProps> = () => {
  const notification = notificationAdd("Question");
  const [certificateTypeSelect, setCertificateTypeSelect] = React.useState(
    EnglishCertificateOptions[0]
  );
  const [skillTypeSelect, setSkillTypeSelect] = React.useState(
    SkillsTypeOptions[0]
  );
 
  const [partSelect, setPartSelect] = React.useState(
    PartsOptions[0]
  );
  const [partsQuery, partsResponse] = useGetPartsLazyQuery()
  const parts = partsResponse.data?.parts;
  React.useEffect(() => {
    partsQuery({
      variables: {
        certificateType: certificateTypeSelect.value
      }
    })
    PartsOptions = [
      {
        value: '0',
        label: "Chose part",
      },
    ];
    if(parts){
      parts.filter(part => part.skillType === skillTypeSelect.value).map((part) =>{
       const optionPart = {
         value: part.id,
         label: part.partName
       }
        PartsOptions = [...PartsOptions, optionPart];
      })
      
     }
  },[certificateTypeSelect, skillTypeSelect, parts])

  
  
  
 
  const initialValues: NewQuestionInput = {
    questionName: "",
    explaination: "",
    audioSec: 0,
    questionType: QuestionType.SingleChoice,
    content: "",
    answers: answersKey,
    certificateType: EnglishCertificateOptions[0]
      .value as EnglishCertificateType,
    skillType: SkillsTypeOptions[0].value as SkillsType,
    result: "",
  };
  const [createQuestion] = useCreateQuestionMutation();
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: yup.object().shape({
      questionName: yup.string().required("Part Name is a required field"),
      explaination: yup.string().required("Explaination is a required field"),
      content: yup.string().required("Content is a required field"),
      certificateType: yup
        .string()
        .required("Certificate Type is a required field"),
      skillType: yup.string().required("Skill Type is a required field"),
      result: yup.string().required("Result is a required field"),
      answers: yup.array().of(
        yup.object().test('', 'This field is required', function(e: any) {
          if(e.answerContent){
            return true;
          }
          return false;
        })
      )
    }),
    onSubmit: async (values) => {
      const result = await createQuestion({
        variables: {
          data: values,
        },
      });
      if (result.data?.createQuestion) {
        store.addNotification(notification);
        formik.resetForm();
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
                <h5 className="title">Create Question</h5>
                <div>
                  <Button
                    type="submit"
                    className="bg-info font-weight-bold font-10"
                  >
                    Submit
                  </Button>
                  <Button className="bg-danger font-weight-bold font-10">
                    Cancel
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col className="pr-1" md="6">
                    <FormGroup>
                      <label>Question Name</label>
                      <Input
                        placeholder="Question Name"
                        name="questionName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.questionName}
                      />
                    </FormGroup>
                    <ErrorMessage message={formik.errors.questionName} />
                  </Col>
                  <Col className="pl-1" md="6">
                    <FormGroup>
                      <label>Test</label>
                      <Input placeholder="Chose test " type="text" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="4" className="pr-1">
                    <FormGroup>
                      <label>Type of test</label>
                      <Select
                        className="react-select react-select-primary"
                        onChange={(opt: any) => {
                          setPartSelect(PartsOptions[0])
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
                  <Col md="4" className="pr-1 pl-1">
                    <FormGroup>
                      <label>Skill</label>
                      <Select
                        className="react-select react-select-primary"
                        onChange={(opt: any) => {
                          setPartSelect(PartsOptions[0])
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
                  <Col md="4" className="pl-1">
                    <FormGroup>
                      <label>Part</label>
                      <Select
                        className="react-select react-select-primary"
                        onChange={(opt: any) => {
                          setPartSelect(opt)
                          formik.setFieldValue("partId", opt.value);
                        }}
                        classNamePrefix="react-select"
                        placeholder="Single Select"
                        value={partSelect}
                        name="partId"
                        options={PartsOptions}
                      ></Select>
                      <ErrorMessage message={formik.errors.partId} />
                    </FormGroup>
                  </Col>
                </Row>
                
                <Row>
                  <Col className="" md="12">
                    <FormGroup>
                      <label>Content</label>
                      <TinyMCETextarea
                        textareaName="content"
                        onEditorChange={(e: any) => {
                          formik.setFieldValue("content", e);
                        }}
                        value={formik.values.content}
                      />
                    </FormGroup>
                    <ErrorMessage message={formik.errors.content} />
                  </Col>
                  </Row>
                  <Row>
                  <Col className="" md="12">
                    <FormGroup>
                      <label>Explaination</label>
                      <TinyMCETextarea
                        textareaName="explaination"
                        onEditorChange={(e: any) => {
                          formik.setFieldValue("explaination", e);
                        }}
                        value={formik.values.explaination}
                      />
                    </FormGroup>
                    <ErrorMessage message={formik.errors.explaination} />
                  </Col>
                </Row>
                
                <Row>
                  <Col className="pr-1" md="6">
                    <FormGroup className="d-flex justify-content-between">
                      <label>Answers Key</label>
                      <label className="position-relative">Result<ErrorMessage style={{
                        position: "absolute",
                        left: "60px",
                        top: "-6px",
                        minWidth: '200px',
                        fontWeight: 'normal',
                      }} message={formik.errors.result} /></label>
                    </FormGroup>
                    {answersKey.map((answer: AnswersInput, index: number) => {
                        return (
                          <FormGroup className="d-flex align-items-center" key={index}>
                            <label className="mr-2">{answer.keyAnswer}</label>
                            <div className="w-100">
                            <Input
                              type="text"
                              onChange={(opt: any) => {
                                answersKey[index].answerContent = opt.target.value
                                formik.setFieldValue("answers", answersKey);
                              }}
                              onBlur={formik.handleBlur}
                              name="answers"
                            />
                            {formik.errors.answers && <ErrorMessage message={formik.errors.answers[index] as string} />}
                            
                            </div>
                            <CustomInput
                              type="radio"
                              className="ml-3 mr-3"
                              id={`result${answer.keyAnswer}`}
                              value={answer.keyAnswer!}
                              name="result"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                          </FormGroup>
                        )
                    })}
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

export default CreateQuestion;
