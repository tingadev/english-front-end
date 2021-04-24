import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// core components
import HeaderAdmin from "../components/Navbars/HeaderAdmin";
import Footer from "../components/Footer/FooterAdmin";
import Sidebar from "../components/Sidebar/Sidebar";
import FixedPlugin from "../components/FixedPlugin/FixedPlugin.js";
import routes from "../routes.js";
import { MeContext, notMe } from "../../../hooks/useMe";
import { useMeQuery } from "../../../schema/schema";

interface DashboardAdminProps {}

const DashboardAdmin: React.FC<DashboardAdminProps> = () => {
  const mainPanel = React.useRef<HTMLDivElement>(null);
  const [backgroundColor, setBackgroundColor] = React.useState("brand");
  const handleColorClick = (color: any) => {
    setBackgroundColor(color);
  };
  const meQuery = useMeQuery();
  let me = meQuery.data?.me;
  if (!me) {
    me = notMe;
  }

  return (
    <MeContext.Provider value={me}>
      <div className="wrapper">
        <Sidebar routes={routes} backgroundColor={backgroundColor} />
        <div className="flex-column d-flex main-panel vh-100" ref={mainPanel}>
          <HeaderAdmin />
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
          <Footer className="mt-auto" fluid />
        </div>
        <FixedPlugin
          bgColor={backgroundColor}
          handleColorClick={(e: any) => {
            handleColorClick(e.value);
          }}
        />
      </div>
    </MeContext.Provider>
  );
};

export default DashboardAdmin;
