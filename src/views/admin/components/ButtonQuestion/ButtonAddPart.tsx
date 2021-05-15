import React from "react";
import { Button } from "reactstrap";
import { QuestionContext } from "../../views/QuestionsAndTest/QuestionContext";
interface ButtonAddQuestionProps {
    partId?: string;
  }

export const ButtonAddPart: React.FC<ButtonAddQuestionProps> = () => {
    const questionContext = React.useContext(QuestionContext);
    return (
      <div>
        <Button
          className="btn-icon btn-round mr-1 text-white"
          color="success"
          size="md"
          type="button"
          onClick={() => {
            questionContext.setIsOpenModalAddPart(true);
            // questionContext.setPartId(partId);
          }}
        >
          <i className="now-ui-icons ui-1_simple-add"></i>
        </Button>
        <span className="font-weight-bold font-13 ml-2 text-white">Add Part</span>
      </div>
    );
  };
  