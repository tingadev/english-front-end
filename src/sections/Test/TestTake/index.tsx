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
import ListQuestions from "../../../components/Questions/ListQuestions";
interface TestTakenProps {
  setIsTaken?: (value: boolean) => void;
  testsData?: TestFragment[] | null;
}
const TestTaken: React.FC<TestTakenProps> = ({ testsData }) => {
  const [arrChecked, setArrChecked] = React.useState<any[]>([]);
  
  const { testId } = useParams();
  const testDetail = testsData?.find((test) => test.id === testId);

  const match = useRouteMatch();
 
  const questionsSorted = testDetail?.testQuestions?.slice();
  const questions = questionsSorted?.sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <>
        <Switch>
          <Route path={`${match.path}/result`}>
            <Score
              questions={questions}
              arrChecked={arrChecked}
              testDetail={testDetail}
              setArrChecked={setArrChecked}
            />
          </Route>
          <Route path={`${match.path}`}>
            <ListQuestions questions={questions} testDetail={testDetail} arrChecked={arrChecked} setArrChecked={setArrChecked}/>
          </Route>
        </Switch>
    </>
  );
};

export default TestTaken;
