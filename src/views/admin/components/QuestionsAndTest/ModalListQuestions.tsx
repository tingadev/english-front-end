import React from "react";
import {
  Modal,
  ModalBody,
  Button,
  Spinner
} from "reactstrap";
import {
  PartIdAndQuestionIdsInput,
  SkillsType,
  TestQuestionInputId,
  useCreateListTestQuestionsMutation
} from "../../../../schema/schema";
import ListQuestions from "./ListQuestions";

interface ModalListQuestionsProps {
  isOpenModal: boolean;
  setIsOpenModal: (isOpenModal: boolean) => void;
  skillType: SkillsType;
  dataTestQuestionInput: TestQuestionInputId;
  refetchTestQuestions?: any;
}


const ModalListQuestions: React.FC<ModalListQuestionsProps> = ({
  isOpenModal,
  setIsOpenModal,
  skillType,
  dataTestQuestionInput,
  refetchTestQuestions,
}) => {

  const [arrQuestionIds, setArrQuestionIds] = React.useState<PartIdAndQuestionIdsInput>();
  const [createListTestQuestionsMutation, resultCreateListTestQuestionsMutation] = useCreateListTestQuestionsMutation()
  React.useEffect(() => {
    if(resultCreateListTestQuestionsMutation.data?.createListTestQuestions){
      refetchTestQuestions && refetchTestQuestions();
      setIsOpenModal(false);
    }
  },[resultCreateListTestQuestionsMutation.loading])
  
  return (
    <>
      <Modal
        className="height-modal-80vh"
        contentClassName="h-100"
        size="lg"
        centered
        isOpen={isOpenModal}
        toggle={() => setIsOpenModal(false)}
      >
        <div className="modal-header justify-content-center">
          <button
            className="close"
            type="button"
            onClick={() => setIsOpenModal(false)}
          >
            <i className="now-ui-icons ui-1_simple-remove"></i>
          </button>
          <h4 className="title title-up">List of Questions</h4>
        </div>
        <ModalBody>
          <ListQuestions modal skillType={skillType} dataTestQuestionInput={dataTestQuestionInput} arrQuestionIds={arrQuestionIds} setArrQuestionIds={setArrQuestionIds}/>
        </ModalBody>
        <div className="modal-footer">
          <Button
            className="ml-auto"
            color="info"
            type="button"
            disabled={arrQuestionIds?.questionIds && arrQuestionIds?.questionIds?.length > 0 ? false : true}
            onClick={async () => {
              arrQuestionIds && arrQuestionIds.questionIds && arrQuestionIds.questionIds.length > 0 && await createListTestQuestionsMutation({
                variables: {
                  data: {
                    testId: dataTestQuestionInput.testId,
                    partIdAndQuestionIdsInput: [arrQuestionIds]
                  }
                }
              })
            }}
          >
            {!resultCreateListTestQuestionsMutation.loading ? 'Add Questions' : <Spinner color="primary" />}
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ModalListQuestions;
