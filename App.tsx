import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "./layouts/Home/HomePage";
import FriendsPage from "./layouts/Friends/FriendsPage";
import HRPage from "./layouts/HR/HRPage";
import RomPage from "./layouts/Rom/RomPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/friends">
          <FriendsPage />
        </Route>
        <Route path="/hr">
          <HRPage />
        </Route>
        <Route path="/rom">
          <RomPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
