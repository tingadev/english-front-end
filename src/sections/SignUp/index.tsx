import { useFormik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";
import { useCreateUserMutation, UserRole } from "../../schema/schema";
import * as yup from "yup";
import ErrorMessage from "../../views/admin/components/Error";
import Layout from "../../views/layout/Layout";

interface SignUpProps {}
export const SignUp: React.FC = () => {
  return (
    <Layout>
      <SignUpForm />
    </Layout>
  );
};
const SignUpForm: React.FC<SignUpProps> = () => {
  const [createUser] = useCreateUserMutation();
  const history = useHistory();
  const [shouldValidate, setShouldValidate] = React.useState(false);
  const formik = useFormik({
    enableReinitialize: true,
    validateOnChange: shouldValidate,
    validateOnBlur: shouldValidate,
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
      role: UserRole.Member,
    },
    validationSchema: yup.object().shape({
      firstName: yup.string().trim().required(),
      lastName: yup.string().trim().required(),
      email: yup.string().trim().email().required(),
      password: yup.string().trim().required(),
    }),
    onSubmit: async (values) => {
      try {
        const result = await createUser({
          variables: {
            data: values,
          },
        });
        if (result.data?.createUser) {
          history.push("/home");
        }
      } catch (e) {
        if (
          e.graphQLErrors &&
          e.graphQLErrors[0]?.extensions?.code === "INVITED_USER" &&
          e.graphQLErrors[0].extensions.exception?.invitedUser
        ) {
          return;
        }
      }
    },
  });
  return (
    <div className="wrapper">
      <div className="section pt-3 container">
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
              <CardHeader>
                  <h5 className="title">Register</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input
                            placeholder="Your email (used to login)"
                            type="email"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={formik.errors.email && "input-error"}
                          />
                          <ErrorMessage message={formik.errors.email} />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Password</label>
                          <Input
                            placeholder="Set a password"
                            type="password"
                            name="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={formik.errors.password && "input-error"}
                          />
                          <ErrorMessage message={formik.errors.password} />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            placeholder="First name"
                            type="text"
                            name="firstName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={formik.errors.firstName && "input-error"}
                          />
                          <ErrorMessage message={formik.errors.firstName} />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            placeholder="Last name"
                            type="text"
                            name="lastName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={formik.errors.lastName && "input-error"}
                          />
                          <ErrorMessage message={formik.errors.lastName} />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            placeholder="Home address"
                            type="text"
                            name="address"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={formik.errors.address && "input-error"}
                          />
                          <ErrorMessage message={formik.errors.address} />
                        </FormGroup>
                      </Col>
                    </Row>
                    {/* <Row>
                        <Col className="pr-1" md="4">
                          <FormGroup>
                            <label>City</label>
                            <Input
                              defaultValue="Mike"
                              placeholder="City"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="px-1" md="4">
                          <FormGroup>
                            <label>Country</label>
                            <Input
                              defaultValue="Andrew"
                              placeholder="Country"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-1" md="4">
                          <FormGroup>
                            <label>Postal Code</label>
                            <Input placeholder="ZIP Code" type="number" />
                          </FormGroup>
                        </Col>
                      </Row> */}
                    <Button
                      color="primary"
                      onClick={() => {
                        formik.submitForm();
                        setShouldValidate(true);
                      }}
                    >
                      Submit
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
