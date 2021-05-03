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
import { ModalLogin } from "../../sections/Login/ModalLogin";
import IndexNavbar from "../Navbars/IndexNavbar";
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
  const { hiddenBrand, modalLogin, setModalLogin, isStyle } = React.useContext(NavbarContext);
 
  const me = useMe();
  const history = useHistory();
  const client = useApolloClient();
  return (
    <div className={`${isStyle ? 'bg-black-10' : '' } fixed-top`}>
      <Navbar
        className={`${hiddenBrand} header-logo z-header mb-0 ${!isStyle ? 'bg-brand' : ''}`}
      >
        <div className='container'>
          <div className="w-100">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center logo">
                <Logo className="width-3rem" />
                <h4 className="m-0 text-white ml-2 font-9">POWPER ENGLISH</h4>
              </div>
              <ul className="list-unstyled profile mb-0">
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
                            className={"text-white font-weight-bold"}
                          >
                            Profile
                          </DropdownItem>
                          <DropdownItem
                            className={"text-white font-weight-bold"}
                            onClick={() => {
                              localStorage.clear();
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
        </div>
      </Navbar>
      <IndexNavbar />
    </div>
  );
};

export default Brand;
