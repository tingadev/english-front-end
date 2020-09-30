/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";
import QuestionPalette from "../QuestionPalette";
import QuestionsItem from "../../../components/Questions/QuestionsItem";
import Score from "../../../components/Score";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import {
  SkillsType,
  TestFragment,
  TestQuestionFragment,
} from "../../../schema/schema";
import config from "../../../config";
import { map } from "lodash";
interface TestTakenProps {
  setIsTaken?: (value: boolean) => void;
  testsData?: TestFragment[] | null;
}
const TestTaken: React.FC<TestTakenProps> = ({ testsData }) => {
  const [arrChecked, setArrChecked] = React.useState<any[]>([]);
  const [isSubmit, setIsSubmit] = React.useState(false);
  const { testId } = useParams();
  const testDetail = testsData?.find((test) => test.id === testId);
  console.log(useParams());

  const match = useRouteMatch();
  const parts = testDetail?.partAndAudioSecs;
  const seekAudio = (secs: number) => {
    const audio = document.getElementById(
      "audio1listening"
    ) as HTMLAudioElement;
    audio!.currentTime = secs;
    audio!.play();
  };

  const questions = testDetail?.testQuestions;

  return (
    <>
      <Row>
        <Switch>
          <Route path={`${match.path}/result`}>
            <Score
              questions={questions}
              arrChecked={arrChecked}
              testDetail={testDetail}
            />
          </Route>
          <Route path={`${match.path}`}>
            <Col md="8">
              {testDetail?.skillType === SkillsType.Listening &&
                testDetail.audioUrl && (
                  <ReactAudioPlayer
                    src={config.PATH_IMAGE + testDetail.audioUrl}
                    className="mb-4 w-100"
                    controls
                    controlsList={"nodownload"}
                    id="audio1listening"
                  />
                )}
              {/* {typeSkill === "listening" && (
                <div className="mb-4">
                  <i className="font-12 ">{questionsListening?.description}</i>
                </div>
              )} */}
              {parts &&
                parts.map((part, index_part) => {
                  const partDetail = questions?.find(
                    (qp) => qp.part.id === part.partId
                  );
                  return (
                    <div key={index_part}>
                      <div className="d-flex justify-content-between align-items-center flex-wrap">
                      <h3 className="mb-0">{partDetail?.part.partName}</h3>
                      {!!part.autdioSecs && part.autdioSecs > 0 && (
                        <Button
                          className="rounded-fill bg-transparent border border-primary border-radius-fill text-primary"
                          onClick={() => {
                            seekAudio(part.autdioSecs!);
                          }}
                        >
                          Listen from here
                        </Button>
                      )}
                      </div>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: partDetail?.part.description || "",
                        }}
                      />
                      {questions &&
                        questions.map(
                          (question: TestQuestionFragment, index: number) => {
                            if (question.part.id === part.partId)
                              return (
                                <QuestionsItem
                                  testQuestion={question}
                                  arrChecked={arrChecked}
                                  setArrChecked={setArrChecked}
                                  key={index}
                                />
                              );
                          }
                        )}
                    </div>
                  );
                })}
            </Col>
            <Col md="4">
              <QuestionPalette
                setIsSubmit={setIsSubmit}
                questions={questions}
                answered={arrChecked}
              />
            </Col>
          </Route>
        </Switch>
      </Row>
    </>
  );
};

export default TestTaken;
