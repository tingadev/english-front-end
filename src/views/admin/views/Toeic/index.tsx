import React from "react";
import PanelHeader from "../../components/PanelHeader";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import CreateAndEditQuestion from "../../components/QuestionsAndTest/CreateAndEditQuestion";
import CreateAndEditPart from "../../components/QuestionsAndTest/CreateAndEditPart";
import CreateAndEditTest from "../../components/QuestionsAndTest/CreateAndEditTest";
import QuestionContextProvider from "../../components/QuestionsAndTest/QuestionContext";
import { EnglishCertificateType } from "../../../../schema/schema";
import TestPage from "../../components/QuestionsAndTest";
import CreateAndEditTestCategory from "../../components/QuestionsAndTest/CreateAndEditTestCategory";
// import { Route, Switch, Redirect } from "react-router-dom";
// interface ToeicAdminProps {}

const ToeicAdmin: React.FC<{}> = () => {
  const match = useRouteMatch();
  return (
    <>
      <PanelHeader>
      <div className="header text-center">
            <h2 className="title">Toeic</h2>
            <p className="category">
              Management Test and Questions of Toeic Category
            </p>
          </div>
      </PanelHeader>
      <div className="content">
        <QuestionContextProvider certificateType={EnglishCertificateType.Toeic}>
        <Switch>
        <Route path={`${match.path}/create-test-category/${EnglishCertificateType.Toeic.toLowerCase()}/:id`}>
            <CreateAndEditTestCategory />
          </Route>
          <Route path={`${match.path}/create-test-toeic/:skillTypeParam/:id`}>
            <CreateAndEditTest />
          </Route>
          <Route path={[`${match.path}/create-question-toeic`, `${match.path}/questions/:questionId/edit`]}>
            <CreateAndEditQuestion />
          </Route>
          <Route path={[`${match.path}/create-part-toeic`, `${match.path}/part/:partId/edit`]}>
            <CreateAndEditPart />
          </Route>
          <Route path={`${match.path}`}>
            <TestPage />
          </Route>
        </Switch>
        </QuestionContextProvider>
      </div>
    </>
  );
};

export default ToeicAdmin;
