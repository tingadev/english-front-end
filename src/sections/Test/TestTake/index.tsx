/*eslint-disable*/
import React from "react";

// reactstrap components
import Score from "../../../components/Score";
import { Switch, Route, useRouteMatch, useParams, useHistory } from "react-router-dom";
import {
  TestFragment, useGetTestQuestionsQuery,
} from "../../../schema/schema";
import ListQuestions from "../../../components/Questions/ListQuestions";
import Loading from "../../../components/Loading";
interface TestTakenProps {
  setIsTaken?: (value: boolean) => void;
  testsData?: TestFragment[] | null;
}
const TestTaken: React.FC<TestTakenProps> = ({ testsData }) => {
  const [arrChecked, setArrChecked] = React.useState<any[]>([]);
  const history = useHistory();
  const { testId } = useParams() as { testId?: string };
  const testDetail = testsData?.find((test) => test.id === testId);
  if(!testDetail || !testId){
    history.push('/home');
    return <></>
  }
  const match = useRouteMatch();
  const testQuestionsQuery = useGetTestQuestionsQuery({
    variables: {testId}
  });
  const testQuestionsSorted = testQuestionsQuery.data?.getTestQuestions.slice();
  const testQuestions = testQuestionsSorted?.sort((a, b) => a.displayOrder - b.displayOrder);
  if(testQuestionsQuery.loading){
    return <Loading />
  }
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
