import React from "react";
import { render } from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import config from "./config";
// styles for this kit
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss?v=1.4.0";
import "./assets/demo/demo.css?v=1.4.0";
import "./assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
import "react-notifications-component/dist/theme.css";
// pages for this kit
import routes from "./router.js";
import ReactNotification from "react-notifications-component";
import { setContext } from '@apollo/client/link/context';
const httpLink = createHttpLink({
  uri: config.GRAPHQL_SERVER_URL,
  fetch,
  fetchOptions: {
    credentials: "include",
  }
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const powper = JSON.parse(localStorage.getItem('powper') ?? '{}');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: powper?.tokens?.accessToken ? `${powper.tokens.accessToken}` : "",
    }
  }
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Router >
        <ReactNotification />
        <Switch>
          {routes.map((prop, key) => {
            return (
              <Route exact={prop.exact} path={prop.path} component={prop.component} key={key} />
            );
          })}
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}
render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister(); // for production

serviceWorker.register(); // for local
