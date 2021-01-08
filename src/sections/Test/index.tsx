
import React from "react";
import TestCategory from "./TestCategory";
import BreadcrumbMain from "../../components/Breadcrumb";
import { NavbarContext } from "../../components/Navbars/NavbarContext";

const Test: React.FC = () => {
  const { setNavbarColor } = React.useContext(NavbarContext);
  React.useEffect(() => {
    setNavbarColor("bg-brand");
  }, []);
  return (
    <div className="noHeader pb-5">
      <BreadcrumbMain />
      <TestCategory />
    </div>
  );
};

export default Test;
