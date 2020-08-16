/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import Divider from "../../../components/Divider";
import TestSkills from "../TestSkills";
import LeaderBoard from "../../../components/LeaderBoard";
interface TestCategoryProps {}
const TestCategory: React.FC<TestCategoryProps> = ({}) => {
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
  const dataT2 = [
    {
      title: "L1",
      id: "1",
      times: "500",
    },
    {
      title: "L2",
      id: "2",
      times: "300",
    },
    {
      title: "L3",
      id: "3",
      times: "600",
    },
    {
      title: "L4",
      id: "3",
      times: "600",
    },
    {
      title: "L5",
      id: "3",
      times: "600",
    },
  ];
  const dataT4 = [
    {
      title: "L1",
      id: "1",
      times: "500",
    },
    {
      title: "L2",
      id: "2",
      times: "300",
    },
    {
      title: "L3",
      id: "3",
      times: "600",
    },
    {
      title: "L4",
      id: "3",
      times: "600",
    },
    {
      title: "L5",
      id: "3",
      times: "600",
    },
  ];
  const match = useRouteMatch();
  return (
      <Switch>
        <Route path={`${match.path}/test/:testId`}>
          <TestSkills />
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
                  {dataT1.map((ele, index) => {
                    return (
                      <li className="w-50 mb-2" key={index}>
                        <Link
                          style={{ textDecoration: "none" }}
                          className="font-12 font-weight-bold"
                          to={`${match.url}/test/` + ele.id}
                        >
                          {ele.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
              <Divider></Divider>
              <section className="py-5">
                <h3>
                  <i className="now-ui-icons education_atom font-5 text-primary font-weight-bold"></i>
                  T2- 600 Từ Vựng TOEIC
                </h3>
                <ul className="d-flex flex-wrap">
                  {dataT2.map((ele, index) => {
                    return (
                      <li className="w-50 mb-2" key={index}>
                        <Link
                          style={{ textDecoration: "none" }}
                          className="font-12 font-weight-bold"
                          to={`${match.url}/test/` + ele.id}
                        >
                          {ele.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
              <Divider></Divider>
              <section className="py-5">
                <h3>
                  <i className="now-ui-icons education_atom font-5 text-primary font-weight-bold"></i>
                  T3-Ngữ Pháp TOEIC
                </h3>
                {/* <ul className="d-flex flex-wrap">
              {
                dataT2.map((ele, index) => {
                  return (
                    <li className="w-50 mb-2" key={index}>
                      <Link style={{textDecoration: "none"}} className="font-12 font-weight-bold" to={`${match.url}/test/` + ele.id}>{ele.title}</Link> 
                    </li>
                    )
                })
              }
            </ul> */}
              </section>
              <Divider></Divider>
              <section className="py-5">
                <h3>
                  <i className="now-ui-icons education_atom font-5 text-primary font-weight-bold"></i>
                  T4-Part 1 Listening
                </h3>
                <ul className="d-flex flex-wrap">
                  {dataT4.map((ele, index) => {
                    return (
                      <li className="w-50 mb-2" key={index}>
                        <Link
                          style={{ textDecoration: "none" }}
                          className="font-12 font-weight-bold"
                          to={`${match.url}/test/` + ele.id}
                        >
                          {ele.title}
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
