import React from "react";
import PanelHeader from "../../components/PanelHeader/PanelHeader";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import CreateAndEditQuestion from "../../components/QuestionsAndTest/CreateAndEditQuestion";
import ListTests from "../../components/QuestionsAndTest/ListTest";
import CreateAndEditPart from "../../components/QuestionsAndTest/CreateAndEditPart";
import CreateAndEditTest from "../../components/QuestionsAndTest/CreateAndEditTest";
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
        <Switch>
          <Route path={`${match.path}/create-test-toiec/:skillTypeParam`}>
            <CreateAndEditTest />
          </Route>
          <Route path={[`${match.path}/create-question-toiec`, `${match.path}/questions/:questionId/edit`]}>
            <CreateAndEditQuestion />
          </Route>
          <Route path={[`${match.path}/create-part-toiec`, `${match.path}/part/:partId/edit`]}>
            <CreateAndEditPart />
          </Route>
          <Route path={`${match.path}`}>
            <ListTests />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default ToiecAdmin;
