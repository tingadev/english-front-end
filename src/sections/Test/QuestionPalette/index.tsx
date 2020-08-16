/*eslint-disable*/
import React from "react";
import { Button } from "reactstrap";

// reactstrap components;
interface QuestionPaletteProps {
  questions: any;
  answered: any;
}
const QuestionPalette: React.FC<QuestionPaletteProps> = ({
  questions,
  answered,
}) => {
  return (
    <section
      className="rounded bg-brand text-white text-center p-4 d-flex flex-wrap"
      style={{
        height: "400px",
      }}
    >
      <h4 className="mt-0">Question Palette</h4>
      <div className="d-flex flex-wrap justify-content-start">
        {questions.map((question: any, index: number) => {
          let isChecked = false;
          answered.map((e: any) => {
            if (e.id === question.id) {
              isChecked = true;
            }
          });
          return (
            <span
              key={index}
              className={`+ ${
                isChecked ? "bg-warning text-white" : "bg-white text-black"
              } font-weight-bold`}
              style={{
                width: "30px",
                height: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "100%",
                marginBottom: "5px",
                marginRight: "6px",
              }}
            >
              {index + 1}
            </span>
          );
        })}
        <div className="w-100 d-flex">
          <div className="d-flex align-items-center mr-2">
            <span
              className={"bg-warning text-white"}
              style={{
                width: "30px",
                height: "30px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "100%",
                marginBottom: "5px",
                marginRight: "6px",
              }}
            ></span>
            Answered
          </div>
          <div className="d-flex align-items-center">
            <span
              className={"bg-white text-black"}
              style={{
                width: "30px",
                height: "30px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "100%",
                marginBottom: "5px",
                marginRight: "6px",
              }}
            ></span>
            Unanswered
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Button className="bg-primary mx-auto font-weight-bold d-block">
          Review
        </Button>
        <Button className="bg-primary mx-auto font-weight-bold d-block">
          Submit
        </Button>
      </div>
    </section>
  );
};

export default QuestionPalette;
