import React from "react";
import { Modal, ModalBody, Button, Spinner } from "reactstrap";
import {
  TestFragment,
  TestIdsInput,
  useUpdateTestsMutation,
} from "../../../../schema/schema";
import ListTest from "./ListTest";
import { QuestionContext } from "./QuestionContext";

interface ModalPartProps {
  testCategoryId?: string;
  refetchTestCategory?: any;
  tests?: TestFragment[] | null;
}

const ModalTest: React.FC<ModalPartProps> = ({
  testCategoryId,
  refetchTestCategory,
  tests,
}) => {
  const questionContext = React.useContext(QuestionContext);

  const [testIds, setTestIds] = React.useState<TestIdsInput>({ ids: [] });
  const [testIdsForget, setTestIdsForget] = React.useState<string[]>([]);
  const [
    updateTestsMutation,
    updateTestsMutationResult,
  ] = useUpdateTestsMutation();
  React.useEffect(() => {
    questionContext.isOpenModalAddTest && setTestIds({ ids: [] });
  }, [questionContext.isOpenModalAddTest]);

  React.useEffect(() => {
    const testIdsDefault =
      tests &&
      tests.map((t) => {
        return t.id;
      });
    testIdsDefault && setTestIdsForget(testIdsDefault);
  }, [tests]);

  React.useEffect(() => {
    if (updateTestsMutationResult.data?.updateTests) {
      refetchTestCategory && refetchTestCategory();
      questionContext.setIsOpenModalAddTest(false);
    }
  }, [updateTestsMutationResult.loading]);
  return (
    <>
      <Modal
        className="height-modal-80vh"
        contentClassName="h-100"
        size="lg"
        centered
        isOpen={questionContext.isOpenModalAddTest}
        toggle={() => questionContext.setIsOpenModalAddTest(false)}
        zIndex={9999}
      >
        <div className="modal-header justify-content-center">
          <button
            className="close"
            type="button"
            onClick={() => questionContext.setIsOpenModalAddTest(false)}
          >
            <i className="now-ui-icons ui-1_simple-remove"></i>
          </button>
          <h4 className="title title-up">List of Parts</h4>
        </div>
        <ModalBody>
          <ListTest
            modal
            setTestIds={setTestIds}
            testIds={testIds}
            testIdsForget={testIdsForget}
          />
        </ModalBody>
        <div className="modal-footer">
          <Button
            className="ml-auto"
            color="info"
            type="button"
            disabled={testIds && testIds.ids.length > 0 ? false : true}
            onClick={async () => {
              testCategoryId &&
                testIds &&
                testIds.ids.length > 0 &&
                (await updateTestsMutation({
                  variables: {
                    data: {
                      testCategoryId,
                      testIds,
                    },
                  },
                }));
            }}
          >
            {!updateTestsMutationResult.loading ? (
              "Add Tests"
            ) : (
              <Spinner color="primary" />
            )}
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ModalTest;
