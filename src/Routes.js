import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav/nav";
import Main from "./pages/main";
import Detail from "./pages/detail";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Main} />
        <Switch>
          <Route path="/detail" component={Detail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
