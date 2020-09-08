import React from "react";
import { ButtonAddQuestion } from "../../ButtonQuestion/ButtonAddQuestion";
import {
  PartFragment,
  SkillsType,
  NewTestInput,
  PartAndAudioSeconds,
  EnglishCertificateType,
  TestQuestionFragment,
} from "../../../../schema/schema";
import { Button, Row, Col, Form, FormGroup, Input, Badge } from "reactstrap";
import { useFormik } from "formik";
import ErrorMessage from "../../Error";
import { ButtonCreateQuestion } from "../../ButtonQuestion/ButtonCreateQuestion";

interface ExamProps {
  dataParts?: PartFragment[];
  setIsOpenModal: (isOpenModal: boolean) => void;
  skillType: SkillsType;
  questions?: TestQuestionFragment[];
  setPartId: (partId: string) => void;
  setIsOpenModalCreateQuestion: (value: boolean) => void;
}

const Exam: React.FC<ExamProps> = ({
  dataParts,
  setIsOpenModal,
  skillType,
  questions,
  setPartId,
  setIsOpenModalCreateQuestion,
}) => {
  const partsFilter = dataParts?.filter((p) => p.skillType === skillType);
  let partAndAudioSeconds: PartAndAudioSeconds[] = [];
  partsFilter &&
    partsFilter.map((e) => {
      const ele = {
        partId: e.id,
        autdioSecs: 0,
      };
      partAndAudioSeconds.push(ele);
    });

  let initialValues: NewTestInput = {
    testName: "",
    skillType,
    partAndAudioSecs: partAndAudioSeconds,
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <Form>
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
                value={formik.values.testName}
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
              <Button className="bg-danger font-weight-bold font-10">
                Cancel
              </Button>
            </div>
          </div>
        </Col>
        <Col>
          <ul className="list-style-none mt-4">
            {partsFilter &&
              partsFilter.map((p: PartFragment, index: number) => {
                return (
                  <div key={index}>
                    <li className="mb-2 bg-primary d-flex justify-content-between align-items-center">
                      <h4 className="p-2 text-white my-0">{p.partName}</h4>
                      <FormGroup className="width-15rem d-flex pr-2 justify-content-between align-items-center">
                        <label className="text-white font-10">
                          Audio Seconds
                        </label>
                        <Input
                          placeholder="Seconds"
                          type="text"
                          onChange={(e) => {
                            formik.setFieldValue(
                              "partAndAudioSecs",
                              partAndAudioSeconds
                            );
                          }}
                          value={
                            formik.values.partAndAudioSecs![index].autdioSecs!
                          }
                          onBlur={formik.handleBlur}
                          className={`width-7rem bg-white ${
                            formik.errors.testName && "input-error"
                          }`}
                        />
                      </FormGroup>
                    </li>
                    <ButtonAddQuestion
                      setIsOpenModal={setIsOpenModal}
                      setPartId={setPartId}
                      partId={p.id}
                    />
                    <ButtonCreateQuestion
                      setIsOpenModalCreateQuestion={
                        setIsOpenModalCreateQuestion
                      }
                      setPartId={setPartId}
                      partId={p.id}
                    />
                    <div className="d-flex mb-2 px-5 justify-content-between align-items-center">
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
                        Question Name
                      </span>
                      <span
                        style={{ width: "20%" }}
                        className="font-10 text-primary text-center font-weight-semi"
                      >
                        Certificate
                      </span>
                      <span
                        style={{ width: "20%" }}
                        className="font-10 text-primary text-center font-weight-semi"
                      >
                        Question Type
                      </span>
                      <span
                        style={{ width: "20%" }}
                        className="font-10 text-primary text-center font-weight-semi"
                      ></span>
                      <span
                        style={{ width: "10%" }}
                        className="font-10 text-primary text-center font-weight-semi"
                      >
                        Action
                      </span>
                    </div>
                    <div>
                      <>
                        {questions &&
                          questions.map((q, q_index) => {
                            if (q.part.id === p.id) {
                              return (
                                <div
                                  className="d-flex mb-2 px-5 justify-content-between align-items-center"
                                  key={q_index}
                                >
                                  <span
                                    style={{ width: "10%" }}
                                    className="font-10 text-center text-primary font-weight-semi"
                                  >
                                    {q_index + 1}
                                  </span>
                                  <span
                                    style={{ width: "20%" }}
                                    className="font-10 text-center text-primary font-weight-semi"
                                  >
                                    {q.question.questionName}
                                  </span>
                                  <span
                                    style={{ width: "20%" }}
                                    className="text-center"
                                  >
                                    {q.question.certificateType ===
                                    EnglishCertificateType.Toiec ? (
                                      <Badge color="primary">
                                        {q.question.certificateType}
                                      </Badge>
                                    ) : (
                                      <Badge color="brand">
                                        {q.question.certificateType}
                                      </Badge>
                                    )}
                                  </span>
                                  <span
                                    style={{ width: "20%" }}
                                    className="font-10 text-primary text-center"
                                  >
                                    {q.question.questionType}
                                  </span>
                                  <span
                                    style={{ width: "20%" }}
                                    className="font-10 text-brand text-center font-weight-semi"
                                  >
                                    View Details
                                  </span>
                                  <Button
                                    style={{ width: "10%" }}
                                    className="btn-icon btn-round text-center"
                                    color="danger"
                                    size="sm"
                                    type="button"
                                    onClick={(e) => {
                                      e.preventDefault();

                                      // remove question query
                                    }}
                                  >
                                    <i className="now-ui-icons ui-1_simple-remove"></i>
                                  </Button>
                                </div>
                              );
                            }
                          })}
                      </>
                    </div>
                  </div>
                );
              })}
          </ul>
        </Col>
      </Row>
    </Form>
  );
};

export default Exam;
