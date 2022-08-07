import { Mail } from "@mui/icons-material";
import { Switch } from "@mui/material";
import React from "react";
import { Route, Router } from "react-router-dom";
import "./App.css";
import EmailList from "./EmailList";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/null">
              <EmailList />
              <Mail />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
