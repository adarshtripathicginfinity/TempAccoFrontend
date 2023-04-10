import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Login_signup/Signup";
import Internverified from "./Login_signup/Internverified";
import Step1 from "./volunteer_pages/Step1";
import Step2 from "./volunteer_pages/Step2";
import Step3 from "./volunteer_pages/Step3";
import Step4 from "./volunteer_pages/Step4";
import Step5 from "./volunteer_pages/Step5";
import Landing_volunteer from './landing_page/landing_volunteer';
import Landing_page from './landing_page/landing_page';


const Home = () => {
  return (
    <>
      <Router>
        <Routes>
        {/* <Route path="/" element={<Login />} />
          <Route path="/otp" element={<CgSignup />}/> */}
          {/* <Route path="/internsignup" element={<InternSignup />}/> */}
          <Route path="/registration" element={<Signup />}/>
          <Route path="/verified" element={<Internverified />}/>
          {/* <Route path="/mblogin" element={<Login_mb />}/> */}
          <Route path="/landingpage" element={<Landing_page />} />
          <Route path="/volunteer" element={<Landing_volunteer />} />
          {/* <Route path="/page1" element={<Page_1 />} /> */}
          <Route path="/step1" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
          {/* <Route path="/step3flat" element={<Step3flat />} /> */}
          <Route path="/step4" element={<Step4 />} />
          <Route path="/step5" element={<Step5 />} />
        </Routes>
      </Router>
    </>
  );
};

export default Home;
