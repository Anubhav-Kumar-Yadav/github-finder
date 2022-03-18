import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GithubLayout from "./components/layout/GithubLayout";
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
        <Routes>
          <Route element={<GithubLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/user/:username" element={<User />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
