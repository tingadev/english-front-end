import React from "react";
import { Button } from "reactstrap";
interface ButtonAddQuestionProps {
    setIsOpenModal: (isOpenModal: boolean) => void;
    setPartId: (partId: string) => void;
    partId: string;
  }

export const ButtonAddQuestion: React.FC<ButtonAddQuestionProps> = ({
    setIsOpenModal,
    setPartId,
    partId,
  }) => {
    return (
      <div>
        <Button
          className="btn-icon btn-round mr-1"
          color="success"
          size="md"
          type="button"
          onClick={() => {
            setIsOpenModal(true);
            setPartId(partId);
          }}
        >
          <i className="now-ui-icons ui-1_simple-add"></i>
        </Button>
        <span className="font-weight-bold font-10">Add Question</span>
      </div>
    );
  };
  