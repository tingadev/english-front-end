import React from "react";
// reactstrap components
import { Container, Row, Col, CardBody, CardFooter, CardTitle, Card } from "reactstrap";

// core components
interface TestimonialsProps {}
const Testimonials: React.FC<TestimonialsProps> = ({}) => {
  return (
    <>
      <div className="cd-section" id="testimonials">
        <div
          className="testimonials-1 section-image"
          style={{
            backgroundImage: "url(" + require("../../../assets/img/header-3.jpg") + ")",
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">What students say about Omega?</h2>
                <h4 className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-testimonial">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("../../../assets/img/eva.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <p className="card-description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                  </CardBody>
                  <div className="icon icon-info">
                    <i className="fa fa-quote-right"></i>
                  </div>
                  <CardFooter>
                    <CardTitle tag="h4">Michael Elijah</CardTitle>
                    <p className="category">@michaelelijah</p>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("../../../assets/img/julie.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <p className="card-description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                  </CardBody>
                  <div className="icon icon-info">
                    <i className="fa fa-quote-right"></i>
                  </div>
                  <CardFooter>
                    <CardTitle tag="h4">Olivia Harper</CardTitle>
                    <p className="category">@oliviaharper</p>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("../../../assets/img/ryan.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <p className="card-description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                  </CardBody>
                  <div className="icon icon-info">
                    <i className="fa fa-quote-right"></i>
                  </div>
                  <CardFooter>
                    <CardTitle tag="h4">James Logan</CardTitle>
                    <p className="category">@jameslogan</p>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
