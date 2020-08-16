/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Table } from "reactstrap";
import { useParams, Link, Switch, Route, useRouteMatch } from "react-router-dom";
import TestTaken from "../TestTake";
import LeaderBoard from "../../../components/LeaderBoard";
interface TestSkillsProps {
  setIsTaken?: (value: boolean) => void;
}
const TestSkills: React.FC<TestSkillsProps> = ({ setIsTaken }) => {
  const { testId } = useParams();
  const match = useRouteMatch();
  const dataT1 = [
    {
      title: "ETS 2020Test: 1- Test 10",
      id: "1",
      times: "500",
    },
    {
      title: "ETS 2019Test: 1- Test 10",
      id: "2",
      times: "300",
    },
    {
      title: "ETS 2019Test: 1- Test 10",
      id: "3",
      times: "600",
    },
  ];
  const testDetail = dataT1.find((d) => d.id === testId);
  return (
    <Container>
      <Switch>
      <Route path={`${match.path}/take`}>
          <TestTaken testDetail={testDetail} setIsTaken={setIsTaken}/>
        </Route>
      <Route path={`${match.path}`}>
      <section>
        <Row>
          <Col md='8'>
          <Row>
          <Col md="3">
            <img src={require("../../../assets/img/toiec.png")} alt="" />
          </Col>
          <Col md="9">
            <h2 className="font-weight-bold mb-1">{testDetail?.title}</h2>
            <div className="d-flex align-items-center">
              <i className="now-ui-icons ui-1_calendar-60 mr-1"></i>
              <p className="mb-0 font-9">Published on: 14/08/2020</p>
            </div>
            <div className="d-flex align-items-center">
              <i className="now-ui-icons tech_laptop mr-1"></i>
              <p className="mb-0 font-9 font-weight-semi">Views: 7,500</p>
            </div>
            <div className="d-flex align-items-center">
              <i className="now-ui-icons media-1_button-play mr-1"></i>
              <p className="mb-0 font-9 font-weight-semi">Tests Taken: 400</p>
            </div>
          </Col>
        </Row>
        <div className="mt-5">
          <Table borderless className="text-center">
            <thead>
              <tr>
                <th className="font-weight-bold">Skills</th>
                <th className="font-weight-bold">
                  <i className="now-ui-icons education_glasses mr-2"></i>Reading
                </th>
                <th className="font-weight-bold">
                  <i className="now-ui-icons tech_headphones mr-2"></i>Listening
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Test 1</th>
                <td className="text-center py-0">
                  <Link
                    to={`${match.url}/take`}
                    className="d-block rounded border border-none bg-success text-white p-2 width-8rem mx-auto"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    Take Test
                  </Link>
                </td>
                <td className="text-center py-0">
                  <Link
                    to=""
                    className="d-block rounded border border-none bg-info text-white p-2 width-8rem mx-auto"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    Take Test
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row">Test 2</th>
                <td className="text-center py-0">
                  <Link
                    to=""
                    className="d-block rounded border border-none bg-success text-white p-2 width-8rem mx-auto"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    Take Test
                  </Link>
                </td>
                <td className="text-center py-0">
                  <Link
                    to=""
                    className="d-block rounded border border-none bg-info text-white p-2 width-8rem mx-auto"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    Take Test
                  </Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
          </Col>
          
          <Col md="4">
            <LeaderBoard/>
          </Col>
        </Row>
        
      </section>
      </Route>
      
      </Switch>
    </Container>
  );
};

export default TestSkills;
