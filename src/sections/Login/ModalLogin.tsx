import { useFormik } from "formik";
import React from "react";
import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Modal,
  ModalFooter,
} from "reactstrap";
import { useLoginMutation, useMeLazyQuery } from "../../schema/schema";
import * as yup from "yup";
import ErrorMessage from "../../views/admin/components/Error";
import useBrowserStorage from "../../components/BrowserStorage";
import stripTypenames from "../../utils/stripTypenames";
interface ModalLoginProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}
export const ModalLogin: React.FC<ModalLoginProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const browserStorage = useBrowserStorage();
  const [nameFocus, setNameFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [meQuery, meQueryResult] = useMeLazyQuery({ fetchPolicy: "network-only" });
  const [loginMutation] = useLoginMutation();
  const [shouldValidate, setShouldValidate] = React.useState(false);
  React.useEffect(() => {
    meQueryResult.data?.me && meQueryResult.refetch && meQueryResult.refetch();
  }, [meQueryResult, meQueryResult.loading])
  const formik = useFormik({
    enableReinitialize: true,
    validateOnChange: shouldValidate,
    validateOnBlur: shouldValidate,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().trim().email().required(),
      password: yup.string().min(8).required(),
    }),
    onSubmit: async (values) => {
      try {
        const result = await loginMutation({
          variables: {
            email: values.email,
            password: values.password,
          },
        });
        if (result.data?.login) {
          setIsOpen(false);
          browserStorage.tokens = stripTypenames(result.data?.login.impersonatingUser?.tokens!);
          browserStorage.save();
          meQuery();
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
    <Modal
      className="modal-login"
      modalClassName="modal-brand"
      isOpen={isOpen}
      toggle={() => setIsOpen(false)}
    >
      <Card className="card-login card-plain" data-background-color="">
        <div className="modal-header justify-content-center">
          <button
            aria-hidden={true}
            className="close"
            onClick={() => setIsOpen(false)}
            type="button"
          >
            <i className="now-ui-icons ui-1_simple-remove"></i>
          </button>
          <div className="header header-info text-center">
            <div className="logo-container">
              <img alt="..." src={require("../../assets/img/logo.png")}></img>
            </div>
          </div>
        </div>
        <div className="modal-body">
          <Form action="" className="form" method="">
            <CardBody>
              <FormGroup>
                <InputGroup
                  className={
                    nameFocus
                      ? "no-border input-lg input-group-focus"
                      : "no-border input-lg"
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="text"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={(e) => {
                      setNameFocus(false);
                      formik.handleBlur(e);
                    }}
                    onFocus={() => setNameFocus(true)}
                  ></Input>
                  
                </InputGroup>
                <ErrorMessage message={formik.errors.email} />
              </FormGroup>
              <FormGroup>
                <InputGroup
                  className={
                    passwordFocus
                      ? "no-border input-lg input-group-focus"
                      : "no-border input-lg"
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_lock-circle-open"></i>
                    </InputGroupText>
                  </InputGroupAddon>

                  <Input
                    placeholder="Password..."
                    type="text"
                    name="password"
                    onChange={formik.handleChange}
                    onFocus={() => setPasswordFocus(true)}
                    onBlur={(e) => {
                      formik.handleBlur(e);
                      setPasswordFocus(false);
                    }}
                  ></Input>
                  
                </InputGroup>
                <ErrorMessage message={formik.errors.password} />
              </FormGroup>
            </CardBody>
          </Form>
        </div>
        <ModalFooter className="text-center">
          <Button
            block
            className="bg-primary btn-round"
            color="info"
            href="#pablo"
            onClick={(e) => {
              e.preventDefault();
              formik.submitForm();
              setShouldValidate(true);
            }}
            size="lg"
          >
            Login
          </Button>
        </ModalFooter>
      </Card>
    </Modal>
  );
};
