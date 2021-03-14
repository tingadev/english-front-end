/*eslint-disable*/
import React from "react";
import { Row, Col, Container } from "reactstrap";
import {
  QuestionGroupFragment,
  TestQuestionFragment,
} from "../../schema/schema";
import Explaination from "../Explaination";
import LeaderBoard from "../LeaderBoard";
// reactstrap components
interface ScoreProps {
  testDetail?: any;
  testQuestions?: TestQuestionFragment[];
  arrChecked: any;
  setArrChecked: any;
}
const Score: React.FC<ScoreProps> = ({
  testDetail,
  testQuestions,
  arrChecked,
  setArrChecked,
}) => {
  const [questionsSorted, setQuestionSorted] = React.useState<
    QuestionGroupFragment[]
  >([]);
  let questions: QuestionGroupFragment[] = [];
  const questionsClone = testQuestions
    ?.slice()
    .sort((a, b) => a.displayOrder - b.displayOrder);
  React.useEffect(() => {
    questionsClone?.map((testQuestion) => {
      let questionsGroup: QuestionGroupFragment[] = [];
      questions.push(testQuestion.question);
      if (testQuestion.question.questionGroups.length > 0) {
        questionsGroup = testQuestion.question.questionGroups;
        questions = [...questions, ...questionsGroup];
      }
    });
    setQuestionSorted(questions);
  }, []);
  let rightAnswer = 0;
  questionsSorted &&
    questionsSorted.forEach((question: QuestionGroupFragment) => {
      arrChecked.forEach((e: any) => {
        if (question.id === e.id && question.result === e.keyAnswer) {
          rightAnswer = rightAnswer + 1;
        }
      });
    });
  const notPoint = (rightAnswer / questionsSorted.length!).toFixed(3);
  const point = parseFloat(notPoint) * 10;
  return (
    <>
      <Container>
        <Row>
          <Col md="8">
            <Row>
              <Col md="3">
                <img src={require("../../assets/img/toiec.png")} alt="" />
              </Col>
              <Col md="9">
                <h2 className="font-weight-bold mb-1">{testDetail?.title}</h2>
                <div className="d-flex align-items-center">
                  <i className="now-ui-icons ui-1_calendar-60 mr-1"></i>
                  <p className="mb-0 font-9">Published on: 14/08/2020</p>
                </div>
                <div className="d-flex align-items-center">
                  <i className="now-ui-icons tech_laptop mr-1"></i>
                  <p className="mb-0 font-9 font-weight-semi">Views: 7,500</p>
                </div>
                <div className="d-flex align-items-center">
                  <i className="now-ui-icons media-1_button-play mr-1"></i>
                  <p className="mb-0 font-9 font-weight-semi">
                    Tests Taken: 400
                  </p>
                </div>
              </Col>
            </Row>
            <div className="w-full media mt-3 flex-wrap">
              <div className="avatar">
                <img src={require("../../assets/img/ryan.jpg")} alt="" />
              </div>
              <div className="w-100 text-center mt-2">
                <h3 className="font-weight-bold">Your score is :</h3>
                <div className="d-flex justify-content-between">
                  <div
                    className="rounded-circle border-2 border-success d-flex flex-column pt-4 align-items-center flex-wrap"
                    style={{
                      width: "120px",
                      height: "120px",
                      border: "5px solid",
                    }}
                  >
                    <span className="font-weight-bold">Correct</span>
                    <span className="font-weight-bold">Answered</span>
                    <span className="font-weight-bold text-success">
                      {rightAnswer}/{questionsSorted.length}
                    </span>
                  </div>

                  <div
                    className="rounded-circle border-2 border-primary d-flex justify-content-center align-items-center flex-wrap"
                    style={{
                      width: "140px",
                      height: "140px",
                      border: "5px solid",
                    }}
                  >
                    <span className="font-weight-bold text-primary font-20">
                      {point}
                    </span>
                  </div>

                  <div
                    className="rounded-circle border-2 border-success d-flex flex-column pt-4 align-items-center flex-wrap"
                    style={{
                      width: "120px",
                      height: "120px",
                      border: "5px solid",
                    }}
                  >
                    <span className="font-weight-bold">Time Spent</span>
                    <span className="font-weight-bold text-success">40:00</span>
                    <span className="font-weight-bold  font-8">(40:00)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h3>
                <i className="now-ui-icons objects_key-25"></i>Answer Keys:
              </h3>
              <div className="d-flex align-items-center">
                <p className="d-flex align-items-center">
                  Your answer{" "}
                  <span className="ml-1 bg-info width-1rem height-1rem d-inline-block"></span>
                </p>
                <p className="d-flex align-items-center ml-4">
                  Answer Key{" "}
                  <span className="ml-1 bg-warning width-1rem height-1rem d-inline-block"></span>
                </p>
                <p className="d-flex align-items-center ml-4">
                  No Answer <span className="ml-1 font-italic">N/A</span>
                </p>
              </div>
              <div className="d-flex flex-wrap">
                {questionsSorted &&
                  questionsSorted.map(
                    (question: QuestionGroupFragment, index: any) => {
                      const isCorrect = arrChecked.find((e: any) => {
                        return (
                          e.id === question.id &&
                          e.keyAnswer === question.result
                        );
                      });
                      return (
                        <div
                          key={index}
                          className="d-flex align-items-center"
                          style={{ width: "50%" }}
                        >
                          <p
                            className="mr-3 d-flex justify-content-center align-items-center text-white font-weight-bold bg-brand"
                            style={{ width: "30px", height: "30px" }}
                          >
                            {index + 1}
                          </p>
                          <p className="text-black font-italic text-info">
                            {isCorrect?.keyAnswer
                              ? isCorrect?.keyAnswer
                              : "N/A"}{" "}
                          </p>{" "}
                          <p className="text-center width-2rem">-</p>
                          <p className="text-black font-weight-bold mr-3 text-warning">
                            {" "}
                            {question.result}
                          </p>
                          <p className="pt-1">
                            {isCorrect ? (
                              <i className="now-ui-icons ui-1_check text-success"></i>
                            ) : (
                              <i className="now-ui-icons ui-1_simple-remove text-danger"></i>
                            )}
                          </p>
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
          </Col>
          <Col md="4">
            <LeaderBoard />
          </Col>
        </Row>
      </Container>
      <Explaination
        testDetail={testDetail!}
        testQuestions={testQuestions!}
        setArrChecked={setArrChecked}
        arrChecked={arrChecked}
      />
    </>
  );
};

export default Score;
