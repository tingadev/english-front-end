/*eslint-disable*/
import React from "react";
import { Label, Input } from "reactstrap";

interface QuestionItemProps {
  questionProps: any;
  arrChecked: any[];
  setArrChecked: (value: any) => void;
}
const QuestionItem: React.FC<QuestionItemProps> = ({
  questionProps,
  arrChecked,
  setArrChecked,
}) => {
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

  React.useEffect(() => {}, [arrChecked.length]);

  return (
    <div className="mb-3">
      {questionProps.title && (
        <h5 className="font-weight-bold">{questionProps.title}</h5>
      )}
      {questionProps.description && (
        <p>
          <i className="font-weight-normal">{questionProps.description}</i>
        </p>
      )}
      {questionProps.question && !questionProps.child && (
        <p className="font-weight-normal">
          {!questionProps.multiple && (
            <b className="text-primary font-weight-semi">
              {questionProps.id + ". "}{" "}
            </b>
          )}
          {questionProps.question}
        </p>
      )}
      <div
        className="font-11 text-black font-weight-normal"
        dangerouslySetInnerHTML={{ __html: questionProps.text }}
      />
      {questionProps.multiple && (
        <p className="font-weight-normal">
          <b className="text-primary font-weight-semi">
            {questionProps.id + ". "}
          </b>{" "}
          {questionProps.question}
        </p>
      )}
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

export default QuestionItem;
