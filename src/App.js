import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import WorkspaceManager from "./components/WorkspaceManager";
function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <WorkspaceManager />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
