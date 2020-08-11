import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  // Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Navbar,
  Nav,
  Container,
  // UncontrolledTooltip,
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
    title: "Luyện thi đại học",
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
    <DropdownMenu className={'bg-primary border border-white rounded min-w-6rem text-center mt-3 min-w-full'}>
      {elements.map((eleChild) => {
        return (
          <DropdownItem to={eleChild.link} tag={Link} className={'font-12 text-white font-weight-bold'}>
            {eleChild.title.toUpperCase()}
          </DropdownItem>
        );
      })}
    </DropdownMenu>
  );
};
interface IndexNavbarProps {
  navbarColor?: string;
  topFixed?: string;
}
const IndexNavbar : React.FC<IndexNavbarProps> = ({
  navbarColor,
  topFixed
}) => {
  
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  // const scrollToElement = () => {
  //   document.getElementById("download-section")?.scrollIntoView();
  // };

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
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="primary" style={{top: topFixed}}>
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
                      className="border border-white rounded-pill min-w-6rem text-center font-12 px-3"
                    >
                      <p className="font-weight-bold">{ele.title}</p>
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
