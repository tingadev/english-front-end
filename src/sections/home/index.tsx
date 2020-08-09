import React from "react";
import TestingTrial from "./TestingTrial";
// reactstrap components
import {
  Container,
} from "reactstrap";

// core components
interface  HomePageProps{

}
const HomePage : React.FC<HomePageProps> = ({


}) => {
    return (
        <>
          <div className="section section-basic" id="home-page">
            <Container>
                <TestingTrial/>
            </Container>
          </div>
        </>
      );
}


export default HomePage;
