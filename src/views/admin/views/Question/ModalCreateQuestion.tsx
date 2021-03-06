import React from "react";
import { Modal, ModalBody } from "reactstrap";
import { SkillsType, TestQuestionInputId } from "../../../../schema/schema";
import { QuestionContext } from "../QuestionsAndTest/QuestionContext";
import CreateAndEditQuestion from "./CreateAndEditQuestion";

interface ModalCreateQuestionProps {
  skillType: SkillsType;
  refetchTestQuestions?: any;
  dataTestQuestionInput: TestQuestionInputId;
}

const ModalCreateQuestion: React.FC<ModalCreateQuestionProps> = ({
  skillType,
  refetchTestQuestions,
  dataTestQuestionInput,
}) => {
  const questionContext = React.useContext(QuestionContext);
  return (
    <>
      <Modal
        className='px-4 mw-100 w-100 '
        contentClassName="min-height-80vh"
        size="lg"
        centered
        isOpen={questionContext.isOpenModalCreateQuestion}
        toggle={() => questionContext.setIsOpenModalCreateQuestion(false)}
        key={questionContext.isOpenModalCreateQuestion.toString()}
      >
        <div className="modal-header justify-content-center">
          <button
            className="close position-static"
            type="button"
            onClick={() => questionContext.setIsOpenModalCreateQuestion(false)}
          >
            <i className="now-ui-icons ui-1_simple-remove"></i>
          </button>
        </div>
        <ModalBody>
          <CreateAndEditQuestion dataTestQuestionInput={dataTestQuestionInput} modal refetchTestQuestions={refetchTestQuestions}  skillType={skillType} />
        </ModalBody>
      </Modal>
    </>
  );
};

export default ModalCreateQuestion;
