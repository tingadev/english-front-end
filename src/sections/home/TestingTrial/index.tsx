import React from "react";
import Lottie from "react-lottie";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import animationFlyman from "../../../assets/lotties/fly_man.json";
import animationWelcome from "../../../assets/lotties/welcome.json";

// core components
interface TestingTrialProps {
  data?: any;
}
const TestingTrial: React.FC<TestingTrialProps> = ({}) => {
  const defaultAnimationFlyman = {
    loop: true,
    autoplay: true,
    animationData: animationFlyman,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultAnimationWelcome = {
    loop: true,
    autoplay: true,
    animationData: animationWelcome,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="features-5">
        <Container>
          <Row>
            <Col md="6">
              <h2 className="title">
                Tại sao chọn{" "}
                <span className="text-primary d-block">POWPER ENGLISH</span>
              </h2>
              <div className="info info-horizontal">
                <div className="icon icon-brand icon-circle">
                  <i className="now-ui-icons location_world"></i>
                </div>
                <div className="description">
                  <h4 className="info-title">
                    Nguồn tài nguyên khổng lồ và chuẩn mực
                  </h4>
                  <p>
                    Với hơn 30,000 câu hỏi được sắp xếp theo từng chủ điểm phục
                    vụ luyện thi TOEIC, IELTS, và Luyện thi Đại học và kiến thức
                    được cập nhật và chuẩn hóa liên tục
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon icon-brand icon-circle">
                  <i className="now-ui-icons sport_user-run"></i>
                </div>
                <div className="description">
                  <h4 className="info-title">Ứng dụng công nghệ</h4>
                  <p>
                    Thư viện của POWPER ENLGISH tích hợp đầy đủ các công cụ hỗ
                    trợ việc học được thuận tiện nhất (phần phiên âm, phần dịch,
                    phần audio phát âm của người bản xứ, thao tác đơn giản)
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon icon-brand icon-circle">
                  <i className="now-ui-icons ui-2_time-alarm"></i>
                </div>
                <div className="description">
                  <h4 className="info-title">Cam kết hiệu quả lâu dài</h4>
                  <p>
                    Mỗi một chương trình học luyện thi trên web đều được thiết
                    kế một cách bài bản và khoa học giúp tối ưu hóa kỹ năng làm
                    bài lẫn chiến lược đạt điểm cao trong các kỳ thi.
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon icon-brand icon-circle">
                  <i className="now-ui-icons business_briefcase-24"></i>
                </div>
                <div className="description">
                  <h4 className="info-title">Nhiều nguồn tài liệu miễn phí</h4>
                  <p>
                    Đội ngũ học thuật nghiên cứu kỹ lưỡng và đề xuất nhiều nguồn
                    học liệu miễn phí giúp các bạn chưa có điều kiện kinh tế có
                    thể tiếp cận được tri thức một cách dễ dàng hơn.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="6">
              <div className="d-flex flex-column h-100">
                <div className="tablet-container">
                <Lottie options={defaultAnimationFlyman} height={'auto'} style={{
                    margin: 'initial',
                  }}/>
                </div>
                <div className="info info-horizontal mt-auto">
                  <div className="icon icon-brand icon-circle">
                    <i className="now-ui-icons business_bulb-63"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">
                      Đội ngũ cố vấn học thuật có trình độ cao
                    </h4>
                    <p>
                      Là một trong số ít các tổ chức giáo dục có được sự kết hợp
                      giữa đội ngũ giáo viên trong nước và quốc tế tại Việt Nam
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div
          className="features-2 page-header-image-custom"
        >
        <Container>
          <Row>
            <Col md="8">
              <h2 className="title text-left">
                Sứ mệnh{" "}
                <span className="text-primary d-block">POWPER ENGLISH</span>
              </h2>
              <div className="info-horizontal ">
                <div className="description">
                  <p className="text-white text-justify">
                    Tổ chức giáo dục POWPER ENGLISH Tiền thân là OMEGA ENGLISH
                    CLUB được thầy Dương Thái Lực thành lập năm 2013 với sứ mệnh
                    mang đến cách học tiếng Anh hiệu quả cho các bạn học sinh
                    phổ thông ở vùng ngoại ô Tp. Hồ Chí Minh. Được kế thừa sau 7
                    năm thành lập, POWER ENGLISH vẫn tiếp nối sứ mệnh này nhưng
                    ở một tầm cao hơn đó là giúp cho tất cả học sinh sinh viên
                    cũng như người đi làm trong cả nước chuẩn hóa kiến thức cho
                    các kỳ thi quốc tế như TOEIC, IETLS và kỳ thi phổ thông quốc
                    gia vào đại học hằng năm.
                  </p>
                  <p className="text-white">
                    Tôn chỉ hoạt động của POWPER ENGLISH:
                  </p>
                </div>
              </div>
              <Row>
                <Col md="6">
                  <div className="info info-horizontal py-2">
                    <div className="icon">
                      <i className="now-ui-icons education_atom"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Chất lượng</h4>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="info info-horizontal py-2">
                    <div className="icon">
                      <i className="now-ui-icons education_atom"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Hiệu quả</h4>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="info info-horizontal py-2">
                    <div className="icon">
                      <i className="now-ui-icons education_atom"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Tận tâm</h4>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="info info-horizontal py-2">
                    <div className="icon">
                      <i className="now-ui-icons education_atom"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Chu đáo</h4>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="info info-horizontal py-2">
                    <div className="icon">
                      <i className="now-ui-icons education_atom"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Lâu dài</h4>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md="4">
              <div className="d-flex flex-column h-100">
                <div className="tablet-container">
                <Lottie options={defaultAnimationWelcome} height={'auto'} style={{
                    margin: 'initial',
                    marginTop: -15
                  }}/>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TestingTrial;
