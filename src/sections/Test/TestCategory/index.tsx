/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Col, Container } from "reactstrap";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import Divider from "../../../components/Divider";
import TestSkills from "../TestSkills";
import LeaderBoard from "../../../components/LeaderBoard";
import { TestCategoryInfoFragment } from "../../../schema/schema";
import CardCategory from "./CardCategory";
interface TestCategoryProps {
  testCategories?: TestCategoryInfoFragment[]; 
}
const TestCategory: React.FC<TestCategoryProps> = ({testCategories}) => {
  
  const match = useRouteMatch();
  return (
      <Switch>
        <Route path={`${match.url}/category/:testCategoryId`}>
          <TestSkills />
        </Route>
        <Route path={`${match.url}`}>
          <Container>
          <Row>
            <Col md="8">
              <section className="py-5">
                <h3>
                  <i className="now-ui-icons education_atom font-5 text-primary font-weight-bold"></i>
                  T1-TEST 1-40
                </h3>
                <div className="d-flex flex-wrap align-items-start">
                  {testCategories && testCategories.map((testCategory, index) => {
                    return (
                      <CardCategory key={index} testCategory={testCategory} />
                    );
                  })}
                </div>
              </section>
              <Divider></Divider>
              
            </Col>
            <Col md="4">
              <LeaderBoard />
            </Col>
          </Row>
          </Container>
        </Route>
        
      </Switch>
  );
};

export default TestCategory;
