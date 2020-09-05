import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/home";
import ReactPage from "./pages/react";

// Components
import Layout from "./components/constructs/layout";

// Config
import { PATHNAMES } from "./config/pathnames";
import GlobalStyle from "./config/global-style";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path={PATHNAMES.HOME}>
            <Home />
          </Route>
          <Route exact path={PATHNAMES.REACT}>
            <ReactPage />
          </Route>
          {/* <Route path={PATHNAMES.VUE}>
          <Vue />
        </Route>
        <Route path={PATHNAMES.ANGULAR}>
          <Angular />
        </Route> */}
        </Switch>
      </Layout>
    </Router>
  );
}
