/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import {
  useRouteMatch,
} from "react-router-dom";
import TestCategory from "./TestCategory";
import BreadcrumbMain from "../../components/Breadcrumb";
interface TestProps {
  setNavbarColor: (val: string) => void;
}
const Test: React.FC<TestProps> = ({ setNavbarColor }) => {
  
  const match = useRouteMatch();
  React.useEffect(() => {
    setNavbarColor("bg-brand");
  }, []);
  return (
    <div className="noHeader pb-5">
        <BreadcrumbMain/>
        <TestCategory />
    </div>
  );
};

export default Test;
