/*eslint-disable*/
import React from "react";
import { Label, Input, Button, Collapse, CardBody } from "reactstrap";
import config from "../../config";
import { QuestionFragment, QuestionGroupFragment } from "../../schema/schema";

interface QuestionsItemProps {
  question: QuestionFragment | QuestionGroupFragment;
  arrChecked: any[];
  setArrChecked: (value: any) => void;
  isSuccessful?: boolean;
  index: number;
}
const QuestionsItem: React.FC<QuestionsItemProps> = ({
  question,
  arrChecked,
  setArrChecked,
  isSuccessful,
  index,
}) => {
  const [isOpenExplaination, setIsOpenExplaination] = React.useState("-1");
  const seekAudio = (secs: number) => {
    const audio = document.getElementById(
      "audio1listening"
    ) as HTMLAudioElement;
    audio!.currentTime = secs;
    audio!.play();
  };
  const handleCheck = (questionId: string, ele: any) => {
    const answeredObject = {
      id: questionId,
      keyAnswer: ele.keyAnswer,
    };
    if (arrChecked.length === 0) {
      setArrChecked([...arrChecked, answeredObject]);
    } else {
      //check exist
      let isExist = false;
      isExist = arrChecked.find((e) => {
        return e.id === questionId;
      });
      if (isExist) {
        arrChecked.forEach((o, index) => {
          if (o.id === questionId) {
            arrChecked[index] = {
              ...arrChecked[index],
              keyAnswer: ele.keyAnswer,
            };
          }
        });
        setArrChecked(arrChecked);
      } else {
        setArrChecked([...arrChecked, answeredObject]);
      }
    }
  };
  const isQuestionGroup = (question as QuestionFragment).questionGroups?.length > 0;
  const description = isQuestionGroup ? question.questionGroupDescription : question.description;
  return (
    <div className="mb-3" id={"question" + question.id}>
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        {question && (
          <h5 className="font-weight-bold">
            {isQuestionGroup
              ? question.questionGroupName
              : question.questionName}
          </h5>
        )}
        <div>
          {isSuccessful && (
            <Button
              className="rounded-fill bg-transparent border border-primary border-radius-fill text-primary"
              onClick={() => {
                setIsOpenExplaination(question.id);
                if (question.id === isOpenExplaination) {
                  setIsOpenExplaination("-1");
                }
              }}
            >
              Explain
            </Button>
          )}
          {Boolean(question.audioSec) && !question.isGroup && (
            <Button
              className="rounded-fill bg-transparent border border-primary border-radius-fill text-primary"
              onClick={() => {
                seekAudio(question.audioSec);
              }}
            >
              Listen from here
            </Button>
          )}
        </div>
      </div>
      <Collapse isOpen={isOpenExplaination === question.id}>
        <CardBody>
          <div
            className="font-11 text-black font-weight-normal border border-info p-3 rounded"
            dangerouslySetInnerHTML={{
              __html: question.explaination || "",
            }}
          />
        </CardBody>
      </Collapse>
      {description && (
        <p className='question-description'>
          <i
            dangerouslySetInnerHTML={{
              __html: description || "",
            }}
            className="font-weight-normal"
          />
        </p>
      )}

      {question.image && (
        <div className="img">
          <img src={config.PATH_IMAGE + question.image} />
        </div>
      )}
      {isQuestionGroup && (
        <>
        <h5 className="font-weight-bold">{question.questionName}</h5>
        {question.description && (
          <p className='question-description'>
            <i
              dangerouslySetInnerHTML={{
                __html: question.description || "",
              }}
              className="font-weight-normal"
            />
          </p>
        )}
        </>
      )}
      <div className="pl-4">
        {question.answers.map((ele: any, index: any) => {
          const isAnswer = ele.keyAnswer === question.result;
          return (
            ele.answerContent && (
              <Label
                className={`w-100 question-answers ${
                  isAnswer && isSuccessful && "text-warning font-weight-bold"
                }`}
                key={index}
              >
                <Input
                  type="radio"
                  onClick={() => {
                    handleCheck(question.id, ele);
                  }}
                  name={`radio` + question.id}
                />{" "}
                {ele.keyAnswer} . {ele.answerContent}
              </Label>
            )
          );
        })}
      </div>
    </div>
  );
};

export default QuestionsItem;
