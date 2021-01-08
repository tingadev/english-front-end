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
import { NavbarContext } from "./NavbarContext";

const elementsNav = [
  {
    title: "Toiec Thương mại",
    dropdown: [
      {
        title: "T0 - Giới thiệu",
        link: "/about-toiec",
        id: "ielts",
      },
      {
        title: "T1 - Test 1-40",
        link: "/home/toiec/t1-toiec-2",
        id: "ielts",
      },
      {
        title: "T2 - Toiec 600 từ vựng thương mại",
        link: "/home/toiec",
        id: "ielts",
      },
      {
        title: "T3 - Toiec Ngữ pháp đặc biệt",
        link: "/home/toiec",
        id: "ielts",
      },
      {
        title: "T4 - PART 1 Tranh",
        link: "/home/toiec",
        id: "ielts",
      },
      {
        title: "T5 - PART 2 Hỏi đáp",
        link: "/home/toiec",
        id: "ielts",
      },
      {
        title: "T6 - PART 3 Hội thoại",
        link: "/home/toiec",
        id: "ielts",
      },
      {
        title: "T7 - PART 4 Độc thoại",
        link: "/home/toiec",
        id: "ielts",
      },
      {
        title: "T8 - PART 5 Điền vào câu",
        link: "/home/toiec",
        id: "ielts",
      },
      {
        title: "T9 - PART 6 Điền vào đoạn văn",
        link: "/home/toiec",
        id: "ielts",
      },
      {
        title: "T10 - PART 7 Đọc hiểu đoạn văn",
        link: "/home/toiec",
        id: "ielts",
      },
    ],
    link: "/home/toiec",
    id: "toiec",
  },
  {
    title: "IELTS học thuật",
    link: "home/ielts",
    dropdown: [
      {
        title: "I1 - Test 1-40",
        link: "/home/ielts",
        id: "ielts",
      },
      {
        title: "I2 - IELTS Tự vựng cao cấp",
        link: "/home/ielts",
        id: "ielts",
      },
      {
        title: "I3 - IELTS Ngữ pháp cao cấp",
        link: "/home/ielts",
        id: "ielts",
      },
      {
        title: "I4 - IELTS Nghe",
        link: "/home/ielts",
        id: "ielts",
      },
      {
        title: "I5 - IELTS Đọc",
        link: "/home/ielts",
        id: "ielts",
      },
      {
        title: "I6 - IELTS Nói",
        link: "/home/ielts",
        id: "ielts",
      },
      {
        title: "I7 - IELTS Viết",
        link: "/home/ielts",
        id: "ielts",
      },
      {
        title: "I8 - IELTS Dịch vụ sửa bài viết",
        link: "/home/ielts",
        id: "ielts",
      },
      {
        title: "I9 - IELTS Dịch vụ sửa bài nói",
        link: "/home/ielts",
        id: "ielts",
      },
    ],
    id: "ielts",
  },
  {
    title: "Luyện thi đại học",
    link: "/home/ltdh",
    dropdown: [
      {
        title: "L1 - Test 1-100",
        link: "/home/ltdh",
        id: "ltdh",
      },
      {
        title: "L2 - Ngữ pháp",
        link: "/home/ltdh",
        id: "ltdh",
      },
      {
        title: "L3 - Từ vựng",
        link: "/home/ltdh",
        id: "ltdh",
      },
      {
        title: "L4 - Phát âm",
        link: "/home/ltdh",
        id: "ltdh",
      },
      {
        title: "L5 - Đọc hiểu",
        link: "/home/ltdh",
        id: "ltdh",
      },
      {
        title: "L6 - Bài viết",
        link: "/home/ltdh",
        id: "ltdh",
      },
      {
        title: "L7 - 300 bài luận mẫu chuẩn phổ thông",
        link: "/home/ltdh",
        id: "ltdh",
      },
    ],
    id: "ltdh",
  },
  {
    title: "Khoá học tặng kèm",
    link: "/home/khtk",
    dropdown: [
      {
        title: "K1 - Hợp đồng kinh tế mới nhất",
        link: "/home/khtk",
        id: "khtk",
      },
      {
        title: "K2 - Email ngoại giao quốc tế",
        link: "/home/khtk",
        id: "khtk",
      },
      {
        title: "K3 - Phát âm chuẩn bản xứ",
        link: "/home/khtk",
        id: "khtk",
      },
      {
        title: "K4 - Viết tiếng anh căn bản",
        link: "/home/khtk",
        id: "khtk",
      },
    ],
    id: "ltdh",
  },
  {
    title: "Cộng tác",
    link: "/home/ct",
    dropdown: [
      {
        title: "C1 - Tuyển dụng",
        link: "/home/ct",
        id: "ct",
      },
      {
        title: "C2 - Đại sứ",
        link: "/home/ct",
        id: "ct",
      },
    ],
    id: "ltdh",
  },
  {
    title: "Hổ trợ 24/7",
    link: "/home/support",
    id: "support",
  },
];
interface ElementMenuProps {
  title: string;
  link: string;
  id: string;
}
interface DropdownMenuChildProps {
  elements: ElementMenuProps[];
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
            to={eleChild.link}
            tag={Link}
            className={"text-white font-weight-bold"}
          >
            {eleChild.title.toUpperCase()}
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
  const {
    navbarColor,
    topFixed
  } = React.useContext(NavbarContext);
  const [collapseOpen, setCollapseOpen] = React.useState(false);

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
        className={"fixed-top " + navbarColor}
        expand="lg"
        color="primary"
        style={{ top: topFixed }}
        id="navbarFixed"
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
          className="justify-content-center"
          isOpen={collapseOpen}
          navbar
        >
          <Nav navbar>
            {elementsNav.map((ele, index) => {
              return (
                <UncontrolledDropdown key={index} nav>
                  <DropdownToggle
                    caret={ele.dropdown ? true : false}
                    color="default"
                    href="#pablo"
                    nav
                    onClick={(e) => e.preventDefault()}
                    className="border border-white rounded-pill min-w-6rem text-center font-11 px-3"
                  >
                    <p className="font-weight-bold">{ele.title}</p>
                  </DropdownToggle>
                  {ele.dropdown && (
                    <DropdownMenuChild elements={ele.dropdown!} />
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
