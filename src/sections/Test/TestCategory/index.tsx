/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";
import { Link, useRouteMatch, Switch, Route, useParams } from "react-router-dom";
import Divider from "../../../components/Divider";
import TestSkills from "../TestSkills";
import LeaderBoard from "../../../components/LeaderBoard";
import { useGetTestGroupQuery } from "../../../schema/schema";
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
          <Row>
            <Col md="8">
              <section className="py-5">
                <h3>
                  <i className="now-ui-icons education_atom font-5 text-primary font-weight-bold"></i>
                  T1-TEST 1-40
                </h3>
                <ul className="d-flex flex-wrap">
                  {dataT1 && dataT1.map((testCategories, index) => {
                    return (
                      <li className="w-50 mb-2" key={index}>
                        <Link
                          style={{ textDecoration: "none" }}
                          className="font-12 font-weight-bold"
                          to={`${match.url}/test-category/` + testCategories.id}
                        >
                          {testCategories.testCategoryName}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
              <Divider></Divider>
              
            </Col>
            <Col md="4">
              <LeaderBoard />
            </Col>
          </Row>
        </Route>
        
      </Switch>
  );
};

export default TestCategory;
