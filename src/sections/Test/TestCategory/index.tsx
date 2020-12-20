/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Col, Container } from "reactstrap";
import { Link, useRouteMatch, Switch, Route, useParams } from "react-router-dom";
import Divider from "../../../components/Divider";
import TestSkills from "../TestSkills";
import LeaderBoard from "../../../components/LeaderBoard";
import { useGetTestGroupQuery } from "../../../schema/schema";
import CardCategory from "./CardCategory";
interface TestCategoryProps {
}
const TestCategory: React.FC<TestCategoryProps> = ({}) => {
  const { link } = useParams();
  let testGroupId = "";
  if(link){
    const temp = link.split("-");
    console.log(temp);
    testGroupId = temp[temp.length-1];
  }
  const getTestGroupQuery = useGetTestGroupQuery({
    variables: {
      id: testGroupId
    }
  })

  const dataT1 = getTestGroupQuery.data?.getTestGroup.testCategories
  const match = useRouteMatch();
  return (
      <Switch>
        <Route path={`${match.path}/test-category/:testCategoryId`}>
          <TestSkills testCategories={dataT1}/>
        </Route>
        <Route path={`${match.path}`}>
          <Container>
          <Row>
            <Col md="8">
              <section className="py-5">
                <h3>
                  <i className="now-ui-icons education_atom font-5 text-primary font-weight-bold"></i>
                  T1-TEST 1-40
                </h3>
                <div className="d-flex flex-wrap align-items-start">
                  {dataT1 && dataT1.map((testCategory, index) => {
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
