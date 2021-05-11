/*eslint-disable*/
import React from "react";

// reactstrap components
import Score from "../../../components/Score";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import {
  TestFragment,
} from "../../../schema/schema";
import ListQuestions from "../../../components/Questions/ListQuestions";
interface TestTakenProps {
  setIsTaken?: (value: boolean) => void;
  testsData?: TestFragment[] | null;
}
const TestTaken: React.FC<TestTakenProps> = ({ testsData }) => {
  const [arrChecked, setArrChecked] = React.useState<any[]>([]);
  
  const { testId } = useParams() as { testId?: string };
  const testDetail = testsData?.find((test) => test.id === testId);

  const match = useRouteMatch();
 
  const testQuestionsSorted = testDetail?.testQuestions?.slice();
  const testQuestions = testQuestionsSorted?.sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <>
        <Switch>
          <Route path={`${match.path}/result`}>
            <Score
              testQuestions={testQuestions}
              arrChecked={arrChecked}
              testDetail={testDetail}
              setArrChecked={setArrChecked}
            />
          </Route>
          <Route path={`${match.path}`}>
            <ListQuestions testQuestions={testQuestions} testDetail={testDetail} arrChecked={arrChecked} setArrChecked={setArrChecked}/>
          </Route>
        </Switch>
    </>
  );
};

export default TestTaken;
