import React from "react";
import PanelHeader from "../../components/PanelHeader/PanelHeader";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import CreateAndEditQuestion from "../../components/QuestionsAndTest/CreateAndEditQuestion";
import CreateAndEditPart from "../../components/QuestionsAndTest/CreateAndEditPart";
import CreateAndEditTest from "../../components/QuestionsAndTest/CreateAndEditTest";
import QuestionContextProvider from "../../components/QuestionsAndTest/QuestionContext";
import { EnglishCertificateType } from "../../../../schema/schema";
import ToiecPage from "../../components/QuestionsAndTest";
import CreateAndEditTestCategory from "../../components/QuestionsAndTest/CreateAndEditTestCategory";
// import { Route, Switch, Redirect } from "react-router-dom";
// interface ToiecAdminProps {}

const ToiecAdmin: React.FC<{}> = () => {
  const match = useRouteMatch();
  return (
    <>
      <PanelHeader
        content={
          <div className="header text-center">
            <h2 className="title">Toiec</h2>
            <p className="category">
              Management Test and Questions of Toiec Category
            </p>
          </div>
        }
      />
      <div className="content">
        <QuestionContextProvider certificateType={EnglishCertificateType.Toiec}>
        <Switch>
        <Route path={`${match.path}/create-test-category/${EnglishCertificateType.Toiec.toLowerCase()}/:id`}>
            <CreateAndEditTestCategory />
          </Route>
          <Route path={`${match.path}/create-test-toiec/:skillTypeParam/:id`}>
            <CreateAndEditTest />
          </Route>
          <Route path={[`${match.path}/create-question-toiec`, `${match.path}/questions/:questionId/edit`]}>
            <CreateAndEditQuestion />
          </Route>
          <Route path={[`${match.path}/create-part-toiec`, `${match.path}/part/:partId/edit`]}>
            <CreateAndEditPart />
          </Route>
          <Route path={`${match.path}`}>
            <ToiecPage />
          </Route>
        </Switch>
        </QuestionContextProvider>
      </div>
    </>
  );
};

export default ToiecAdmin;
