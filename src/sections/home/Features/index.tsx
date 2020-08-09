import React from "react";
// reactstrap components
import {
  Container, Row, Col,
} from "reactstrap";

// core components
interface  FeaturesProps{
  data?: any;
}
const Features : React.FC<FeaturesProps> = ({


}) => {
    return (
        <>
          <div className="features-3">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Simpler. Smarter. Faster.</h2>
                <h4 className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-success icon-circle">
                    <i className="now-ui-icons objects_globe"></i>
                  </div>
                  <h4 className="info-title">Title 1</h4>
                  <p className="description">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-primary icon-circle">
                    <i className="now-ui-icons education_atom"></i>
                  </div>
                  <h4 className="info-title">Title 2</h4>
                  <p className="description">
                    CloudCheckr provides summary and detailed usage statistics
                    for resources.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons tech_watch-time"></i>
                  </div>
                  <h4 className="info-title">Test 3</h4>
                  <p className="description">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        </>
      );
}


export default Features;
