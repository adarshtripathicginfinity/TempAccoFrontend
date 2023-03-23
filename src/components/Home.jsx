import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Login_signup/Signup";
import Internverified from "./Login_signup/Internverified";

const Home = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signup/>} />
          <Route path="/varified" element={<Internverified/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default Home;
