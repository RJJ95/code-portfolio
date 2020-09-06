import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/home";
import SubMenuPage from "./pages/sub-menu";

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
          <Route path={PATHNAMES.REACT}>
            <SubMenuPage page="react" />
          </Route>
          <Route path={PATHNAMES.REACT}>
            <SubMenuPage page="vue" />
          </Route>
          <Route path={PATHNAMES.REACT}>
            <SubMenuPage page="angular" />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
