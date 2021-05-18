import { useFormikContext } from "formik";
import React from "react";
import { Col, FormGroup, Input, Row } from "reactstrap";
import {
  AnswersInput,
  NewQuestionInput,
} from "../../../../schema/schema";
import ErrorMessage from "../../components/Error";
import TinyMCETextarea from "../../components/TinyMCETextarea";
interface QuestionsGroupProps {}
export const answersKeyDefault: AnswersInput[] = [
  {
    keyAnswer: "A",
    answerContent: "",
  },
  {
    keyAnswer: "B",
    answerContent: "",
  },
  {
    keyAnswer: "C",
    answerContent: "",
  },
  {
    keyAnswer: "D",
    answerContent: "",
  },
];
const QuestionsGroupInfo: React.FC<QuestionsGroupProps> = () => {
  const formik = useFormikContext<NewQuestionInput>();
  return (
    <>
      <Row>
        <Col className="pr-1" md="6">
          <FormGroup>
            <label>Question Group Name</label>
            <Input
              placeholder="Question Name"
              name="questionGroupName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.questionGroupName || ""}
            />
          </FormGroup>
          <ErrorMessage message={formik.errors.questionGroupName} />
        </Col>
      </Row>
      <Row>
        <Col className="" md="6">
            <FormGroup>
              <label>Description</label>
              <TinyMCETextarea
                textareaName="questionGroupDescription"
                onEditorChange={(e: any) => {
                  formik.setFieldValue("questionGroupDescription", e);
                }}
                value={formik.values.questionGroupDescription}
              />
            </FormGroup>
            <ErrorMessage message={formik.errors.questionGroupDescription} />
        </Col>
      </Row>
    </>
  );
};

export default QuestionsGroupInfo;
