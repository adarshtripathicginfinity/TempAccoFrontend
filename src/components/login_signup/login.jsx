import React, { useState } from "react";
import "./login.css";
// import "./cgSignup.css";
// import arrow from "../../images/back_arrow.png";
import cglogo from "../../images/cgLogo.png";
import building from "../../images/cgBuilding.svg";
import styled from "styled-components";
// import Login_mb from "../mobile_view/login_mb";

const MainContainer = styled.div.attrs({ className: "main-container" })`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LeftContainer = styled.div.attrs({ className: "left-container" })`
  background-color: #002c3f;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 540px) {
    display: none;
  }
`;
const RightContainer = styled.div.attrs({ className: "right-container" })`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const BuildingImage = styled.img.attrs({ className: "img-fluid" })`
  position: relative;
  bottom: 4%;
`;

function Login() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setIsEmailValid(
      value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) || value.length === 0
        ? true
        : false
    );
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
    setIsPasswordValid(/^[a-zA-Z0-9\s]{6,50}$/.test(value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isEmailValid && isPasswordValid)
     {
      const data  = {
        email : email, 
        password : password
      }
      
      console.log(data);
      window.alert("email id and password submitted");
      setEmail("");
        setIsEmailValid(false);

        setPassword("");
        setIsPasswordValid(false);
 } 
 else 
 {
        window.alert("Invalid email id or password!");

        setEmail("");
        setIsEmailValid(false);

        setPassword("");
        setIsPasswordValid(false);
    }
  };

  return (
    <MainContainer
      className="container main-container "
      style={{ padding: "0" }}
    >
      <div className="row main-row " style={{ height: "552px" }}>
        {window.innerWidth >= 576 && (
          <LeftContainer
            className="col-6 left-container d-none-md"
            style={{ boxShadow: "0px 4px 10px rgba(46, 72, 87, 0.18)" }}
          >
            <div className="row" style={{ width: "85%" }}>
              <div className="col-12 text-center">
                <BuildingImage
                  className="img-fluid"
                  src={building}
                  style={{}}
                />
                <p className="find-accomo">Find Your Accommodation</p>
                <p className="description">
                  This is an online platform that helps other to find
                  accommodation
                </p>
              </div>
            </div>
          </LeftContainer>
        )}
        <RightContainer
          className="col-12 col-sm-6 right-container "
          style={{ boxShadow: "0px 4px 10px rgba(46, 72, 87, 0.18)" }}
        >
          <div className="row" style={{ padding: "0 4%" }}>
            <div className="col-12 text-center mb-4 mt-5">
              <img className="img-fluid" src={cglogo} />
              <h4 className="main-heading mt-3">
                Let's Find Your Accommodation
              </h4>
            </div>
          </div>
          <div className="row" style={{ width: "100%" }}>
            <div className="col-12" style={{ padding: "0" }}>
              <div className="container w-100 g-2">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label for="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className={
                        !isEmailValid && email
                          ? "form-control input-error"
                          : "form-control"
                      }
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                    {!isEmailValid && email && (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        Invalid email id
                      </span>
                    )}
                  </div>

                  <div>
                    <label for="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className={
                        !isPasswordValid && password
                          ? "form-control input-error"
                          : "form-control"
                      }
                      value={password}
                      onChange={handlePasswordChange}
                      required
                    />
                    {!isPasswordValid && password && (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        Invalid password
                      </span>
                    )}
                  </div>
                  <button className="btn btn-warning w-100 mt-3 ">Login</button>
                </form>
              </div>
            </div>
            {/* <button className="btn btn-warning w-100 mt-3 ">Login</button> */}
          </div>
          <div className="container text-center" style={{ marginTop: "5%" }}>
            <a href="#" className="link-primary">
              Forgot Password?
            </a>
          </div>
          <div
            className="w-100 text-center"
            style={{
              backgroundColor: "#E9ECEB",
              position: "relative",
              top: "3%",
            }}
          >
            <p style={{ color: "black" }}>First time user? Sign Up </p>
            <a href="#" className="link-primary">
              CGI Employees
            </a>
            <span> | </span>
            <a href="#" className="link-primary">
              CGI Interns
            </a>
          </div>
        </RightContainer>
      </div>
    </MainContainer>
  );
}

export default Login;
