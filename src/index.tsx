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
  Switch,
  Redirect,
  Route,
  HashRouter,
} from "react-router-dom";

// styles for this kit
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss?v=1.4.0";
import "./assets/demo/demo.css?v=1.4.0";
import "./assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
import 'react-notifications-component/dist/theme.css'
// pages for this kit
import routes from "./router.js";
import ReactNotification from 'react-notifications-component'
const httpLink = createHttpLink({
  uri: process.env.NODE_ENV === 'production' ? process.env.API_GRAPHQL_SERVER : process.env.API_GRAPHQL_SERVER,
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
      <HashRouter basename='/'>
      <ReactNotification/>
          <Switch>
          {routes.map((prop, key) => {
              return (
                <Route
                  path={prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}
            <Redirect to="/home" />
            <Redirect from="/" to="/home" />
            
          </Switch>
      </HashRouter>
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
