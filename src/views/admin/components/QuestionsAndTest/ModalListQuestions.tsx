import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Table,
  Badge,
  Modal,
  ModalBody,
  Button,
  Input,
  Label,
} from "reactstrap";
import {
  useGetQuestionsQuery,
  EnglishCertificateType,
  SkillsType,
  QuestionFilterTypeInput,
  QuestionFragment,
} from "../../../../schema/schema";
import { ArrayQuestionIds } from "./CreateAndEditTest";

interface ModalListQuestionsProps {
  isOpenModal: boolean;
  setIsOpenModal: (isOpenModal: boolean) => void;
  skillType: SkillsType;
  arrQuestionIds?: ArrayQuestionIds[];
  setArrQuestionIds: (value: ArrayQuestionIds[]) => void;
  partId: string;
}

const isCheckElement = (
  questionId: string,
  skillType: SkillsType,
  arrQuestionIds?: ArrayQuestionIds[]
) => {
  let result: boolean | undefined = false;
  if (!arrQuestionIds) {
    return result;
  }
  arrQuestionIds.map((e) => {
    if (e.skillType === skillType) {
      result = e.questions?.some((q) => {
        return q.id.toString() === questionId.toString();
      });
    }
  });
  return !!result;
};

const pushAllQuestion = (
  isChecked: boolean,
  questions: QuestionFragment[],
  partId: string,
) => {
  if(isChecked){
    // find update or create List of Test questions
  }
  else{
    // update List of Test questions
  }
  
};

export const AddOrRemoveQuestion = (
  isChecked = false,
  skillType: string,
  partId: string,
  question: QuestionFragment,
  arrQuestionIds?: ArrayQuestionIds[]
) => {
  let res: ArrayQuestionIds[] | undefined;
  if (isChecked) {
    res =  arrQuestionIds &&
    arrQuestionIds.map((a) => {
      if (a.skillType === skillType) {
        if(a.questions){
          const resFind = 
          a.questions.some((q) => q.id === question.id);
          if(!resFind){
            a.questions.push({...question!, partId });
          }
        }
        else{
          a.questions!.push({...question!, partId });
        }
        
      }
      return a;
    });
  } else {
    res =
      arrQuestionIds &&
      arrQuestionIds.map((a) => {
        if (a.skillType === skillType) {
          if(a.questions){
            a.questions = a.questions.filter((q) => q.id !== question.id);
          }
            
        }
        return a;
      });
  }

  return res;
};

const ModalListQuestions: React.FC<ModalListQuestionsProps> = ({
  isOpenModal,
  setIsOpenModal,
  skillType,
  arrQuestionIds,
  setArrQuestionIds,
  partId,
}) => {
  const questionsFilter: QuestionFilterTypeInput = {
    certificateType: EnglishCertificateType.Toiec,
  };
  const { data, loading, refetch } = useGetQuestionsQuery({
    variables: {
      data: questionsFilter,
    },
  });
  React.useEffect(() => {
    refetch();
  }, [isOpenModal]);
  React.useEffect(() => {
    // setArrQuestionIds([]);
  }, [skillType]);

  if (loading) {
    return <>{"Loading...."}</>;
  }

  const questions = data?.questions.filter((q) => q.skillType === skillType);
  if (!questions) {
    return <>{"No found questions...."}</>;
  }

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
          <CardBody>
            <Table responsive>
              <thead className="text-primary">
                <tr>
                  <th
                    className="form-check m-0 p-td-initial"
                    style={{ width: "5%" }}
                  >
                    <Label check>
                      <Input
                        defaultChecked={false}
                        onChange={(e) => {
                          const res = pushAllQuestion(
                            e.target.checked,
                            questions,
                            partId
                          );
                          // setArrQuestionIds(res!);
                        }}
                        type="checkbox"
                      ></Input>
                      <span className="form-check-sign"></span>
                    </Label>
                  </th>
                  <th className="text-right" style={{ width: "5%" }}></th>
                  <th className="text-left font-weight-semi">Question Name</th>
                  <th className="text-center font-weight-semi">Certificate</th>
                  <th className="text-center font-weight-semi">Skill</th>
                  <th className="text-center font-weight-semi">
                    Question Type
                  </th>
                </tr>
              </thead>
              <tbody>
                {questions &&
                  questions.map((q, index) => {
                    return (
                      <tr key={index}>
                        <td className="form-check m-0 p-td-initial">
                          <Label check>
                            <Input
                              checked={isCheckElement(
                                q.id,
                                q.skillType,
                                arrQuestionIds
                              )}
                              type="checkbox"
                              onClick={() => {
                                const isChecked = isCheckElement(
                                  q.id,
                                  q.skillType,
                                  arrQuestionIds
                                )
                                const res = AddOrRemoveQuestion(!isChecked, skillType, partId, q, arrQuestionIds);
                                res && setArrQuestionIds(res);
                              }}
                            ></Input>
                            <span className="form-check-sign"></span>
                          </Label>
                        </td>
                        <td>{index + 1}</td>
                        <td className="text-left font-weight-semi">
                          {q.questionName}
                        </td>
                        <td className="text-center">
                          {q.certificateType ===
                          EnglishCertificateType.Toiec ? (
                            <Badge color="primary">{q.certificateType}</Badge>
                          ) : (
                            <Badge color="brand">{q.certificateType}</Badge>
                          )}
                        </td>
                        <td className="text-center">
                          {q.skillType === SkillsType.Reading ? (
                            <Badge color="success">{q.skillType}</Badge>
                          ) : (
                            <Badge color="info">{q.skillType}</Badge>
                          )}
                        </td>
                        <td className="text-center font-weight-semi">
                          {q.questionType}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </CardBody>
        </ModalBody>
        <div className="modal-footer">
          <Button color="default" type="button">
            Nice Button
          </Button>
          <Button
            color="danger"
            type="button"
            onClick={() => setIsOpenModal(false)}
          >
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ModalListQuestions;
