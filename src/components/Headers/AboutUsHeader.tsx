import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

// core components

const AboutUsHeader = () => {
  const pageHeader = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        if(pageHeader.current){
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
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../../assets/img/bg32.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h1 className="title">TOEIC</h1>
              <h4>
              TOEIC – TẤM VÉ VÀO TƯƠNG LAI NGHỀ NGHIỆP VỮNG CHẮC
              </h4>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default AboutUsHeader;
