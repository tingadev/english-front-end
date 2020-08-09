import React from "react";
import { Link } from "react-router-dom";
import { css } from '@emotion/core';
// reactstrap components
import {
  // Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

const elementsNav = [
  {
    title: "Toiec",
    dropdown: [
      {
        title: "T1 - Chiến lược làm bài",
        link: "#ielts",
        id: "ielts",
      },
      {
        title: "T2 - Ngữ pháp và bài tập",
        link: "#ielts",
        id: "ielts",
      },
    ],
    link: "#toiec",
    id: "toiec",
  },
  {
    title: "IELTS",
    link: "#ielts",
    id: "ielts",
  },
  {
    title: "Luyện thi đang học",
    link: "#ltdh",
    id: "ltdh",
  },
  {
    title: "Khoá học tặng kèm",
    link: "#ltdh",
    dropdown: [
      {
        title: "Viết thư thương mại",
        link: "#ielts",
        id: "ielts",
      },
      {
        title: "Hợp đồng thương mại",
        link: "#ielts",
        id: "ielts",
      },
    ],
    id: "ltdh",
  },
  {
    title: "Cộng tác",
    link: "#ltdh",
    id: "ltdh",
  },
  {
    title: "Tư vấn và hổ trợ 24/7",
    link: "#ltdh",
    id: "ltdh",
    dropdown: [
      {
        title: "Hotline",
        link: "#ielts",
        id: "ielts",
      },
      {
        title: "Zalo",
        link: "#ielts",
        id: "ielts",
      },
      {
        title: "Facebook",
        link: "#ielts",
        id: "ielts",
      },
    ],
  },
];
interface ElementMenuProps {
  title: string;
  link: string;
  id: string;
}
interface DropdownMenuChildProps {
  elements: ElementMenuProps[];
}

const DropdownMenuChild: React.FC<DropdownMenuChildProps> = ({ elements }) => {
  return (
    <DropdownMenu className={'bg-black-opacity border border-white rounded min-w-6rem text-center mt-3 min-w-full'}>
      {elements.map((eleChild) => {
        return (
          <DropdownItem to={eleChild.link} tag={Link} className={'font-10 text-white text-bold'}>
            {eleChild.title.toUpperCase()}
          </DropdownItem>
        );
      })}
    </DropdownMenu>
  );
};

const IndexNavbar = () => {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  const scrollToElement = () => {
    document.getElementById("download-section")?.scrollIntoView();
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
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
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="primary">
        <Container>
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
            className="justify-content-center"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              {elementsNav.map((ele) => {
                return (
                  <UncontrolledDropdown nav>
                    <DropdownToggle
                      caret={ele.dropdown ? true : false}
                      color="default"
                      href="#pablo"
                      nav
                      onClick={(e) => e.preventDefault()}
                      className="border border-white rounded-pill min-w-6rem text-center font-10 px-3"
                    >
                      <p>{ele.title}</p>
                    </DropdownToggle>
                    {ele.dropdown && <DropdownMenuChild elements={ele.dropdown!}/>}
                  </UncontrolledDropdown>
                );
              })}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default IndexNavbar;
