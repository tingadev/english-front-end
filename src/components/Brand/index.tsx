/*eslint-disable*/
import { useApolloClient } from "@apollo/react-hooks";
import React from "react";
import { useHistory } from "react-router-dom";

// reactstrap components
import {
  Container,
  Navbar,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useMe } from "../../hooks/useMe";
import { useLogoutMutation } from "../../schema/schema";
import { ModalLogin } from "../../sections/Login/ModalLogin";
import { DropdownMenuChild } from "../Navbars/IndexNavbar";
import { NavbarContext } from "../Navbars/NavbarContext";
interface LogoProps {
  className?: string;
}
export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <a href="/">
      <img
        className={className}
        src={require("../../assets/img/logo.png")}
        alt="logo"
      />
    </a>
  );
};
const loginDropdowns = [
  {
    title: "Edit profile",
    link: "/profile",
    id: "profile",
  },
];
const Brand: React.FC = () => {
  const { hiddenBrand, navbarColor } = React.useContext(NavbarContext);
  const [modalLogin, setModalLogin] = React.useState(false);
  const me = useMe();
  const [logoutMutation] = useLogoutMutation();
  const history = useHistory();
  const client = useApolloClient();
  return (
    <>
      <Navbar
        className={`${navbarColor} fixed-top ${
          hiddenBrand ? "d-none " : ""
        } z-header`}
      >
        <Container>
          <div className="w-100">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Logo className="width-5rem" />
                <h3 className="mb-0 text-white ml-2">POWPER ENGLISH</h3>
              </div>
              <ul className="list-unstyled">
                <UncontrolledDropdown nav className="list-style-none">
                  <DropdownToggle
                    color="default"
                    href="#pablo"
                    nav
                    onClick={() => {
                      me.id === "-1" && setModalLogin(true);
                    }}
                    className="border border-white rounded-pill min-w-6rem text-center font-11 px-3 position-relative"
                  >
                    <p className="font-weight-bold">
                      {me.id !== "-1" ? me.name : "Đăng nhập/ Đăng ký"}
                    </p>
                    {me.id !== "-1" && (
                      <>
                        <DropdownMenu
                          className={`bg-brand border border-white rounded min-w-6rem text-left mt-3 min-w-full`}
                        >
                          <DropdownItem
                            to='/profile'
                            tag={"profile"}
                            className={"text-white font-weight-bold"}
                          >
                            Profile
                          </DropdownItem>
                          <DropdownItem
                            tag={"logout"}
                            className={"text-white font-weight-bold"}
                            onClick={async () => {
                              await logoutMutation()
                              client.resetStore();
                              history.push('/home')
                            }}
                          >
                            Log out
                          </DropdownItem>
                        </DropdownMenu>
                      </>
                    )}
                  </DropdownToggle>
                </UncontrolledDropdown>
              </ul>
              <ModalLogin isOpen={modalLogin} setIsOpen={setModalLogin} />
            </div>
            {/* <Col md="4">
              <div className="d-flex align-items-center text-white h-100">
                <div className="mr-2">
                  <h2 className="mb-2">180.900</h2>
                  <p>TỔNG LƯỢT ĐĂNG KÝ</p>
                </div>
                <div className="ml-2">
                  <h2 className="mb-2">1800</h2>
                  <p>ĐĂNG KÝ HÔM NAY</p>
                </div>
              </div>
            </Col> */}
            {/* <Col md="6">
            <div className="d-flex align-items-center text-white h-100">
                <div className="mr-5 text-center">
                <p className="font-weight-bold font-12">HOTLINE</p> <br/> <a href="tel:+84866644423" className="font-weight-bold font-12">08.666.444.23</a> 
                </div>
              <div className="ml-auto">
                <p className="font-13 font-weight-bold">”Học thật, thi thật”</p>
                <br/>
                <p>CEO  Ths Dương Thái Lực</p>
              </div>
              <div className="ml-auto">
                <img width="120px" src={require("../../assets/img/teacher.png")} alt=""/>
              </div>
              </div>
            </Col> */}
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Brand;
