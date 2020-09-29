import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar";

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
import { Route, Switch, useRouteMatch, match } from "react-router-dom";
import Test from "../sections/Test";
import IndexHeader from "../components/Headers/IndexHeader";
interface LayoutProps {
  children?: any;
}

const Index: React.FC<LayoutProps> = ({ children }) => {
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
        document.documentElement.scrollTop > 109 ||
        document.body.scrollTop > 109
      ) {
        setNavbarColor("bg-brand")
        setTopFixed("0px");
        setHiddenBrand(true);
      } else if (
        document.documentElement.scrollTop < 110 ||
        document.body.scrollTop < 110
      ) {
        // setNavbarColor("navbar-transparent")
        setTopFixed("120px");
        setHiddenBrand(false);
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  const match = useRouteMatch();
  return (
    <>
      <Brand hiddenBrand={hiddenBrand} navbarColor={navbarColor}/>
      <IndexNavbar navbarColor={navbarColor} topFixed={topFixed} />
      <div className="wrapper">
          <Switch>
            <Route path={`${match.path}/toiec/:link`}>
              <Test setNavbarColor={setNavbarColor}/>
            </Route>
            <Route path={match.path}>
              <IndexHeader />
              <HomePage />
            </Route>
          </Switch>
        </div>
        <DefaultFooter />
    </>
  );
};

export default Index;
