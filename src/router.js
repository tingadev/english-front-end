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
import Index from "./views/Index";
import NucleoIcons from "./views/NucleoIcons";
import LoginPage from "./views/examples/LoginPage";
import LandingPage from "./views/examples/LandingPage";
import AboutUs from "./sections/AboutUs";
import DashboardAdmin from "./views/admin/layouts/Admin";
import { SignUp } from "./sections/SignUp";
import { ProfilePage } from "./sections/User/Profile";

var dashRoutes = [
  {
    path: "/home",
    name: "Dashboard",
    icon: "",
    component: Index,
    layout: "/",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "design_image",
    component: NucleoIcons,
    layout: "/",
  },
  {
    path: "/login-page",
    name: "Login",
    icon: "",
    component: LoginPage,
    layout: "/",
  },
  {
    path: "/landing-page",
    name: "Landing",
    icon: "ui-1_bell-53",
    component: LandingPage,
    layout: "/",
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "",
    component: ProfilePage,
    layout: "/",
  },
  {
    path: "/about-toiec",
    name: "About Toiec",
    icon: "",
    component: AboutUs,
    layout: "/",
  },
  {
    path: "/signup",
    name: "Sign Up",
    icon: "",
    component: SignUp,
    layout: "/",
  },
  {
    path: "/admin",
    name: "Dashboard Admin",
    icon: "",
    component: DashboardAdmin,
    layout: "/admin",
  },
];
export default dashRoutes;
