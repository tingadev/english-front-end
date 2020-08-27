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
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import { Route, Switch, Redirect } from "react-router-dom";

// core components
import DemoNavbar from "../components/Navbars/DemoNavbar.js";
import Footer from "../components/Footer/Footer.js";
import Sidebar from "../components/Sidebar/Sidebar";
import FixedPlugin from "../components/FixedPlugin/FixedPlugin.js";


import "../../assets/css/bootstrap.min.css";
import "../assets/scss/now-ui-dashboard.scss?v1.4.0";
import "../assets/css/demo.css";


import routes from "../routes.js";

var ps: { destroy: () => void; };

class Dashboard extends React.Component {
  state = {
    backgroundColor: "blue",
  };
  mainPanel = React.createRef<HTMLDivElement>();
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      if(this.mainPanel.current){
        ps = new PerfectScrollbar(this.mainPanel.current);
        // document.body.classList.toggle("perfect-scrollbar-on");
      }
      
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      // document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e: any) {
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      if(document.scrollingElement){
        document.scrollingElement.scrollTop = 0;
      }
      if(this.mainPanel.current){
        this.mainPanel.current.scrollTop = 0;
      }
      
    }
  }
  handleColorClick = (color: any) => {
    this.setState({ backgroundColor: color });
  };
  render() {
    return (
      <div className="wrapper">
        <Sidebar
          {...this.props}
          routes={routes}
          backgroundColor={this.state.backgroundColor}
        />
        <div className="main-panel" ref={this.mainPanel}>
          <DemoNavbar {...this.props} />
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
          bgColor={this.state.backgroundColor}
          handleColorClick={this.handleColorClick}
        />
      </div>
    );
  }
}

export default Dashboard;
