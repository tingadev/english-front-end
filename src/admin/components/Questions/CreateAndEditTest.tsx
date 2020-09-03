import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
  Form,
  Button,
  CustomInput,
  NavItem,
  Nav,
  NavLink,
  TabPane,
  TabContent,
} from "reactstrap";
import {
  SkillsType,
  useGetPartsQuery,
  EnglishCertificateType,
} from "../../../schema/schema";
// import { notificationAdd } from "../../utils/Notification";
// import { EnglishCertificateOptions, SkillsTypeOptions } from "./CreatePart";
// import {
//   EnglishCertificateType,
//   NewQuestionInput,
//   QuestionType,
//   useCreateQuestionMutation,
//   SkillsType,
//   AnswersInput,
// } from "../../../schema/schema";
// import Select from "react-select";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import { store } from "react-notifications-component";
// import ErrorMessage from "../Error";
// import TinyMCETextarea from "../TinyMCETextarea";
// import { Route, Switch, Redirect } from "react-router-dom";

interface CreateAndEditTestProps {}

const CreateAndEditTest: React.FC<CreateAndEditTestProps> = () => {
  const [horizontalTabs, setHorizontalTabs] = React.useState(
    SkillsType.Reading
  );
  const partsQuery = useGetPartsQuery({
    variables: {
      certificateType: EnglishCertificateType.Toiec,
    },
  });

  const { loading } = useGetPartsQuery();
  if (loading) {
    return <>{"Loading...."}</>;
  }
  const dataParts = partsQuery.data?.parts;
  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-center">
        <h5 className="title">Create Test</h5>
        <div>
          <Button type="submit" className="bg-info font-weight-bold font-10">
            Submit
          </Button>
          <Button className="bg-danger font-weight-bold font-10">Cancel</Button>
        </div>
      </CardHeader>
      <CardBody>
        <Row>
          <Col sm="12">
            <Nav className="nav-pills-info" pills role="tablist">
              <NavItem>
                <NavLink
                  className={
                    horizontalTabs === SkillsType.Listening ? "active" : ""
                  }
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    setHorizontalTabs(SkillsType.Listening);
                  }}
                >
                  Listening
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={
                    horizontalTabs === SkillsType.Reading ? "active" : ""
                  }
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    setHorizontalTabs(SkillsType.Reading);
                  }}
                >
                  Reading
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent className="tab-space" activeTab={horizontalTabs}>
              <TabPane tabId={SkillsType.Listening}>
                <ul className="list-style-none mt-4">
                  {dataParts &&
                    dataParts
                      .filter((p) => p.skillType === SkillsType.Listening)
                      .map((p, index) => {
                        return (
                          <>
                            <li key={index} className="mb-2 bg-primary">
                              <h4 className="p-2 text-white my-0">
                                {p.partName}
                              </h4>
                            </li>
                            <div>
                              <Button
                                className="btn-icon btn-round mr-1"
                                color="success"
                                size="md"
                                type="button"
                              >
                                <i className="now-ui-icons ui-1_simple-add"></i>
                              </Button>
                              <span className="font-weight-bold font-10">
                                Add Question
                              </span>
                            </div>
                          </>
                        );
                      })}
                </ul>
              </TabPane>
              <TabPane tabId={SkillsType.Reading}>
                <ul className="list-style-none mt-4">
                  {dataParts &&
                    dataParts
                      .filter((p) => p.skillType === SkillsType.Reading)
                      .map((p, index) => {
                        return (
                          <>
                            <li key={index} className="mb-2 bg-primary">
                              <h4 className="p-2 text-white my-0">
                                {p.partName}
                              </h4>
                            </li>
                            <div>
                              <Button
                                className="btn-icon btn-round mr-1"
                                color="success"
                                size="md"
                                type="button"
                              >
                                <i className="now-ui-icons ui-1_simple-add"></i>
                              </Button>
                              <span className="font-weight-bold font-10">
                                Add Question
                              </span>
                            </div>
                          </>
                        );
                      })}
                </ul>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </CardBody>
      <Form></Form>
    </Card>
  );
};

export default CreateAndEditTest;
