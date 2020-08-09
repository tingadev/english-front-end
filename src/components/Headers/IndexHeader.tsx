/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Button } from "reactstrap";
import { css } from "@emotion/core";
// core components

const IndexHeader = () => {
  const pageHeader = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        if(pageHeader.current){
          pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
        }  
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="purple">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../../assets/img/header-3.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("../../assets/img/now-logo.png")}
            ></img>
            <h1 className="h1-seo mb-0">OMEGA ENGLISH</h1>
            <h5 className="mt-0 p-0">Since 2013</h5>
            <Button className="rounded-pill bg-green font-12 px-5 mb-10">Giới Thiệu</Button>
          </div>
          <div
          style={{
              position: 'absolute',
              left: '50%',
              bottom: '14%',
              transform: 'translate(-50%, -50%)',
          }}
        >


          <div className="d-flex items-center justify-content-center">
              <div className="mr-2">
                <h2 className="mb-2">180.900</h2>
                <p>TỔNG LƯỢT ĐĂNG KÝ</p>
              </div>
              <div className="ml-2">
                <h2 className="mb-2">1800</h2>
                <p>ĐĂNG KÝ HÔM NAY</p>
              </div>
            </div>


          </div>
            
          
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
