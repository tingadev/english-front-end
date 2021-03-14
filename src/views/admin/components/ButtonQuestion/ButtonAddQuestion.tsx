import React from "react";
import { QuestionContext } from "../QuestionsAndTest/QuestionContext";
import { ButtonAdd } from "./ButtonAdd";
interface ButtonAddQuestionProps {
    partId: string;
  }

export const ButtonAddQuestion: React.FC<ButtonAddQuestionProps> = ({
    partId,
  }) => {
    const questionContext = React.useContext(QuestionContext);
    const onClick = (): void => {
            questionContext.setIsOpenModal(true);
            questionContext.setPartId(partId);
    }
    return (
      <div>
        <ButtonAdd onClick={onClick} text={`Add Question`}/>
      </div>
    );
  };
  