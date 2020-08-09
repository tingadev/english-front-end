import React from "react";
// reactstrap components
import { Container, Row, Col, CardTitle, CardBody, Card, Button } from "reactstrap";

// core components
interface PricingProps {}
const Pricing: React.FC<PricingProps> = ({}) => {
  return (
    <>
      <div className="pricing-4" id="pricing-4">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <h2 className="title">Pick the best plan for you</h2>
              <h4 className="description">
                You have Free Unlimited Test and Premium Support on each
                package.
              </h4>
              <div className="section-space"></div>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Card className="card-pricing card-plain">
                <CardBody>
                  <h5 className="category">Silver</h5>
                  <div className="icon icon-danger">
                    <i className="now-ui-icons tech_headphones"></i>
                  </div>
                  <CardTitle tag="h3">
                    <small>$</small>
                    10
                  </CardTitle>
                  <ul>
                    <li>1000 Tests</li>
                    <li>10 Videos</li>
                    <li>50 Audio</li>
                  </ul>
                  <Button
                    className="btn-round"
                    color="danger"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Get it Now
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-pricing text-black border border-black">
                <CardBody>
                  <h5 className="category">Gold</h5>
                  <div className="icon icon-warning">
                    <i className="now-ui-icons tech_headphones"></i>
                  </div>
                  <CardTitle tag="h3">
                    <small>$</small>
                    40
                  </CardTitle>
                  <ul>
                    <li>10000 Tests</li>
                    <li>100 Videos</li>
                    <li>500 Audio</li>
                  </ul>
                  <Button
                    className="btn-neutral disabled btn-round"
                    color="warning"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Current Plan
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-pricing card-plain">
                <CardBody>
                  <h5 className="category">Diamond</h5>
                  <div className="icon icon-primary">
                    <i className="now-ui-icons tech_headphones"></i>
                  </div>
                  <CardTitle tag="h3">
                    <small>$</small>
                    20
                  </CardTitle>
                  <ul>
                    <li>Unlimited Tests</li>
                    <li>1000 Videos</li>
                    <li>500 Audio</li>
                  </ul>
                  <Button
                    className="btn-round"
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Upgrade Plan
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Pricing;
