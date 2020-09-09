
import React from "react";
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
