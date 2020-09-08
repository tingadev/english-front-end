import React from "react";
import {
  Modal,
  ModalBody,
  Button,
} from "reactstrap";
import {
  SkillsType, EnglishCertificateType,
} from "../../../schema/schema";
import CreateAndEditQuestion from "./CreateAndEditQuestion";

interface ModalCreateQuestionProps {
  isOpenModalCreateQuestion: boolean;
  setIsOpenModalCreateQuestion: (isOpenModal: boolean) => void;
  skillType: SkillsType;
  partId: string;
  certificateType: EnglishCertificateType;
}


const ModalCreateQuestion: React.FC<ModalCreateQuestionProps> = ({
  isOpenModalCreateQuestion,
  setIsOpenModalCreateQuestion,
  skillType,
  partId,
  certificateType,
}) => {
  
  return (
    <>
      <Modal
        contentClassName="h-100"
        size="lg"
        centered
        isOpen={isOpenModalCreateQuestion}
        toggle={() => setIsOpenModalCreateQuestion(false)}
      >
        <div className="modal-header justify-content-center">
          <button
            className="close"
            type="button"
            onClick={() => setIsOpenModalCreateQuestion(false)}
          >
            <i className="now-ui-icons ui-1_simple-remove"></i>
          </button>
          <h4 className="title title-up">List of Questions</h4>
        </div>
        <ModalBody>
        <CreateAndEditQuestion modal partId={partId} skillType={skillType} certificateType={certificateType}/>
           
        </ModalBody>
        
      </Modal>
    </>
  );
};

export default ModalCreateQuestion;
