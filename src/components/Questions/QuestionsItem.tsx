
/*eslint-disable*/
import React from "react";
import { Label, Input } from "reactstrap";
import config from "../../config";
import { TestQuestionFragment } from "../../schema/schema";

interface QuestionsItemProps {
  testQuestion: TestQuestionFragment;
  arrChecked: any[];
  setArrChecked: (value: any) => void;
}
const QuestionsItem: React.FC<QuestionsItemProps> = ({
  testQuestion,
  arrChecked,
  setArrChecked,
}) => {
  const questionProps = testQuestion.question;
  const handleCheck = (questionId: string, ele: any) => {
    console.log(questionId)
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

  React.useEffect(() => {}, [arrChecked.length]);

  return (
    <div className="mb-3">
      {questionProps && (
        <h5 className="font-weight-bold">{questionProps.questionName}</h5>
      )}
      {questionProps.description && (
        <p>
          <i className="font-weight-normal">{questionProps.description}</i>
        </p>
      )}
     
      <div
        className="font-11 text-black font-weight-normal"
        dangerouslySetInnerHTML={{ __html: questionProps.content || '' }}
      />
      
      {questionProps.image && <div className="img">
        <img  src={config.PATH_IMAGE + questionProps.image} />
      </div> }
      <div className="pl-4">
        {questionProps.answers.map((ele: any, index: any) => {
          return (
            <Label className="w-100 font-12" key={index}>
              <Input
                type="radio"
                onClick={() => {
                  handleCheck(questionProps.id, ele);
                }}
                name={`radio` + questionProps.id}
              />{" "}
              {ele.keyAnswer} . {ele.answer}
            </Label>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionsItem;
