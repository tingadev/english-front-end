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
import { EnglishCertificateType, NewTestCategoryInput, NewTestInput, SkillsType, useCreateTestCategoryMutation, useCreateTestMutation } from "../../../../schema/schema";
import ListPart from "./ListPart";
import ListQuestions from "./ListQuestions";
import ListTest from "./ListTest";
import ListTestCategory from "./ListTestCategory";
// import { Route, Switch, Redirect } from "react-router-dom";
// interface ToiecAdminProps {}

const ToiecPage: React.FC<{}> = () => {
  const match = useRouteMatch();
  const [iconPills, setIconPills] = React.useState("test-category");
  const [createTestMutation, resultCreateTestMutation] = useCreateTestMutation();
  const [createTestCategory, resultCreateTestCategory] = useCreateTestCategoryMutation();
  const time = new Date().getTime();
  const dataCreateTest : NewTestInput = {
    testName: 'Draft Test - ' + time,
    isPublished: false,
    audioUrl: '',
    description: '',
    explaination: '',
    certificateType: EnglishCertificateType.Toiec,
  }
  const dataCreateCategory: NewTestCategoryInput = {
    testCategoryName: 'Draft Test Category - ' + time,
    certificateType: EnglishCertificateType.Toiec,
    isPublished: false,
  }
  const history = useHistory();
  let path = '';
  const createTestClick = async (skillType: SkillsType) => {
    await createTestMutation({
      variables: {
        data: {
          ...dataCreateTest,
          skillType
        }
      }
    })
  }
  const createTestCategoryClick = async () => {
    await createTestCategory({
      variables: {
        data: dataCreateCategory
      }
    })
  }
  React.useEffect(() => {
    if(resultCreateTestMutation.data){
      const id = resultCreateTestMutation.data.createTest.id
      const path = `${match.path}/create-test-toiec/${resultCreateTestMutation.data.createTest.skillType.toLowerCase()}/${id}`;
      history.push(path)
    }
  },[resultCreateTestMutation.data])

  React.useEffect(() => {
    if(resultCreateTestCategory.data){
      const id = resultCreateTestCategory.data.createTestCategory.id
      const path = `${match.path}/create-test-category/${resultCreateTestCategory.data.createTestCategory.certificateType.toLowerCase()}/${id}`;
      history.push(path)
    }
  },[resultCreateTestCategory.data])
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
            Create Test Group
          </a>
        <a className="btn-info btn text-white"
            onClick={async (e) => {
              e.preventDefault()
              await createTestCategoryClick();
            }}
          >
            Create Test Category
          </a>
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
                <Link
                  className={`${iconPills === "test-categories" ? "active" : ""} nav-link`}
                  to={`${match.path}/test-categories`}
                  onClick={(e) => {
                    setIconPills("test-categories");
                  }}
                >
                  <i className="now-ui-icons objects_umbrella-13"></i>
                  Test Category
                </Link>
              </NavItem>
              <NavItem>
              <Link
                  className={`${iconPills === "tests" ? "active" : ""} nav-link`}
                  to={`${match.path}/tests`}
                  onClick={(e) => {
                    setIconPills("tests");
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
              <Route path={`${match.path}/tests`}>
                <ListTest setIconPills={setIconPills}/>
              </Route>
              <Route path={`${match.path}/test-categories`}>
                <ListTestCategory setIconPills={setIconPills}/>
              </Route>
            </Switch>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ToiecPage;
