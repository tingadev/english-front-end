/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Navbar, Row, Col } from "reactstrap";
interface BrandProps {
  hiddenBrand?: boolean;
}
const Brand: React.FC<BrandProps> = ({
  hiddenBrand
}) => {
  return (
    <>
      <Navbar className={`fixed-top ${hiddenBrand ? 'd-none' : ''}`}>
        <Container>
          <Row className="w-100">
            <Col md="2">
              <img
                width="100px"
                className="img"
                src={require("../../assets/img/logo.png")}
                alt="..."
              />
            </Col>
            <Col md="4">
              <div className="d-flex align-items-center text-white h-100">
                <div className="mr-2">
                  <h2 className="mb-2">180.900</h2>
                  <p>TỔNG LƯỢT ĐĂNG KÝ</p>
                </div>
                <div className="ml-2">
                  <h2 className="mb-2">1800</h2>
                  <p>ĐĂNG KÝ HÔM NAY</p>
                </div>
              </div>
            </Col>
            <Col md="6">
            <div className="d-flex align-items-center text-white h-100">
                <div className="mr-5 text-center">
                <p className="font-weight-bold font-12">HOTLINE</p> <br/> <a href="tel:+84866644423" className="font-weight-bold font-12">08.666.444.23</a> 
                </div>
              <div className="ml-auto">
                <p className="font-13 font-weight-bold">”Học thật, thi thật”</p>
                <br/>
                <p>CEO  Ths Dương Thái Lực</p>
              </div>
              <div className="ml-auto">
                <img width="120px" src={require("../../assets/img/teacher.png")} alt=""/>
              </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default Brand;
