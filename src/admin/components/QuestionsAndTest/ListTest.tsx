import React from "react";
import { Link, useRouteMatch, Route, Switch } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Table,
  Col,
  Row,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import ListPart from "./ListPart";
import ListQuestions from "./ListQuestions";
// import { Route, Switch, Redirect } from "react-router-dom";
interface ToiecAdminProps {}

const ListTests: React.FC<ToiecAdminProps> = () => {
  const match = useRouteMatch();
  const [iconPills, setIconPills] = React.useState("test-category");
  return (
    <Row>
      <Col md={12}>
        <div className="px-4 py-2 bg-white font-weight-semi font-10">
          <Link className="btn-info btn" to={`${match.path}/create-test-toiec/reading`}>
            Create Test Reading
          </Link>
          <Link className="btn-info btn" to={`${match.path}/create-test-toiec/listening`}>
            Create Test Listening
          </Link>
          <Link className="btn-info btn" to={`${match.url}/create-part-toiec`}>
            Create Part
          </Link>
          <Link
            className="btn-info btn"
            to={`${match.url}/create-question-toiec`}
          >
            Create Question
          </Link>
        </div>
      </Col>
      <Col className="mt-4">
        <Card>
          <CardHeader>
            <Nav className="justify-content-center" role="tablist" tabs>
              <NavItem>
                <NavLink
                  className={iconPills === "test-category" ? "active" : ""}
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    setIconPills("1");
                  }}
                >
                  <i className="now-ui-icons objects_umbrella-13"></i>
                  Test Category
                </NavLink>
              </NavItem>
              <NavItem>
              <Link
                  className={`${iconPills === "test" ? "active" : ""} nav-link`}
                  to={`${match.path}/test`}
                  onClick={(e) => {
                    setIconPills("test");
                  }}
                >
                  <i className="now-ui-icons shopping_shop"></i>
                  Test
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className={`${iconPills === "part" ? "active" : ""} nav-link`}
                  to={`${match.path}/part`}
                  onClick={(e) => {
                    setIconPills("part");
                  }}
                >
                  <i className="now-ui-icons shopping_shop"></i>
                  Part
                </Link>
              </NavItem>
              <NavItem>
              <Link
                  className={`${iconPills === "questions" ? "active" : ""} nav-link`}
                  to={`${match.path}/questions`}
                  onClick={(e) => {
                    setIconPills("part");
                  }}
                >
                  <i className="now-ui-icons shopping_shop"></i>
                  Questions
                </Link>
              </NavItem>
            </Nav>
          </CardHeader>
          <CardBody>
            <Switch>
              <Route path={`${match.path}/part`}>
                <ListPart setIconPills={setIconPills}/>
              </Route>
              <Route path={`${match.path}/questions`}>
                <ListQuestions setIconPills={setIconPills}/>
              </Route>
              
            </Switch>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ListTests;
