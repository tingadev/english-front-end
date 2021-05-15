import React from "react";
import {
  PartFragment,
  SkillsType,
  NewTestInput,
  TestQuestionFragment,
  TestFragment,
  AudioSecondsInput,
  MediaType,
  PartAndAudioSeconds,
} from "../../../../../schema/schema";
import { Button, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { useFormik } from "formik";
import { QuestionContext } from "../QuestionContext";
import { notificationAdd } from "../../../utils/Notification";
import { store } from "react-notifications-component";
import _ from "lodash";
import * as yup from "yup";
import { Link } from "react-router-dom";
import ListQuestionExam from "./ListQuestionExam";
import ErrorMessage from "../../../components/Error";
import AudioUpload from "../../../components/AudioUploader";
import { ButtonCreateQuestion } from "../../../components/ButtonQuestion/ButtonCreateQuestion";
import { ButtonAddPart } from "../../../components/ButtonQuestion/ButtonAddPart";
interface ExamProps {
  dataParts?: PartFragment[];
  skillType: SkillsType;
  questions?: TestQuestionFragment[];
  refetchTestQuestions?: any;
  testData?: TestFragment;
  refetchTest?: any;
}

const Exam: React.FC<ExamProps> = ({
  dataParts,
  skillType,
  questions,
  refetchTestQuestions,
  testData,
}) => {
  const questionContext = React.useContext(QuestionContext);
  const notification = notificationAdd("Test", "Update");
  const [partAndAudioSeconds, setPartAndAudioSeconds] = React.useState<
    AudioSecondsInput[]
  >([]);

  let partAndAudioSecondsDefault: PartAndAudioSeconds[] = [];
  React.useEffect(() => {
    if (testData?.partAndAudioSecs) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      partAndAudioSecondsDefault = testData?.partAndAudioSecs.map((p) => {
        const { __typename, ...data } = p;
        return data;
      });
    }
    setPartAndAudioSeconds(partAndAudioSecondsDefault);
  }, [dataParts]);
  let initialValues: NewTestInput = {
    id: testData?.id,
    certificateType: testData?.certificateType,
    explaination: testData?.explaination || "",
    testName: testData?.testName!,
    skillType: testData?.skillType,
    partAndAudioSecs:
      partAndAudioSeconds.length > 0
        ? partAndAudioSeconds
        : partAndAudioSecondsDefault,
    audioUrl: testData?.audioUrl,
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: yup.object().shape({
      testName: yup.string().required("Test Name is a required field"),
    }),
    onSubmit: async (values) => {
      const result = await questionContext.updateTestMutation({
        variables: {
          data: values,
        },
      });
      if (result.data?.updateTest) {
        store.addNotification(notification);
        partAndAudioSeconds.sort((a, b) => a.displayOrder! - b.displayOrder!);
        setPartAndAudioSeconds(partAndAudioSeconds);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Row>
        <Col md={12}>
          <div className="d-flex justify-content-between pl-5 align-items-end">
            <FormGroup className="w-50">
              <label>Test Name</label>
              <Input
                placeholder="Test Name"
                name="testName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.testName || ""}
                className={formik.errors.testName && "input-error"}
              />
              <ErrorMessage message={formik.errors.testName} />
            </FormGroup>

            <div>
              <Button
                type="submit"
                className="bg-info font-weight-bold font-10"
              >
                Submit
              </Button>
              <Link
                to={`/admin/toeic/tests`}
                className="bg-danger btn font-weight-bold font-10"
              >
                Cancel
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="w-50 pl-5 d-flex">
            <FormGroup>
              <label>Audio</label>
              <Input placeholder="Chose file" name="audioUrl" type="hidden" />
              <AudioUpload
                type={MediaType.Audio}
                url={testData?.audioUrl}
                onChange={(e: string) => {
                  formik.setFieldValue("audioUrl", e);
                }}
                onClick={() => {
                  formik.setFieldValue("audioUrl", "");
                }}
              />
            </FormGroup>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <ul className="list-style-none mt-4">
            {partAndAudioSeconds &&
              partAndAudioSeconds.map((p, index: number) => {
                const part =
                  dataParts && dataParts.find((part) => part.id === p.partId);
                return (
                  <div key={index}>
                    <li className="bg-primary d-flex justify-content-between align-items-center">
                      <h4 className="p-2 text-white my-0">{part?.partName}</h4>
                      <div className="ml-auto d-flex align-items-center pr-2">
                        {skillType === SkillsType.Listening && (
                          <FormGroup className="width-15rem d-flex mr-4 justify-content-between align-items-center">
                            <label className="text-white font-10">
                              Audio Seconds
                            </label>
                            <Input
                              placeholder="Seconds"
                              type="number"
                              onChange={async (e) => {
                                let res = _.cloneDeep(partAndAudioSeconds);
                                res = res.map((pp) => {
                                  if (pp.partId === p.partId) {
                                    pp.autdioSecs = parseInt(e.target.value);
                                  }
                                  return pp;
                                });
                                setPartAndAudioSeconds(res);
                                formik.setFieldValue(
                                  "partAndAudioSecs",
                                  partAndAudioSeconds
                                );
                              }}
                              value={partAndAudioSeconds[index].autdioSecs || 0}
                              onBlur={formik.handleBlur}
                              className={`width-7rem bg-white`}
                            />
                          </FormGroup>
                        )}
                        <FormGroup className=" d-flex mr-4 justify-content-between align-items-center">
                          <label className="text-white font-10">Order</label>
                          <Input
                            placeholder="Order"
                            type="number"
                            onChange={async (e) => {
                              let res = _.cloneDeep(partAndAudioSeconds);
                              res = res.map((pp) => {
                                if (pp.partId === p.partId) {
                                  pp.displayOrder = parseInt(e.target.value);
                                }
                                return pp;
                              });
                              setPartAndAudioSeconds(res);
                              formik.setFieldValue(
                                "partAndAudioSecs",
                                partAndAudioSeconds
                              );
                            }}
                            value={partAndAudioSeconds[index].displayOrder || 0}
                            onBlur={formik.handleBlur}
                            className={`ml-3 width-4rem bg-white`}
                          />
                        </FormGroup>
                        <Button
                          className="btn-icon btn-round text-center"
                          color="danger"
                          size="sm"
                          type="button"
                          onClick={async (e) => {
                            e.preventDefault();
                            const res = partAndAudioSeconds.filter(
                              (pp) => pp.partId !== p.partId
                            );
                            setPartAndAudioSeconds(res);
                            await questionContext.updateTestMutation({
                              variables: {
                                data: {
                                  partAndAudioSecs: res,
                                  id: testData?.id,
                                },
                              },
                            });
                          }}
                        >
                          <i className="now-ui-icons ui-1_simple-remove"></i>
                        </Button>
                      </div>
                    </li>
                    <ButtonCreateQuestion partId={p.partId!} />

                    <ListQuestionExam
                      questions={questions}
                      partId={p.partId!}
                      refetchTestQuestions={refetchTestQuestions}
                    />
                  </div>
                );
              })}
            <div className="mb-2 bg-primary d-flex justify-content-between align-items-center pl-2">
              <ButtonAddPart />
            </div>
          </ul>
        </Col>
      </Row>
    </Form>
  );
};

export default Exam;
