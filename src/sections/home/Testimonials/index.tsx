import React from "react";
// reactstrap components
import {
  Container,
  Row,
  Col,
  CardBody,
  CardFooter,
  CardTitle,
  Card, 
  Carousel, 
  CarouselItem
} from "reactstrap";

// core components
// interface TestimonialsProps {}

const items = [
  {
    src: "0",
    altText: "",
    caption: "",
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src={require("../../../assets/img/eva.jpg")}
            ></img>
          </a>
        </div>
        <CardBody>
          <p className="card-description text-brand font-weight-semi">
            "Mình là Mr Phương Anh - GV Khoa QT Du lịch - NH - KS - Trường ĐH Hutech, mình đã được học Toeic nhiều nơi, nhưng kết quả đều không như mong đợi, nhưng từ khi biết đến trung tâm và đặc biệt được học với Thầy Lực, ngoại ngữ của mình được cải thiện, thầy có những phương pháp học Toeic rất hay, mới, sáng tạo. Mình cám ơn thầy đã giúp đỡ mình. Chúc thầy mạnh khỏe, công tác tốt. Trân trọng."
          </p>
          <CardTitle tag="h3">Học trò Phương Anh</CardTitle>
          <CardFooter>
            <h6 className="category text-info">Trưởng Phòng Kinh Doanh Cty TNHH Du lịch Lữ hành Viet Phoneix</h6>
          </CardFooter>
        </CardBody>
      </Card>
    ),
  },
  {
    src: "1",
    altText: "",
    caption: "",
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src={require("../../../assets/img/eva.jpg")}
            ></img>
          </a>
        </div>
        <CardBody>
          <p className="card-description text-brand font-weight-semi">
            "When we are no longer able to change a situation - we are
            challenged to change ourselves. Spread love everywhere you go. Let
            no one ever come to you without leaving happier. Problems are not
            stop signs, they are guidelines."
          </p>
          <CardTitle tag="h3">Alexa Hailey</CardTitle>
          <CardFooter>
            <h6 className="category text-info">Human Resource Director</h6>
          </CardFooter>
        </CardBody>
      </Card>
    ),
  },
];
const Testimonials: React.FC<{}> = ({}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  return (
      
  <div className="testimonials-2">
  <Container>
  <h2 className="title text-center">
  Học viên nói về {" "}
                <span className="text-primary d-block">POWPER ENGLISH</span>
              </h2>
    <Row>
      <Col md="12">
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          {items.map((item) => {
            return (
              <CarouselItem
                onExiting={onExiting}
                onExited={onExited}
                key={item.src}
              >
                {item.content}
              </CarouselItem>
            );
          })}
          <a
            className="carousel-control-prev"
            data-slide="prev"
            href="#pablo"
            onClick={(e) => {
              e.preventDefault();
              previous();
            }}
            role="button"
          >
            <i className="now-ui-icons arrows-1_minimal-left"></i>
          </a>
          <a
            className="carousel-control-next"
            data-slide="next"
            href="#pablo"
            onClick={(e) => {
              e.preventDefault();
              next();
            }}
            role="button"
          >
            <i className="now-ui-icons arrows-1_minimal-right"></i>
          </a>
        </Carousel>
      </Col>
    </Row>
  </Container>
  <div
          className="team-3 section-image"
          style={{
            backgroundImage: "url(" + require("../../../assets/img/bg21.jpg") + ")",
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Đội ngũ Học Thuật</h2>
                <h4 className="description">
               
                </h4>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto" lg="7" xl="6">
                <Card className="card-profile">
                  <Row>
                    <Col md="5">
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img w-100"
                            src={require("../../../assets/img/teacher.png")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h4">Mr. Dương Thái Lực</CardTitle>
                        <h6 className="category text-primary text-left">CEO</h6>
                        <p className="card-description text-brand">
                          Happiness resides not in possessions, and not in gold,
                          happiness dwells in the soul...
                        </p>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col className="ml-auto mr-auto" lg="7" xl="6">
                <Card className="card-profile">
                  <Row>
                    <Col md="5">
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img w-100"
                            src={require("../../../assets/img/linh_profile.png")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h4">Ms. Lê Thảo Cẩm Linh</CardTitle>
                        <h6 className="category text-primary text-left">
                          Teacher
                        </h6>
                        <p className="card-description text-brand">
                          Today you are you! That is truer than true! There is
                          no one alive who is you-er than you!..
                        </p>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              
            </Row>
          </Container>
        </div>
</div>
  );
};

export default Testimonials;
