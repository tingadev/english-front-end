import React from "react";
import { Button } from "reactstrap";
import { QuestionContext } from "../QuestionsAndTest/QuestionContext";
interface ButtonAddQuestionProps {
    partId: string;
  }

export const ButtonAddQuestion: React.FC<ButtonAddQuestionProps> = ({
    partId,
  }) => {
    const questionContext = React.useContext(QuestionContext);
    return (
      <div>
        <Button
          className="btn-icon btn-round mr-1"
          color="success"
          size="md"
          type="button"
          onClick={() => {
            questionContext.setIsOpenModal(true);
            questionContext.setPartId(partId);
          }}
        >
          <i className="now-ui-icons ui-1_simple-add"></i>
        </Button>
        <span className="font-weight-bold font-10">Add Question</span>
      </div>
    );
  };
  