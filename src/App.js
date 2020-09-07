import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./styles.css";

// Pages
import Home from "./pages/home";
import SubMenuPage from "./pages/sub-menu";
import CodeSnippetPage from "./pages/code-snippet-page";
import LoginPage from "./pages/login";

// Components
import Layout from "./components/constructs/layout";

// Config
import { PATHNAMES } from "./config/pathnames";

export default function App() {
  let location = useLocation();
  return (
    <Layout>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={800}>
          <Switch location={location}>
            <Route exact path={PATHNAMES.LOGIN}>
              <LoginPage />
            </Route>
            <Route exact path={PATHNAMES.HOME}>
              <Home />
            </Route>
            <Route exact path={PATHNAMES.REACT}>
              <SubMenuPage page="react" />
            </Route>
            <Route
              path={
                `${PATHNAMES.REACT}/:id` ||
                `${PATHNAMES.VUE}/:id` ||
                `${PATHNAMES.ANGULAR}/:id`
              }
            >
              <CodeSnippetPage />
            </Route>

            <Route path={PATHNAMES.VUE}>
              <SubMenuPage page="vue" />
            </Route>
            <Route path={PATHNAMES.ANGULAR}>
              <SubMenuPage page="angular" />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  );
}
