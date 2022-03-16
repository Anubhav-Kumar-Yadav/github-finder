import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GithubState from "./context/github/GithubState";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import User from "./components/users/User";
import About from "./components/pages/About";

import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <GithubState>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:username" element={<User />} />
          </Routes>
        </GithubState>

        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
