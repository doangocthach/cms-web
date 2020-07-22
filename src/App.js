import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import WorkspaceManager from "./components/WorkspaceManager";
import SideBar from "./components/SideBar";
import UserList from "./components/UserList";
import "./App.css";
function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/">
          <div className="body-wrapper">
            <SideBar />
            <WorkspaceManager />
            <UserList />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
