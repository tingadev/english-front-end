/*!

=========================================================
* Now UI Dashboard React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// javascript plugin used to create scrollbars on windows
// reactstrap components
import { Route, Switch, Redirect } from "react-router-dom";

// core components
import DemoNavbar from "../components/Navbars/DemoNavbar.js";
import Footer from "../components/Footer/Footer.js";
import Sidebar from "../components/Sidebar/Sidebar";
import FixedPlugin from "../components/FixedPlugin/FixedPlugin.js";



import routes from "../routes.js";

interface DashboardAdmin {

}

const DashboardAdmin : React.FC<DashboardAdmin> = () => {

  const mainPanel = React.useRef<HTMLDivElement>(null);
  const [backgroundColor, setBackgroundColor] = React.useState('brand')
  const handleColorClick = (color: any) => {
    setBackgroundColor(color);
  };
    return (
      <div className="wrapper">
        <Sidebar
          routes={routes}
          backgroundColor={backgroundColor}
        />
        <div className="main-panel" ref={mainPanel}>
          <DemoNavbar/>
          <Switch>
            {routes.map((prop, key) => {
              return (
                <Route
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <Footer fluid />
        </div>
        <FixedPlugin
          bgColor={backgroundColor}
          handleColorClick={(e: any) => {
            handleColorClick(e.value)
          }}
        />
      </div>
    );
}

export default DashboardAdmin;
