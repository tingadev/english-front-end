import React from "react";
import { Link, useRouteMatch, Route, Switch, useHistory } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Col,
  Row,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { EnglishCertificateType, NewTestInput, SkillsType, useCreateTestMutation } from "../../../../schema/schema";
import ListPart from "./ListPart";
import ListQuestions from "./ListQuestions";
// import { Route, Switch, Redirect } from "react-router-dom";
// interface ToiecAdminProps {}

const ListTests: React.FC<{}> = () => {
  const match = useRouteMatch();
  const [iconPills, setIconPills] = React.useState("test-category");
  const [createTestMutation, resultCreateTestMutation] = useCreateTestMutation();
  const dataCreateTest : NewTestInput = {
    testName: '',
    isPublished: false,
    description: '',
    certificateType: EnglishCertificateType.Toiec,
  }
  const history = useHistory();
  const createTestClick = async (skillType: SkillsType) => {
    let path = '';
    await createTestMutation({
      variables: {
        data: {
          ...dataCreateTest,
          skillType
        }
      }
    })
    return path;
  }
  React.useEffect(() => {
    if(resultCreateTestMutation.data){
      const id = resultCreateTestMutation.data.createTest.id
      const path = `${match.path}/create-test-toiec/${resultCreateTestMutation.data.createTest.skillType.toLowerCase()}/${id}`;
      history.push(path)
    }
  },[resultCreateTestMutation.data])
  return (
    <Row>
      <Col md={12}>
        <div className="px-4 py-2 bg-white font-weight-semi font-10">
          <a className="btn-info btn text-white"
            onClick={async (e) => {
              e.preventDefault()
              await createTestClick(SkillsType.Reading);
            }}
          >
            Create Test Reading
          </a>
          <a className="btn-info btn text-white"
            onClick={async (e) => {
              e.preventDefault()
              await createTestClick(SkillsType.Listening);
            }}
          >
            Create Test Listening
          </a>
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
