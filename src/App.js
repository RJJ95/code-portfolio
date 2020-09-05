import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/home";

// Config
import { PATHNAMES } from "./config/pathnames";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path={PATHNAMES.HOME}>
          <Home />
        </Route>
        {/* <Route path={PATHNAMES.REACT}>
          <React />
        </Route>
        <Route path={PATHNAMES.VUE}>
          <Vue />
        </Route>
        <Route path={PATHNAMES.ANGULAR}>
          <Angular />
        </Route> */}
      </Switch>
    </Router>
  );
}
