import React from "react";
import { Badge, Button, Input, Spinner } from "reactstrap";
import {
  EnglishCertificateType,
  TestQuestionFragment,
  useRemoveTestQuestionMutation,
  useUpdateTestQuestionMutation,
} from "../../../../../schema/schema";
import { QuestionContext } from "../QuestionContext";

interface ListQuestionExam {
  questions?: TestQuestionFragment[];
  partId: string;
  refetchTestQuestions?: any;
}
const ListQuestionExam: React.FC<ListQuestionExam> = ({
  questions,
  partId,
  refetchTestQuestions,
}) => {
  const questionContext = React.useContext(QuestionContext);
  const [
    updateTestQuestionMutation,
    updateTestQuestionMutationResult,
  ] = useUpdateTestQuestionMutation();
  const [
    removeTestQuestionMutation,
    removeTestQuestionMutationResult,
  ] = useRemoveTestQuestionMutation();

  const [idRemove, setIdRemove] = React.useState("");

  React.useEffect(() => {
    if (removeTestQuestionMutationResult.data?.removeTestQuestion) {
      setIdRemove(removeTestQuestionMutationResult.data?.removeTestQuestion);
      refetchTestQuestions && refetchTestQuestions();
    }
    if (updateTestQuestionMutationResult.data?.updateTestQuestion) {
      refetchTestQuestions && refetchTestQuestions();
    }
  }, [
    removeTestQuestionMutationResult.loading,
    updateTestQuestionMutationResult.loading,
  ]);

  return (
    <>
      <div className="d-flex mb-2 px-2 justify-content-between align-items-center">
        <span
          style={{ width: "10%" }}
          className="font-10 text-primary text-center font-weight-semi"
        >
          Order
        </span>
        <span
          style={{ width: "20%" }}
          className="font-10 text-primary text-center font-weight-semi"
        >
          Question Name
        </span>
        <span
          style={{ width: "20%" }}
          className="font-10 text-primary text-center font-weight-semi"
        >
          Certificate
        </span>
        <span
          style={{ width: "20%" }}
          className="font-10 text-primary text-center font-weight-semi"
        >
          Question Type
        </span>
        <span
          style={{ width: "10%" }}
          className="font-10 text-primary text-center font-weight-semi"
        >
          Action
        </span>
      </div>
      <div>
        <>
          {questions &&
            questions.map((q, q_index) => {
              let q_order = q.displayOrder;
              if (q.part.id === partId) {
                return (
                  <div
                    className="d-flex mb-2 px-2 justify-content-between align-items-center"
                    key={q_index}
                  >
                    <span
                      style={{ width: "10%" }}
                      className="font-10 text-center text-primary font-weight-semi"
                    >
                      <Input
                        defaultValue={q.displayOrder}
                        type="number"
                        onChange={(e) => {
                          q_order = parseInt(e.target.value);
                        }}
                      />
                    </span>
                    <span
                      style={{ width: "20%" }}
                      className="font-10 text-center text-primary font-weight-semi"
                    >
                      {q.question.questionName}
                    </span>
                    <span style={{ width: "20%" }} className="text-center">
                      {q.question.certificateType ===
                      EnglishCertificateType.Toiec ? (
                        <Badge color="primary">
                          {q.question.certificateType}
                        </Badge>
                      ) : (
                        <Badge color="brand">
                          {q.question.certificateType}
                        </Badge>
                      )}
                    </span>
                    <span
                      style={{ width: "20%" }}
                      className="font-10 text-primary text-center"
                    >
                      {q.question.questionType}
                    </span>
                    <div className="d-flex">
                      <Button
                        className="btn-icon btn-round mr-1"
                        color="info"
                        size="sm"
                        type="button"
                        onClick={async (e) => {
                          e.preventDefault();
                          await updateTestQuestionMutation({
                            variables: {
                              data: {
                                id: q.id,
                                displayOrder: q_order,
                              },
                            },
                          });
                        }}
                      >
                        <i className="now-ui-icons users_single-02"></i>
                      </Button>
                      <Button
                        className="btn btn-sm mr-1 btn-warning btn-icon btn-round"
                        onClick={() => {
                          questionContext.setQuestionIdModal(q.question.id);
                          questionContext.setIsOpenModalCreateQuestion(true);
                        }}
                      >
                        <i className="now-ui-icons ui-2_settings-90"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round text-center"
                        color="danger"
                        size="sm"
                        type="button"
                        onClick={async (e) => {
                          e.preventDefault();
                          await removeTestQuestionMutation({
                            variables: {
                              id: q.id,
                            },
                          });
                        }}
                      >
                        {removeTestQuestionMutationResult.loading &&
                        idRemove === q.id ? (
                          <Spinner color="primary" />
                        ) : (
                          <i className="now-ui-icons ui-1_simple-remove"></i>
                        )}
                      </Button>
                    </div>
                  </div>
                );
              }
            })}
        </>
      </div>{" "}
    </>
  );
};

export default ListQuestionExam;
