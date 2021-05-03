import React from "react";
import PanelHeader from "../../components/PanelHeader";
import { Switch, Route, useRouteMatch, useParams, useHistory } from "react-router-dom";
import CreateAndEditQuestion from "../../components/QuestionsAndTest/CreateAndEditQuestion";
import CreateAndEditPart from "../../components/QuestionsAndTest/CreateAndEditPart";
import CreateAndEditTest from "../../components/QuestionsAndTest/CreateAndEditTest";
import QuestionContextProvider from "../../components/QuestionsAndTest/QuestionContext";
import { EnglishCertificateType } from "../../../../schema/schema";
import TestPage from "../../components/QuestionsAndTest";
import CreateAndEditTestCategory from "../../components/QuestionsAndTest/CreateAndEditTestCategory";
import { capitalizeFirstLetter } from "../../utils/UppercaseFirstLetter";
// import { Route, Switch, Redirect } from "react-router-dom";
// interface ToeicAdminProps {}

const ToeicAdmin: React.FC<{}> = () => {
  const match = useRouteMatch();
  const { type } = useParams() as { type?: string };
  const history = useHistory();
  if(!type){
    history.push('/admin');
    return <></>
  }
  const typeFormatted = capitalizeFirstLetter(type) as EnglishCertificateType;
  return (
    <>
      <PanelHeader>
      <div className="header text-center">
            <h2 className="title">{typeFormatted}</h2>
            <p className="category">
              Management Test and Questions of {typeFormatted} Category
            </p>
          </div>
      </PanelHeader>
      <div className="content">
        <QuestionContextProvider certificateType={typeFormatted}>
        <Switch>
        <Route path={`${match.url}/create-test-category/:id`}>
            <CreateAndEditTestCategory />
          </Route>
          <Route path={`${match.url}/create-test-toeic/:skillTypeParam/:id`}>
            <CreateAndEditTest />
          </Route>
          <Route path={[`${match.url}/create-question-toeic`, `${match.url}/questions/:questionId/edit`]}>
            <CreateAndEditQuestion />
          </Route>
          <Route path={[`${match.url}/create-part-toeic`, `${match.url}/part/:partId/edit`]}>
            <CreateAndEditPart />
          </Route>
          <Route path={`${match.url}`}>
            <TestPage />
          </Route>
        </Switch>
        </QuestionContextProvider>
      </div>
    </>
  );
};

export default ToeicAdmin;
