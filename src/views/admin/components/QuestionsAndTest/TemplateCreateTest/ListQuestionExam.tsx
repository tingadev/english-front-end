/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import { store } from "react-notifications-component";
import { Badge, Button, Input, Spinner } from "reactstrap";
import {
  EnglishCertificateType,
  TestQuestionFragment,
  useRemoveTestQuestionMutation,
  useUpdateTestQuestionMutation,
} from "../../../../../schema/schema";
import { notificationAdd } from "../../../utils/Notification";
import ModalDelete from "../../Modal/Delete";
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
  const [isOpenModalDelete, setIsOpenModalDelete] = React.useState(false);
  const questionContext = React.useContext(QuestionContext);
  const notification = notificationAdd("Question", "Updated");
  const [
    updateTestQuestionMutation,
    updateTestQuestionMutationResult,
  ] = useUpdateTestQuestionMutation();
  const [
    removeTestQuestionMutation,
    removeTestQuestionMutationResult,
  ] = useRemoveTestQuestionMutation();

  const [idRemove, setIdRemove] = React.useState("");
  const removeTestQuestion = () => {
    removeTestQuestionMutation({
      variables: {
        id: idRemove,
      },
    });
  };

  React.useEffect(() => {
    if (removeTestQuestionMutationResult.data?.removeTestQuestion) {
      refetchTestQuestions && refetchTestQuestions();
      const notificationD = notificationAdd("Question", "Deleted", "danger");
      store.addNotification(notificationD);
    }
    if (updateTestQuestionMutationResult.data?.updateTestQuestion) {
      refetchTestQuestions && refetchTestQuestions();
      store.addNotification(notification);
    }
  }, [
    removeTestQuestionMutationResult.loading,
    updateTestQuestionMutationResult.loading,
  ]);

  return (
    <React.Fragment>
      <div className="d-flex px-2 justify-content-between align-items-center">
        <span
          style={{ width: "10%" }}
          className="font-10 text-primary text-center font-weight-semi"
        >
          Order
        </span>
        <span
          style={{ width: "35%" }}
          className="font-10 text-primary text-center font-weight-semi"
        >
          Question Name
        </span>
        <span
          style={{ width: "15%" }}
          className="font-10 text-primary text-center font-weight-semi"
        >
          Certificate
        </span>
        <span
          style={{ width: "25%" }}
          className="font-10 text-primary text-center font-weight-semi"
        >
          Question Type
        </span>
        <span
          style={{ width: "15%" }}
          className="font-10 text-primary text-center font-weight-semi"
        >
          Action
        </span>
      </div>
      <div>
        <React.Fragment>
          {questions &&
            questions.map((q, q_index) => {
              let q_order = q.displayOrder;

              if (q.part.id === partId) {
                return (
                  <React.Fragment>
                    <div
                      className="d-flex px-2 justify-content-between align-items-center"
                      key={q_index}
                    >
                      <span
                        style={{ width: "10%" }}
                        className="d-flex font-10 text-center text-primary font-weight-semi"
                      >
                        <Input
                          key={q.id}
                          defaultValue={q.displayOrder}
                          type="number"
                          onChange={(e) => {
                            q_order = parseInt(e.target.value);
                          }}
                        />
                        <Button
                          className="btn-icon btn-round ml-1 my-0"
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
                          <i className="now-ui-icons ui-1_check"></i>
                        </Button>
                      </span>
                      <span
                        style={{ width: "35%" }}
                        className="font-10 text-center text-primary font-weight-semi"
                      >
                        {q.question.questionName}
                      </span>
                      <span style={{ width: "15%" }} className="text-center">
                        {q.question.certificateType ===
                        EnglishCertificateType.Toeic ? (
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
                        style={{ width: "25%" }}
                        className="font-10 text-primary text-center"
                      >
                        {q.question.questionType}{" "}
                        {q.question.questionGroups.length > 0 && (
                          <span className="font-weight-bold">[Group]</span>
                        )}
                      </span>
                      <div
                        className="d-flex justify-content-center"
                        style={{ width: "15%" }}
                      >
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
                          onClick={() => {
                            setIdRemove(q.id);
                            setIsOpenModalDelete(true);
                          }}
                        >
                          <i className="now-ui-icons ui-1_simple-remove"></i>
                        </Button>
                      </div>
                    </div>
                    {q.question.questionGroups.length > 0 && (
                      <div
                        className="py-2"
                        css={css`
                          background: rgba(0, 0, 0, 0.1);
                        `}
                      >
                        {q.question.questionGroups.map((q_group, index_g) => {
                          return (
                            <div
                              className="d-flex px-2 justify-content-between align-items-center"
                              key={`group` + index_g}
                            >
                              <span style={{ width: "10%", height: "15px" }}>
                                <div className="border-bottom border-left border-primary w-50 mx-auto h-100"></div>
                              </span>
                              <span
                                style={{ width: "35%" }}
                                className="font-10 text-center text-primary font-weight-semi"
                              >
                                {q_group.questionName}
                              </span>
                              <span
                                style={{ width: "15%" }}
                                className="text-center"
                              >
                                {q_group.certificateType ===
                                EnglishCertificateType.Toeic ? (
                                  <Badge color="primary">
                                    {q_group.certificateType}
                                  </Badge>
                                ) : (
                                  <Badge color="brand">
                                    {q_group.certificateType}
                                  </Badge>
                                )}
                              </span>
                              <span
                                style={{ width: "25%" }}
                                className="font-10 text-primary text-center"
                              >
                                {q_group.questionType}
                              </span>
                              <span style={{ width: "15%" }}></span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </React.Fragment>
                );
              }
            })}
        </React.Fragment>
        <ModalDelete
          isOpen={isOpenModalDelete}
          onClose={setIsOpenModalDelete}
          callback={removeTestQuestion}
          loading={removeTestQuestionMutationResult.loading}
        />
      </div>{" "}
    </React.Fragment>
  );
};

export default ListQuestionExam;
