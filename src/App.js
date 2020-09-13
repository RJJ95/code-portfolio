import React from "react";
import { Switch, Route } from "react-router-dom";

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
  return (
    <Layout>
      <Switch>
        <Route exact path={PATHNAMES.LOGIN}>
          <LoginPage />
        </Route>
        <Route exact path={PATHNAMES.HOME}>
          <Home />
        </Route>
        <Route exact path={PATHNAMES.REACT}>
          <SubMenuPage page="react" />
        </Route>
        <Route path={`/snippets/:framework/:category/:id`}>
          <CodeSnippetPage />
        </Route>

        <Route path={PATHNAMES.VUE}>
          <SubMenuPage page="vue" />
        </Route>
        <Route path={PATHNAMES.ANGULAR}>
          <SubMenuPage page="angular" />
        </Route>
      </Switch>
    </Layout>
  );
}
