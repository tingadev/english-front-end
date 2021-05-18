import { useFormikContext } from "formik";
import React from "react";
import { Button, Col, CustomInput, FormGroup, Input, Row } from "reactstrap";
import {
  AnswersGroupInput,
  AnswersInput,
  NewQuestionInput,
} from "../../../../schema/schema";
import { ButtonAdd } from "../../components/ButtonQuestion/ButtonAdd";
import ErrorMessage from "../../components/Error";
import TinyMCETextarea from "../../components/TinyMCETextarea";
import { answersKeyDefault } from "./QuestionsGroupInfo";
interface QuestionInfoProps {
  handleRemoveQuestionGroup: (val?: string | null) => void;
  answersKeyState: AnswersInput[];
  setAnswerKeyState: (val: AnswersInput[]) => void;
  isCheckedResult: string;
  setIsCheckedResult: (val: string) => void;
  answersGroupsArr: AnswersGroupInput[];
  setAnswersGroupsArr: (val: AnswersGroupInput[]) => void;
}

const QuestionInfo: React.FC<QuestionInfoProps> = ({
  handleRemoveQuestionGroup,
  answersKeyState,
  setAnswerKeyState,
  isCheckedResult,
  setIsCheckedResult,
  answersGroupsArr,
  setAnswersGroupsArr,
}) => {
  const formik = useFormikContext<NewQuestionInput>();

  return (
    <>
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
      </Row>
      <Row>
        <Col className="" md="6">
          <FormGroup>
            <label>Description</label>
            <TinyMCETextarea
              textareaName="description"
              onEditorChange={(e: any) => {
                formik.setFieldValue("description", e);
              }}
              value={formik.values.description}
              height={300}
            />
          </FormGroup>
          <ErrorMessage message={formik.errors.description} />
        </Col>
        <Col className="" md="6">
          <FormGroup>
            <label>Explaination</label>
            <TinyMCETextarea
              textareaName="explaination"
              onEditorChange={(e: any) => {
                formik.setFieldValue("explaination", e);
              }}
              value={formik.values.explaination}
              height={300}
            />
          </FormGroup>
          <ErrorMessage message={formik.errors.explaination} />
        </Col>
      </Row>
      <Row>
        <Col className="pr-1" md="6">
          <FormGroup className="d-flex justify-content-between">
            <label>Answers Key</label>
            <label className="position-relative">
              Result
              <ErrorMessage
                style={{
                  position: "absolute",
                  left: "60px",
                  top: "-6px",
                  minWidth: "200px",
                  fontWeight: "normal",
                }}
                message={formik.errors.result}
              />
            </label>
          </FormGroup>
          {answersKeyDefault.map((answer: AnswersInput, index: number) => {
            return (
              <>
                <FormGroup className="d-flex align-items-center" key={index}>
                  <label className="mr-2">{answer.keyAnswer}</label>
                  <div className="w-100">
                    <Input
                      type="text"
                      onKeyUp={(opt: any) => {
                        const res = answersKeyState.map((a) => {
                          if (a.keyAnswer === answer.keyAnswer) {
                            a.answerContent = opt.target.value;
                          }
                          return a;
                        });
                        setAnswerKeyState(res);
                      }}
                      onBlur={formik.handleBlur}
                      name="answers"
                      defaultValue={
                        formik.values.answers[index].answerContent || ""
                      }
                    />
                    {formik.errors.answers && (
                      <ErrorMessage
                        message={formik.errors.answers[index] as string}
                      />
                    )}
                  </div>
                  <CustomInput
                    type="radio"
                    className="ml-3 mr-3"
                    id={`result${answer.keyAnswer}`}
                    value={answer.keyAnswer!}
                    name="result"
                    checked={answer.keyAnswer === isCheckedResult}
                    onChange={(e) => {
                      formik.handleChange(e);
                      setIsCheckedResult(answer.keyAnswer!);
                    }}
                    onBlur={formik.handleBlur}
                  />
                </FormGroup>
              </>
            );
          })}
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <div>
            {answersGroupsArr.map((a, index_a) => {
              return (
                <div key={index_a} className="pt-3 mt-4 border-top">
                  <FormGroup className="row flex-nowrap justify-content-between align-items-center w-50">
                    <div className="col-12">
                      <Input
                        placeholder="Enter question name"
                        onChange={(e) => {
                          setAnswersGroupsArr(
                            answersGroupsArr.map((ele) => {
                              if (ele.id === a.id) {
                                return {
                                  ...ele,
                                  questionName: e.target.value,
                                };
                              }
                              return ele;
                            })
                          );
                        }}
                        defaultValue={a.questionName || ""}
                      />
                    </div>
                    <Button
                      className="btn-icon btn-round text-center"
                      color="danger"
                      size="sm"
                      type="button"
                      onClick={async (e) => {
                        e.preventDefault();
                        handleRemoveQuestionGroup(a.id);
                      }}
                    >
                      <i className="now-ui-icons ui-1_simple-remove"></i>
                    </Button>
                  </FormGroup>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Description</label>
                        <TinyMCETextarea
                          textareaName={`description${index_a}`}
                          onEditorChange={(e: any) => {
                            setAnswersGroupsArr(
                              answersGroupsArr.map((ele) => {
                                if (ele.id === a.id) {
                                  return {
                                    ...ele,
                                    description: e,
                                  };
                                }
                                return ele;
                              })
                            );
                          }}
                          value={a.description || ""}
                          height={300}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Explaination</label>
                        <TinyMCETextarea
                          textareaName={`explaination${index_a}`}
                          onEditorChange={(e: any) => {
                            setAnswersGroupsArr(
                              answersGroupsArr.map((ele) => {
                                if (ele.id === a.id) {
                                  return {
                                    ...ele,
                                    explaination: e,
                                  };
                                }
                                return ele;
                              })
                            );
                          }}
                          value={a.explaination || ""}
                          height={300}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {a.answers && (
                    <div className="w-50">
                      {a.answers.map((answer: AnswersInput, index: number) => {
                        return (
                          <>
                            <FormGroup
                              className="d-flex align-items-center"
                              key={index}
                            >
                              <label className="mr-2">{answer.keyAnswer}</label>
                              <div className="w-100">
                                <Input
                                  type="text"
                                  onKeyUp={(opt: any) => {
                                    const answersGroup = answersGroupsArr.find(
                                      (e) => e.id === a.id
                                    );
                                    const res = answersGroup?.answers?.map(
                                      (aR) => {
                                        if (aR.keyAnswer === answer.keyAnswer) {
                                          aR.answerContent = opt.target.value;
                                        }
                                        return aR;
                                      }
                                    );
                                    res &&
                                      answersGroup &&
                                      setAnswersGroupsArr(
                                        answersGroupsArr.map((ele) => {
                                          if (ele.id === a.id) {
                                            return {
                                              ...ele,
                                              answers: res,
                                            };
                                          }
                                          return ele;
                                        })
                                      );
                                  }}
                                  name="answersGroup"
                                  defaultValue={answer.answerContent || ""}
                                />
                              </div>
                              <CustomInput
                                type="radio"
                                className="ml-3 mr-3"
                                id={`result-group_${index_a + index}_${
                                  answer.keyAnswer
                                }`}
                                value={answer.keyAnswer!}
                                checked={answer.keyAnswer === a.result}
                                onChange={() => {
                                  setAnswersGroupsArr(
                                    answersGroupsArr.map((ele) => {
                                      if (ele.id === a.id) {
                                        return {
                                          ...ele,
                                          result: answer.keyAnswer,
                                        };
                                      }
                                      return ele;
                                    })
                                  );
                                }}
                              />
                            </FormGroup>
                          </>
                        );
                      })}{" "}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Col>
        <Col md="12">
          <ButtonAdd
            onClick={() => {
              const answersGroupEle: AnswersGroupInput = {
                order: answersGroupsArr.length + 1,
                answers: answersKeyDefault,
                id: (answersGroupsArr.length + 1).toString(),
                isNew: true,
              };
              setAnswersGroupsArr([...answersGroupsArr, answersGroupEle]);
            }}
            text="Add Question"
          />
        </Col>
      </Row>
    </>
  );
};

export default QuestionInfo;
