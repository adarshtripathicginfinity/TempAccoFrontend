import React, { useState } from "react";
import "./cgSignup.css";
import arrow from "../../images/back_arrow.png";
import cglogo from "../../images/cgLogo.png";
import building from "../../images/cgBuilding.svg";

export default function CgSignup() {
  const [otp, setOpt] = useState("");
  const [isOtpValid, setIsOptValid] = useState(false);

  const handleOtp = (event) => {
    const data = event.target.value;
    const formattedData = data.replace(/\D/g, "").replace(/(.{1})/g, "$1 ");
    if (formattedData.trim().length <= 11) {
      setOpt(formattedData.trim());
    }

    setIsOptValid(data.length === 0 || data.trim().length < 10 ? false : true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isOtpValid) {

      const data = {
        otp: otp.replace(/\s/g, ''),
      }
      console.log(data);
      setOpt("");
      setIsOptValid(false);
    }
    else
    {
      window.alert('Invalid OTP!');
      setOpt("");
      setIsOptValid(false);
    }
  };

  return (
    <div className="container main-container " style={{ padding: "0" }}>
      <div className="row main-row " style={{ height: "552px" }}>
        <div
          className="col-6 left-container"
          style={{ boxShadow: "0px 4px 10px rgba(46, 72, 87, 0.18)" }}
        >
          <div className="row" style={{ width: "85%" }}>
            <div className="col-12 text-center">
              <img
                className="img-fluid"
                src={building}
                style={{ position: "relative", bottom: "4%" }}
              />
              <p className="find-accomo">Find Your Accommodation</p>
              <p className="description">
                This is an online platform that helps other to find
                accommodation
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-6  right-container "
          style={{ boxShadow: "0px 4px 10px rgba(46, 72, 87, 0.18)" }}
        >
          <div className="row">
            <div className="col-12 text-center mb-4 mt-5">
              <img className="img-fluid" src={cglogo} />
              <h4 className="main-heading mt-3">
                Let's Find Your Accommodation
              </h4>
            </div>
          </div>
          <div className="row">
            <div
              className="col-12  "
              style={{ width: "80%", marginLeft: "10%" }}
            >
              <a>
                <img src={arrow} />{" "}
                <span className="mail">email@email.com</span>
              </a>
              <h4 className="mt-4 enter-code">Enter Code</h4>
              <p className="code-msg">
                Please type the Six digit code we have sent on your Microsoft
                account.
              </p>
              <form style={{ marginBottom: "4%" }} onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="otp"
                  className=""
                  placeholder="* * * * * *"
                  style={{ width: "100%" }}
                  value={otp}
                  onChange={handleOtp}
                />
                {!isOtpValid && otp && (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    OTP must be 6 digit
                  </span>
                )}
                <button className="btn btn-warning w-100 mt-3">Verify</button>
              </form>
            </div>
          </div>
          <div className="container text-center" style={{ marginTop: "5%" }}>
            <a className="link-primary">Use Another Account</a>
          </div>
        </div>
      </div>
    </div>
  );
}
