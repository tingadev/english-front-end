/*eslint-disable*/
import React from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { Link, useRouteMatch } from "react-router-dom";
import { TestQuestionFragment } from "../../../schema/schema";

// reactstrap components;
interface QuestionPaletteProps {
  questions?: TestQuestionFragment[] | null;
  answered: any;
  setIsSubmit: (value: boolean) => void;
}
const QuestionPalette: React.FC<QuestionPaletteProps> = ({
  questions,
  answered,
  setIsSubmit,
}) => {
  const match = useRouteMatch()
  const [modal1, setModal1] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);
  answered.sort((a: any, b: any) => a.id - b.id);
  return (
    
    <section
      className="rounded bg-brand text-white text-center p-4 d-flex flex-wrap sticky-top-130"
      style={{
        height: "400px",
      }}
    >
      <h4 className="mt-0">Question Palette</h4>
      <div className="d-flex flex-wrap justify-content-start">
        {questions?.map((question: TestQuestionFragment, index: number) => {
          let isChecked = false;
          answered.map((e: any) => {
            if (e.id === question.question.id) {
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
        <Button
          className="bg-primary mx-auto font-weight-bold d-block"
          onClick={() => setModal1(true)}
        >
          Review
        </Button>
        <Modal isOpen={modal1} size="lg" toggle={() => setModal1(false)}>
          <div className="modal-header justify-content-center">
            <button
              className="close"
              type="button"
              onClick={() => setModal1(false)}
            >
              <i className="now-ui-icons ui-1_simple-remove"></i>
            </button>
            <h4 className="title title-up">Review Answered</h4>
          </div>
          <ModalBody>
            <h5>
              Answered : {answered.length}/{questions?.length}
            </h5>
            <div className="d-flex flex-wrap">
              {answered.map((ele: any, index: any) => {
                return (
                  <span className="mr-5" key={index}>
                    <b className="font-weight-bold text-primary">
                      Question {ele.id}
                    </b>{" "}
                    : {ele.keyAnswer}
                  </span>
                );
              })}
            </div>
          </ModalBody>
          <div className="modal-footer">
            <Button
              color="danger"
              type="button"
              onClick={() => setModal1(false)}
            >
              Close
            </Button>
          </div>
        </Modal>
        <Button
          onClick={() => setModal2(true)}
          className="bg-primary mx-auto font-weight-bold d-block"
        >
          Submit
        </Button>

        <Modal
          modalClassName=" modal-brand"
          toggle={() => setModal2(false)}
          isOpen={modal2}
          centered
        >
          <ModalBody>
            <p>
              Are you sure?{" "}
              <i>
                (Answered : {answered.length}/{questions?.length})
              </i>
            </p>
          </ModalBody>
          <div className="modal-footer">
            <Link
              className="btn-transparent"
              to={`${match.url}/result`}
              onClick={() => {setModal2(false); setIsSubmit(true)}}
            >
              Submit
            </Link>
            <Button
              className="btn-neutral"
              color="link"
              type="button"
              onClick={() => setModal2(false)}
            >
              Close
            </Button>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default QuestionPalette;
