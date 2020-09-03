import React from "react";
import PanelHeader from "../../components/PanelHeader/PanelHeader";
import { Switch, Route, useRouteMatch,  } from "react-router-dom";
import CreateQuestion from "../../components/Questions/CreateQuestion";
import ListTests from "../../components/Questions/ListTest";
import CreatePart from "../../components/Questions/CreatePart";
import CreateAndEditTest from "../../components/Questions/CreateAndEditTest";
// import { Route, Switch, Redirect } from "react-router-dom";
interface ToiecAdminProps {}

const ToiecAdmin: React.FC<ToiecAdminProps> = () => {
  const match = useRouteMatch()
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
            
             <Route path={`${match.path}/create-test-toiec`}>
                <CreateAndEditTest/>
              </Route>
              <Route path={`${match.path}/create-question-toiec`}>
                <CreateQuestion/>
              </Route>
              <Route path={`${match.path}/create-part-toiec`}>
                <CreatePart/>
              </Route>
              <Route path={`${match.path}/part/:partId/edit`}>
                <CreatePart/>
              </Route>
              <Route path={`${match.path}`}>
                <ListTests/>
              </Route>
            </Switch>
      </div>
    </>
  );
};

export default ToiecAdmin;
