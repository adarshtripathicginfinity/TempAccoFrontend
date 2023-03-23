import React from "react";
import logo from "../../images/CG-Logo_GoldNavy1.svg";
import vector from "../../images/Vector.svg";
import Tick from "../../images/circle.svg";
import "./Signup.css";

const Internverified = () => {
  return (
    <div className="container-fluid p-4 mt-3">
      <div className="inner_div2 ">

        <div className="row mb-4">
          <div>
            <div className="d-flex justify-content-center">
              <img src={logo} alt="" />
            </div>
            <div className="d-flex justify-content-center mt-3">
              <p className="heading-name">Let’s Find Your Accommodation</p>
            </div>
          </div>
        </div>

        <div className="row tick d-flex align-content-center justify-content-center">
          <img src={Tick} alt="" />
        </div>

        <div className="row">
          <p>Registration Successful</p>
        </div>

        <div className="row mb-4 mt-1 ">
          <div className="col-12 d-flex" style={{ backgroundColor: "#E3F3FC", borderRadius: "4px" }}>
            <img src={vector} alt="" className="img2" />
            <p className="mb-2 mt-2 alerttext">
              An email has been sent to your account containing password
              instructions.
            </p>
          </div>
        </div>

        <div className="row nspace mb-4">
          <div className="col-12 butn">
            <button className=" py-1 px-3">Continue</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Internverified;
