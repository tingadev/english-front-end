/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Button, Row, Col } from "reactstrap";
import Lottie from "react-lottie";
import animationHand from "../../assets/lotties/lf30_editor_jlkqa2ui.json";
import animationEducation from "../../assets/lotties/distance-education.json";
// core components

const IndexHeader = () => {
  const pageHeader = React.useRef<HTMLDivElement>(null);
  const defaultAnimationHand = {
    loop: true,
    autoplay: true,
    animationData: animationHand,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultAnimationEducation = {
    loop: true,
    autoplay: true,
    animationData: animationEducation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
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
      <div className="page-header clear-filter page-header-image-custom" filter-color="purple">
        <Container>
          <Row
            style={{
              marginTop: "8rem",
            }}
          >
            <Col className="mr-auto text-left" md="6">
              <h1 className="title">POWPER ENGLISH</h1>
              <h4 className="description">
                Tổ chức giáo dục POWPER ENGLISH cung cấp một trong những thư
                viện tài nguyên luyện thi tiếng Anh trực tuyến lớn nhất Việt
                Nam. Thư viện có hơn 3 vạn câu hỏi và đề mục chuyên đề luyện thi
                tiếng Anh TOEIC, IELTS và Luyện thi đại học quốc gia.
              </h4>
              <br></br>
              <div className="buttons d-flex">
                <Button
                  className="mr-3 font-12 border border-white bg-transparent text-nowrap"
                  color=""
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  Về chúng tôi
                </Button>
                <Button
                  className="mr-3 font-12 d-flex"
                  color="primary"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                  style={{
                    width: "fit-content",
                    maxHeight: 52,
                    whiteSpace: 'nowrap',
                    paddingRight: 25
                  }}
                >
                  <span>Thi thử Online</span>
                  <Lottie options={defaultAnimationHand} width={50} height={50} style={{
                    margin: 'initial',
                    marginTop: -15
                  }}/>
                </Button>
              </div>
            </Col>
            <Col className="" md="6">
            <Lottie options={defaultAnimationEducation} height={'auto'} style={{
                    margin: 'initial',
                    marginTop: -15
                  }}/>
            </Col>
          </Row>
        </Container>
        </div>
    </>
  );
};

export default IndexHeader;
