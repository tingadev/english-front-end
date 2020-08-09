import React from "react";
// reactstrap components
import {
  Container,
} from "reactstrap";

// core components
interface  TestingTrialProps{

}
const TestingTrial : React.FC<TestingTrialProps> = ({


}) => {
    return (
        <>
          <div className="section section-basic" id="basic-elements">
            <Container>
              <h3 className="title">Testing Trial</h3>
              
            </Container>
          </div>
        </>
      );
}


export default TestingTrial;
