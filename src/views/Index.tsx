import React from "react";
import HomePage from "../sections/home";
import DefaultFooter from "../components/Footers/DefaultFooter";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Test from "../sections/Test";
import IndexHeader from "../components/Headers/IndexHeader";
// import Loading from "../components/Loading";
import Layout from "./layout/Layout";

const Index: React.FC = () => {
  const match = useRouteMatch();
  return (
    <Layout isHomePage>
      <div className="wrapper">
        <Switch>
          <Route path={`${match.path}/toiec/:link`}>
            <Test />
          </Route>
          <Route path={match.path}>
            <IndexHeader />
            <HomePage />
          </Route>
        </Switch>
      </div>
      <DefaultFooter />
    </Layout>
  );
};

export default Index;
