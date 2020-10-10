/*eslint-disable*/
import React from "react";
import { Label, Input, Button, Collapse, CardBody } from "reactstrap";
import config from "../../config";
import { TestQuestionFragment } from "../../schema/schema";

interface QuestionsItemProps {
  testQuestion: TestQuestionFragment;
  arrChecked: any[];
  setArrChecked: (value: any) => void;
  isSuccessful?: boolean;
}
const QuestionsItem: React.FC<QuestionsItemProps> = ({
  testQuestion,
  arrChecked,
  setArrChecked,
  isSuccessful
}) => {
  const questionProps = testQuestion.question;
  const [isOpenExplaination, setIsOpenExplaination] = React.useState('-1');
  const seekAudio = (secs: number) => {
    const audio = document.getElementById(
      "audio1listening"
    ) as HTMLAudioElement;
    audio!.currentTime = secs;
    audio!.play();
  };
  const handleCheck = (questionId: string, displayOrder: number, ele: any) => {
    const answeredObject = {
      id: questionId,
      keyAnswer: ele.keyAnswer,
      displayOrder,
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

  React.useEffect(() => {}, [arrChecked.length]);

  return (
    <div className="mb-3" id={'question' + questionProps.id}>
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        {questionProps && (
          <h5 className="font-weight-bold">{questionProps.questionName}</h5>
        )}
        <div>
        {isSuccessful && <Button
          className="rounded-fill bg-transparent border border-primary border-radius-fill text-primary"
          onClick={() => {
            setIsOpenExplaination(questionProps.id);
            if(questionProps.id === isOpenExplaination){
              setIsOpenExplaination('-1');
            }
          }}
        >
          Explain
        </Button>}
       {!!questionProps.audioSec && <Button
          className="rounded-fill bg-transparent border border-primary border-radius-fill text-primary"
          onClick={() => {
            seekAudio(questionProps.audioSec);
          }}
        >
          Listen from here
        </Button> } 
        
        </div>
      </div>
      <Collapse isOpen={isOpenExplaination === questionProps.id}>
          <CardBody>
          <div
        className="font-11 text-black font-weight-normal"
        dangerouslySetInnerHTML={{ __html: questionProps.explaination || "" }}
      />
          </CardBody>
      </Collapse>
      {questionProps.description && (
        <p>
          <i className="font-weight-normal">{questionProps.description}</i>
        </p>
      )}

      <div
        className="font-11 text-black font-weight-normal"
        dangerouslySetInnerHTML={{ __html: questionProps.content || "" }}
      />

      {questionProps.image && (
        <div className="img">
          <img src={config.PATH_IMAGE + questionProps.image} />
        </div>
      )}
      <div className="pl-4">
        {questionProps.answers.map((ele: any, index: any) => {
          const isAnswer = ele.keyAnswer === questionProps.result;
          return (
            ele.answerContent && <Label className={`w-100 font-12 ${isAnswer && isSuccessful && 'text-warning font-weight-bold'}`} key={index}>
              <Input
                type="radio"
                onClick={() => {
                  handleCheck(questionProps.id,testQuestion.displayOrder, ele);
                }}
                name={`radio` + questionProps.id}
              />{" "}
              {ele.keyAnswer} . {ele.answerContent}
            </Label>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionsItem;
