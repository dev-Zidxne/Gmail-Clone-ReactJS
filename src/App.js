import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Mail from "./Mail";
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
          <Routes>
            <Route path="/mail" element={<Mail />} />

            <Route path="/" element={null} />
          </Routes>
          <EmailList />
        </div>
      </div>
    </Router>
  );
}

export default App;
