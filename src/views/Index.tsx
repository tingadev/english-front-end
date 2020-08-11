import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar";
import IndexHeader from "../components/Headers/IndexHeader";

// sections for this page
// import Images from "./index-sections/Images.js";
// import BasicElements from "./index-sections/BasicElements.js";
// import Navbars from "./index-sections/Navbars.js";
// import Tabs from "./index-sections/Tabs.js";
// import Pagination from "./index-sections/Pagination.js";
// import Notifications from "./index-sections/Notifications.js";
// import Typography from "./index-sections/Typography.js";
// import Javascript from "./index-sections/Javascript.js";
// import Carousel from "./index-sections/Carousel.js";
// import NucleoIcons from "./index-sections/NucleoIcons.js";
// import CompleteExamples from "./index-sections/CompleteExamples.js";
// import SignUp from "./index-sections/SignUp.js";
// import Examples from "./index-sections/Examples.js";
// import Download from "./index-sections/Download.js";
import HomePage from "../sections/home";
import DefaultFooter from "../components/Footers/DefaultFooter";
import Brand from "../components/Brand/";

const Index = () => {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [topFixed, setTopFixed] = React.useState("120px");
  const [hiddenBrand, setHiddenBrand] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    // window.scrollTo(0, 0);
    // document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 179 ||
        document.body.scrollTop > 179
      ) {
        setNavbarColor("");
        setTopFixed("0px")
        setHiddenBrand(true);
      } else if (
        document.documentElement.scrollTop < 200 ||
        document.body.scrollTop < 200
      ) {
        setNavbarColor("navbar-transparent");
        setTopFixed("120px")
        setHiddenBrand(false);
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <>
      <Brand hiddenBrand={hiddenBrand}/>
      <IndexNavbar navbarColor={navbarColor} topFixed={topFixed}/>
      <div className="wrapper">
        <IndexHeader/>
        <div className="main">
          <HomePage/>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default Index;
