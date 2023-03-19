import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Login_signup/Signup";
import Login from "./Login_signup/Login";

const Home = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </>
  );
};

export default Home;
