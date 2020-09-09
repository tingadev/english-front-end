
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// core components
import HeaderAdmin from "../components/Navbars/HeaderAdmin";
import Footer from "../components/Footer/FooterAdmin";
import Sidebar from "../components/Sidebar/Sidebar";
import FixedPlugin from "../components/FixedPlugin/FixedPlugin.js";
import routes from "../routes.js";

interface DashboardAdminProps {

}

const DashboardAdmin : React.FC<DashboardAdminProps> = () => {

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
          <HeaderAdmin/> ADMIN,
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
