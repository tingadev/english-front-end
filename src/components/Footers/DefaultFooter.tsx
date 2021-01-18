/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

// core components

const DefaultFooter = () => {
  return (
    <>
      <footer className="footer footer-big" data-background-color="black">
            <Container>
              <div className="content">
                <Row>
                  <Col md="4">
                    <h5>About Us</h5>
                    <ul className="links-vertical">
                      <li>
                        <a
                          className="text-muted"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-muted"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-muted"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Presentation
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-muted"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </Col>
                  <Col md="4">
                    <h5>Course</h5>
                    <ul className="links-vertical">
                      <li>
                        <a
                          className="text-muted"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Toeic
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-muted"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          IELTS
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-muted"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Email Marketing
                        </a>
                      </li>
                    </ul>
                  </Col>
                  
                  <Col md="4">
                    <h5>Follow Us</h5>
                    <ul className="social-buttons">
                      <li>
                        <Button
                          className="btn-icon btn-neutral btn-round mr-1"
                          color="twitter"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fab fa-twitter"></i>
                        </Button>
                      </li>
                      <li>
                        <Button
                          className="btn-icon btn-neutral btn-round mr-1"
                          color="facebook"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fab fa-facebook-square"></i>
                        </Button>
                      </li>
                      <li>
                        <Button
                          className="btn-icon btn-neutral btn-round mr-1"
                          color="dribbble"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fab fa-dribbble"></i>
                        </Button>
                      </li>
                      <li>
                        <Button
                          className="btn-icon btn-neutral btn-round mr-1"
                          color="google"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fab fa-google-plus"></i>
                        </Button>
                      </li>
                      <li>
                        <Button
                          className="btn-icon btn-neutral btn-round"
                          color="instagram"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fab fa-instagram"></i>
                        </Button>
                      </li>
                    </ul>
                    <h5>
                      <small>Numbers Don't Lie</small>
                    </h5>
                    <h5>
                      14.521 <small className="text-muted">Studens</small>
                    </h5>
                    <h5>
                      1.423.183{" "}
                      <small className="text-muted">Transactions</small>
                    </h5>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <div className="copyright">
                Copyright © {new Date().getFullYear()} Omega All Rights
                Reserved.
              </div>
            </Container>
          </footer>
    </>
  );
}

export default DefaultFooter;
