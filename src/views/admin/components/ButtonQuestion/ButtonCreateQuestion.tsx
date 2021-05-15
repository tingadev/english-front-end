import React from "react";
import { Button } from "reactstrap";
import { QuestionContext } from "../../views/QuestionsAndTest/QuestionContext";
interface ButtonCreateQuestionProps {
    partId: string;
  }

export const ButtonCreateQuestion: React.FC<ButtonCreateQuestionProps> = ({
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
            questionContext.setIsOpenModalCreateQuestion(true);
            questionContext.setPartId(partId);
          }}
        >
          <i className="now-ui-icons ui-1_simple-add"></i>
        </Button>
        <span className="font-weight-bold font-10">Create Question</span>
      </div>
    );
  };
  