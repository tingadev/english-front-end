import React from "react";
import { render } from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  ApolloLink,
} from "@apollo/client";
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

// styles for this kit
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss?v=1.4.0";
import "./assets/demo/demo.css?v=1.4.0";
import "./assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
// pages for this kit
import Index from "./views/Index";
import NucleoIcons from "./views/NucleoIcons";
import LoginPage from "./views/examples/LoginPage";
import LandingPage from "./views/examples/LandingPage";
import ProfilePage from "./views/examples/ProfilePage";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
  fetch,
  fetchOptions: {
    credentials: "include",
  },
});

const client = new ApolloClient({
  link: ApolloLink.from([httpLink]),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
          <Switch>
            <Route path="english-front-end/home">
              <Index/>
            </Route>
            <Route path="english-front-end/nucleo-icons">
              <NucleoIcons />
            </Route>
            <Route path="english-front-end/landing-page">
              <LandingPage/>
            </Route>
            <Route path="english-front-end/profile-page">
              <ProfilePage/>
            </Route>
            <Route path="english-front-end/login-page">
              <LoginPage/>
            </Route>
            <Redirect to="english-front-end/home" />
            <Redirect from="/" to="english-front-end/home" />
          </Switch>
      </BrowserRouter>
      ,
    </ApolloProvider>
  );
}
render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister(); // for production

serviceWorker.register(); // for local
