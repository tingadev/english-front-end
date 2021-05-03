/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Table } from "reactstrap";
import {
  useParams,
  Link,
  Switch,
  Route,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import TestTaken from "../TestTake";
import LeaderBoard from "../../../components/LeaderBoard";
import { SkillsType, useGetTestCategoryQuery } from "../../../schema/schema";
import Loading from "../../../components/Loading";
interface TestSkillsProps {
  setIsTaken?: (value: boolean) => void;
}
const TestSkills: React.FC<TestSkillsProps> = ({ setIsTaken }) => {
  const { testCategoryId } = useParams() as { testCategoryId?: string };
  const history = useHistory();
  if (!testCategoryId) {
    history.push("/home");
    return <></>
  }
  const match = useRouteMatch();
  const {data, loading} = useGetTestCategoryQuery({
    variables: {
      id: testCategoryId,
    }
  })
  
  if(loading){
    return <Loading />
  }

  const testCategory = data?.getTestCategory;
  let tests = data?.getTestCategory.tests;
  // reorder test skill LISTENING READING  
  let shouldReorder = false;
  shouldReorder = tests ? tests.some((e, i) => e.skillType === SkillsType.Listening && i !== 0) : false;
  if(shouldReorder){
    tests = tests?.reverse();
  }
  
  return (
    <Switch>
      <Route path={`${match.path}/exam/:testId`}>
        <TestTaken testsData={tests} setIsTaken={setIsTaken} />
      </Route>
      <Route path={`${match.path}`}>
        <Container>
          <section>
            <Row>
              <Col md="8">
                <Row>
                  <Col md="3">
                    <img
                      src={require("../../../assets/img/toiec.png")}
                      alt=""
                    />
                  </Col>
                  <Col md="9">
                    <h2 className="font-weight-bold mb-1">
                      {testCategory?.testCategoryName}
                    </h2>
                    <div className="d-flex align-items-center">
                      <i className="now-ui-icons ui-1_calendar-60 mr-1"></i>
                      <p className="mb-0 font-9">Published on: 14/08/2020</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="now-ui-icons tech_laptop mr-1"></i>
                      <p className="mb-0 font-9 font-weight-semi">
                        Views: 7,500
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="now-ui-icons media-1_button-play mr-1"></i>
                      <p className="mb-0 font-9 font-weight-semi">
                        Tests Taken: 400
                      </p>
                    </div>
                  </Col>
                </Row>
                <div className="mt-5">
                  <Table borderless className="text-center">
                    <thead>
                      <tr>
                        <th className="font-weight-bold">Skills</th>
                        <th className="font-weight-bold">
                          <i className="now-ui-icons tech_headphones mr-2"></i>
                          Listening
                        </th>
                        <th className="font-weight-bold">
                          <i className="now-ui-icons education_glasses mr-2"></i>
                          Reading
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">{testCategory?.testCategoryName}</th>
                        {tests &&
                          tests.map((test) => {
                            return (
                              <td className="text-center py-0">
                                <Link
                                  to={`${match.url}/exam/${test.id}`}
                                  className={`d-block rounded border border-none ${
                                    test.skillType === SkillsType.Reading
                                      ? "bg-success"
                                      : "bg-info"
                                  } text-white p-2 width-8rem mx-auto`}
                                  style={{
                                    textDecoration: "none",
                                  }}
                                >
                                  Take Test
                                </Link>
                              </td>
                            );
                          })}
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>

              <Col md="4">
                <LeaderBoard />
              </Col>
            </Row>
          </section>
        </Container>
      </Route>
    </Switch>
  );
};

export default TestSkills;
