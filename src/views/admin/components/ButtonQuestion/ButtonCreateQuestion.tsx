import React from "react";
import { Button } from "reactstrap";
interface ButtonCreateQuestionProps {
    setIsOpenModalCreateQuestion: (isOpenModal: boolean) => void;
    setPartId: (partId: string) => void;
    partId: string;
  }

export const ButtonCreateQuestion: React.FC<ButtonCreateQuestionProps> = ({
    setIsOpenModalCreateQuestion,
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
            setIsOpenModalCreateQuestion(true);
            setPartId(partId);
          }}
        >
          <i className="now-ui-icons ui-1_simple-add"></i>
        </Button>
        <span className="font-weight-bold font-10">Create Question</span>
      </div>
    );
  };
  