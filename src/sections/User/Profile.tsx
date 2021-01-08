import { useFormik } from "formik";
import React from "react";
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
import * as yup from "yup";
import ErrorMessage from "../../views/admin/components/Error";
import Layout from "../../views/layout/Layout";
import { useMe } from "../../hooks/useMe";
import { UpdateMeInput, useUpdateMeMutation } from "../../schema/schema";
import { notificationAdd } from "../../views/admin/utils/Notification";
import { store } from "react-notifications-component";
import stripTypenames from "../../utils/stripTypenames";
interface ProfileProps {}
export const ProfilePage: React.FC<ProfileProps> = () => {
  return (
    <Layout>
      <ProfileForm />
    </Layout>
  );
};
const ProfileForm: React.FC = () => {
  const [updateMe] = useUpdateMeMutation();
  const notification = notificationAdd("Profile", "Update");
  const {name, role, ...me} = useMe();
  const [shouldValidate, setShouldValidate] = React.useState(false);
  const formik = useFormik({
    enableReinitialize: true,
    validateOnChange: shouldValidate,
    validateOnBlur: shouldValidate,
    initialValues: me,
    validationSchema: yup.object().shape({
      firstName: yup.string().trim().required(),
      lastName: yup.string().trim().required(),
      email: yup.string().trim().email().required(),
    }),
    onSubmit: async (values) => {
      try {
        const data = stripTypenames(values as UpdateMeInput)
        const result = await updateMe({
          variables: {
            data 
          },
        });
        if (result.data?.updateMe) {
            store.addNotification(notification);
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
                  <h5 className="title">Edit Profile</h5>
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
                            defaultValue={formik.values.email}
                            placeholder="Your email (used to login)"
                            type="email"
                            disabled
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
                            disabled
                            // className={formik.errors.password && "input-error"}
                          />
                          {/* <ErrorMessage message={formik.errors.password} /> */}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            defaultValue={formik.values.firstName}
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
                            defaultValue={formik.values.lastName!}
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
                            defaultValue={formik.values.address!}
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
                      Update
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
