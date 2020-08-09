import React from "react";
// reactstrap components
import {
  Container, Row, Col,
} from "reactstrap";

// core components
interface  TestingTrialProps{

}
const TestingTrial : React.FC<TestingTrialProps> = ({


}) => {
    return (
        <>
          <div className="features-5">
          <Container>
            <Row>
              <Col md="5">
                <h2 className="title">Why do we choose Omega?</h2>
                <div className="info info-horizontal">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons location_world"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Hundreds of Test</h4>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons sport_user-run"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Easy to Use</h4>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons ui-2_time-alarm"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Fast</h4>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="7">
                <div className="tablet-container">
                  <img
                    alt="..."
                    src={require("../../../assets/img/4772.jpg")}
                  ></img>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        </>
      );
}


export default TestingTrial;
