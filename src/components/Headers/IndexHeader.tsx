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
          <Row style={{
            marginTop: '8rem',
          }}>
            <Col className="mr-auto text-left" md="7">
              <h1 className="title">OMEGA ENGLISH</h1>
              <h4 className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
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
                  About me
                </Button>
                <Button
                  className="mr-3 font-12"
                  color="primary"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  Testing Online
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
