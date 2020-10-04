/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Button, Row, Col } from "reactstrap";
import { css } from "@emotion/core";
// core components

const IndexHeader = () => {
  const pageHeader = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        if (pageHeader.current) {
          pageHeader.current.style.transform =
            "translate3d(0," + windowScrollTop + "px,0)";
        }
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="purple">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("../../assets/img/header-m.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <Row
            style={{
              marginTop: "8rem",
            }}
          >
            <Col className="mr-auto text-left" md="7">
              <h1 className="title">POWPER ENGLISH</h1>
              <h4 className="description">
                Tổ chức giáo dục POWPER ENGLISH cung cấp một trong những thư
                viện tài nguyên luyện thi tiếng Anh trực tuyến lớn nhất Việt
                Nam. Thư viện có hơn 3 vạn câu hỏi và đề mục chuyên đề luyện thi
                tiếng Anh TOEIC, IELTS và Luyện thi đại học quốc gia.
              </h4>
              <br></br>
              <div className="buttons">
                <Button
                  className="mr-3 font-12 border border-white bg-transparent"
                  color=""
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  Về chúng tôi
                </Button>
                <Button
                  className="mr-3 font-12"
                  color="primary"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  Thi thử Online
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default IndexHeader;
