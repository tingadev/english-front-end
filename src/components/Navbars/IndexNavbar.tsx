import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Navbar,
  Nav,
} from "reactstrap";
import { TestGroupChildInfoFragment, useGetTestGroupsInfoQuery } from "../../schema/schema";
import Loading from "../Loading";
import { NavbarContext } from "./NavbarContext";
interface ElementMenuProps {
  title: string;
  link: string;
  id: string;
}
interface DropdownMenuChildProps {
  elements: TestGroupChildInfoFragment[];
  className?: string;
}

export const DropdownMenuChild: React.FC<DropdownMenuChildProps> = ({ elements, className }) => {
  return (
    <DropdownMenu
      className={
        `bg-brand border border-white rounded min-w-6rem text-left mt-3 min-w-full ${className}`
      }
    >
      {elements.map((eleChild, index) => {
        return (
          <DropdownItem
            key={index}
            to={`/home/${eleChild.certificateType.toLowerCase()}/${eleChild.groupType.toLowerCase()}/${eleChild.link}`}
            tag={Link}
            className={"text-white font-weight-bold"}
          >
            {eleChild.testGroupName.toUpperCase()}
          </DropdownItem>
        );
      })}
    </DropdownMenu>
  );
};

interface IndexNavbarProps {
  isGeneral?: boolean;
}
const IndexNavbar: React.FC<IndexNavbarProps> = ({ isGeneral }) => {
  const { navbarColor, isStyle } = React.useContext(NavbarContext);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const {data, loading} = useGetTestGroupsInfoQuery({
    variables: {
      data: {},
    },
  });
  const testGroups = data?.getTestGroups.testGroups;
  if(loading){
    return <Loading isWelcome />
  }

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        className={`mb-0 ${isStyle ? '' : 'bg-primary'} ${navbarColor}`}
        expand="lg"
      >
        <div className="navbar-translate">
          {/* <UncontrolledTooltip target="#navbar-brand">
              Designed by Invision. Coded by Creative Tim
            </UncontrolledTooltip> */}
          <button
            className="navbar-toggler navbar-toggler"
            onClick={() => {
              document.documentElement.classList.toggle("nav-open");
              setCollapseOpen(!collapseOpen);
            }}
            aria-expanded={collapseOpen}
            type="button"
          >
            <span className="navbar-toggler-bar top-bar"></span>
            <span className="navbar-toggler-bar middle-bar"></span>
            <span className="navbar-toggler-bar bottom-bar"></span>
          </button>
        </div>
        <Collapse
          className="justify-content-start"
          isOpen={collapseOpen}
          navbar
        >
          <Nav navbar>
            {testGroups?.map((ele, index) => {
              return (
                <UncontrolledDropdown key={index} nav>
                  <DropdownToggle
                    caret={ele.testGroupsChild ? true : false}
                    color="default"
                    href="#pablo"
                    nav
                    onClick={(e) => e.preventDefault()}
                    className="border border-white rounded-pill min-w-6rem text-center font-11 px-3"
                  >
                    <p className="font-weight-bold">{ele.testGroupName}</p>
                  </DropdownToggle>
                  {ele.testGroupsChild && (
                    <DropdownMenuChild elements={ele.testGroupsChild} />
                  )}
                </UncontrolledDropdown>
              );
            })}
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default IndexNavbar;
