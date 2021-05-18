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
import { QuestionContext } from "../QuestionsAndTest/QuestionContext";
import ListQuestions from "./ListQuestions";

interface ModalListQuestionsProps {
  skillType: SkillsType;
  dataTestQuestionInput: TestQuestionInputId;
  refetchTestQuestions?: any;
}


const ModalListQuestions: React.FC<ModalListQuestionsProps> = ({
  skillType,
  dataTestQuestionInput,
  refetchTestQuestions,
}) => {
  const questionContext = React.useContext(QuestionContext);
  const [arrQuestionIds, setArrQuestionIds] = React.useState<PartIdAndQuestionIdsInput>();
  const [createListTestQuestionsMutation, resultCreateListTestQuestionsMutation] = useCreateListTestQuestionsMutation()
  React.useEffect(() => {
    if(resultCreateListTestQuestionsMutation.data?.createListTestQuestions){
      refetchTestQuestions && refetchTestQuestions();
      questionContext.setIsOpenModal(false);
    }
  },[resultCreateListTestQuestionsMutation.loading])
  
  return (
    <>
      <Modal
        modalClassName="min-height-80vh"
        size="lg"
        centered
        isOpen={questionContext.isOpenModal}
        toggle={() => questionContext.setIsOpenModal(false)}
      >
        <div className="modal-header justify-content-center">
          <button
            className="close"
            type="button"
            onClick={() => questionContext.setIsOpenModal(false)}
          >
            <i className="now-ui-icons ui-1_simple-remove"></i>
          </button>
          <h4 className="title title-up">List of Questions</h4>
        </div>
        <ModalBody className='overflow-hidden'>
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
