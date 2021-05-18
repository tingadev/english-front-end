/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { Button, Col, Container, Row } from "reactstrap";
import config from "../../config";
import {
  QuestionGroupFragment,
  SkillsType,
  TestFragment,
  TestQuestionFragment,
} from "../../schema/schema";
import QuestionPalette from "../../sections/Test/QuestionPalette";
import QuestionsItem from "./QuestionsItem";

interface ListQuestionsProps {
  testDetail?: TestFragment;
  testQuestions?: TestQuestionFragment[];
  arrChecked: any[];
  setArrChecked: (value: any) => void;
  isSuccessful?: boolean;
}

const ListQuestions: React.FC<ListQuestionsProps> = ({
  testDetail,
  testQuestions,
  arrChecked,
  setArrChecked,
  isSuccessful,
}) => {
  const [questionsSorted, setQuestionSorted] = React.useState<
    (QuestionGroupFragment & { partId: string })[]
  >([]);
  let questions: (QuestionGroupFragment & { partId: string })[] = [];
  const questionsClone = testQuestions
    ?.slice()
    .sort((a, b) => a.displayOrder - b.displayOrder);
  React.useEffect(() => {
    questionsClone?.map((testQuestion) => {
      const testQuestionWithPart = {
        ...testQuestion.question,
        partId: testQuestion.part.id,
      };
      questions.push(testQuestionWithPart);
      if (testQuestion.question.questionGroups.length > 0) {
        const testQuestionsWithPart = testQuestion.question.questionGroups.map(
          (group) => {
            return { ...group, partId: testQuestion.part.id };
          }
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
        questions = [...questions, ...testQuestionsWithPart];
      }
    });
    setQuestionSorted(questions);
  }, []);
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
        audio::-webkit-media-controls-timeline {
          color: white;
        }
        .question-description{
          font-size: 14px;
        }
        .question-answers{
          font-size: 13px;
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
              const partDetail = testQuestions?.find(
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
                  {questionsSorted &&
                    questionsSorted.map(
                      (
                        question: QuestionGroupFragment & { partId: string },
                        index: number
                      ) => {
                        if (question.partId === part.partId) {
                          return (
                            <QuestionsItem
                              question={question}
                              index={index + 1}
                              arrChecked={arrChecked}
                              setArrChecked={setArrChecked}
                              key={index}
                              isSuccessful={isSuccessful}
                            />
                          );
                        }
                        return null;
                      }
                    )}
                </div>
              );
            })}
        </Col>
        {!isSuccessful && (
          <Col md="4">
            <QuestionPalette
              testQuestions={testQuestions}
              answered={arrChecked}
            />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default ListQuestions;
