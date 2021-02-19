/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { Button, Col, Container, Row } from "reactstrap";
import config from "../../config";
import {
  SkillsType,
  TestFragment,
  TestQuestionFragment,
} from "../../schema/schema";
import QuestionPalette from "../../sections/Test/QuestionPalette";
import QuestionsItem from "./QuestionsItem";

interface ListQuestionsProps {
  testDetail?: TestFragment;
  questions?: TestQuestionFragment[];
  arrChecked: any[];
  setArrChecked: (value: any) => void;
  isSuccessful?: boolean;
}

const ListQuestions: React.FC<ListQuestionsProps> = ({
  testDetail,
  questions,
  arrChecked,
  setArrChecked,
  isSuccessful,
}) => {
  const parts = testDetail?.partAndAudioSecs;
  const seekAudio = (secs: number) => {
    const audio = document.getElementById(
      "audio1listening"
    ) as HTMLAudioElement;
    audio!.currentTime = secs;
    audio!.play();
  };
  return (
    <Container
      css={css`
        audio::-webkit-media-controls-panel {
          background: #c211a1;
        }
        audio::-webkit-media-controls-time-remaining-display,
        audio::-webkit-media-controls-current-time-display,
        audio::-webkit-media-controls-timeline{
          color: white;
        }
      `}
    >
      <Row>
        <Col md={isSuccessful ? "12" : "8"}>
          {testDetail?.skillType === SkillsType.Listening &&
            testDetail.audioUrl && (
              <ReactAudioPlayer
                src={config.PATH_IMAGE + testDetail.audioUrl}
                className="mb-4 w-100 sticky-top-130"
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
                              isSuccessful={isSuccessful}
                            />
                          );
                      }
                    )}
                </div>
              );
            })}
        </Col>
        {!isSuccessful && (
          <Col md="4">
            <QuestionPalette questions={questions} answered={arrChecked} />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default ListQuestions;
