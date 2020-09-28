import React from "react";
import { Modal, ModalBody, Button, Spinner } from "reactstrap";
import {
  AudioSecondsInput,
  PartAndAudioSeconds,
  PartFragment,
  PartIdsInput,
  SkillsType,
} from "../../../../schema/schema";
import ListPart from "./ListPart";
import { QuestionContext } from "./QuestionContext";

interface ModalPartProps {
  skillType: SkillsType;
  dataParts?: PartFragment[];
  partIds?: PartIdsInput;
  partAndAudioSecs?: PartAndAudioSeconds[] | null;
  testId?: string;
  refechParts?: any;
}

const ModalPart: React.FC<ModalPartProps> = ({
  skillType,
  dataParts,
  partIds,
  partAndAudioSecs,
  testId,
  refechParts
}) => {
  const questionContext = React.useContext(QuestionContext);
  const [dataUpdateTest, setDataUpdateTest] = React.useState<PartAndAudioSeconds[]>([]);
  
  React.useEffect(() => {
    console.log('partAndAudioSecs', partAndAudioSecs)
    if (partAndAudioSecs && partAndAudioSecs?.length > 0) {
      let hello : PartAndAudioSeconds[] = [];
      partAndAudioSecs.map((p) => {
        const { __typename, ...data } = p;
        hello.push(data);
      });
      setDataUpdateTest(hello);
    }
  },[partAndAudioSecs])
  
  // console.log('AAAAA', dataUpdateTest)
//   partIds &&
//     partIds.ids.map((pId) => {
//       const data: PartAndAudioSeconds = {
//         partId: pId,
//         autdioSecs: 0,
//         displayOrder: 0,
//       };
//       dataUpdateTest.push(data);
//     });
  React.useEffect(() => {
    questionContext.setIsOpenModalAddPart(false);
  },[questionContext.updateTestMutationResult.loading])

  return (
    <>
      <Modal
        className="height-modal-80vh"
        contentClassName="h-100"
        size="lg"
        centered
        isOpen={questionContext.isOpenModalAddPart}
        toggle={() => questionContext.setIsOpenModalAddPart(false)}
      >
        <div className="modal-header justify-content-center">
          <button
            className="close"
            type="button"
            onClick={() => questionContext.setIsOpenModalAddPart(false)}
          >
            <i className="now-ui-icons ui-1_simple-remove"></i>
          </button>
          <h4 className="title title-up">List of Parts</h4>
        </div>
        <ModalBody>
          <ListPart modal skillType={skillType} dataUpdateTest={dataUpdateTest} setDataUpdateTest={setDataUpdateTest}/>
        </ModalBody>
        <div className="modal-footer">
          <Button
            className="ml-auto"
            color="info"
            type="button"
            disabled={dataUpdateTest.length > 0 ? false : true}
            onClick={async () => {
                dataUpdateTest.length > 0 &&
                questionContext.updateTestMutation({
                  variables: {
                    data: {
                      partAndAudioSecs: dataUpdateTest,
                      id: testId,
                    },
                  },
                });
            }}
          >
            {!questionContext.updateTestMutationResult.loading ? (
              "Add Parts"
            ) : (
              <Spinner color="primary" />
            )}
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ModalPart;
