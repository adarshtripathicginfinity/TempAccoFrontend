import React from "react";
import logo from "../../images/CG-Logo_GoldNavy1.svg";
import vector from "../../images/Vector.svg";
import { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [firstname, setFirstName] = useState("");
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);

  const [lastname, setLastName] = useState("");
  const [isLastNameValid, setIsLastNameValid] = useState(false);

  const [adhaarNumber, setAdhaarNumber] = useState("");
  const [isAdhaarNumberValid, setIsAdhaarNumberValid] = useState(false);

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);

  const [uniname, setUniName] = useState("");
  const [isUniNameValid, setIsUniNameValid] = useState(false);



  const handleFirstNameChange = (event) => {
    const { value } = event.target;
    setFirstName(value);
    setIsFirstNameValid(value.length === 0 || /^[a-zA-Z\s]{2,50}$/.test(value));
  };

  const handleLastNameChange = (event) => {
    const { value } = event.target;
    setLastName(value);
    setIsLastNameValid(/^[a-zA-Z\s]{2,50}$/.test(value));
  };

  const handleAdhaarNumberChange = (event) => {
    const { value } = event.target;
    const formattedValue = value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ");
    if (formattedValue.trim().length <= 14) {
      setAdhaarNumber(formattedValue.trim());
    }
    setIsAdhaarNumberValid(
      formattedValue.length === 0 || formattedValue.trim().length < 14
        ? false
        : true
    );
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setIsEmailValid(
      value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) || value.length === 0
        ? true
        : false
    );
  };

  const handlePhoneNumberChange = (event) => {
    const phoneNumber = event.target.value;
    if (phoneNumber.trim().length <= 10) {
      setPhoneNumber(phoneNumber.trim());
    }
    setIsPhoneNumberValid(
      phoneNumber.length === 0 || phoneNumber.trim().length < 10 ? false : true
    );
  };

  const handleUniNameChange = (event) => {
    const { value } = event.target;
    setUniName(value);
    setIsUniNameValid(value.length === 0 || /^[a-zA-Z\s]{2,20}$/.test(value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      isFirstNameValid &&
      isLastNameValid &&
      isAdhaarNumberValid &&
      isEmailValid &&
      isPhoneNumberValid &&
      isUniNameValid
    ) {
      const data  = {
        firstname : firstname,
        lastname : lastname,
        adhaarNumber : adhaarNumber,
        email : email, 
        phoneNumber : phoneNumber,
        uniname : uniname,
      }

      console.log(data);

      // setFirstName('');
      // setIsFirstNameValid(false);

      // setLastName('');
      // setIsLastNameValid(false);

      // setAdhaarNumber('');
      // setIsAdhaarNumberValid(false);

      // setEmail('');
      // setIsEmailValid(false);

      // setPhoneNumber('');
      // setIsPhoneNumberValid(false);

      // setUniName('');
      // setIsUniNameValid(false);

      window.location.href=`/verified`;
    } else {

      setTimeout(function() {
        // Code to execute after 5 seconds
        window.alert("Invalid data");
      }, 8000);
    }
  };

  return (
    <div className="container-fluid d-flex align-content-center justify-content-center p-4 mt-5">
      <div className="inner_div mt-4">
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

        <form onSubmit={handleSubmit}>
          <div className="row mb-4">
            <div className="col-sm-6 ">
              <p className="space">First Name</p>
              <input
                type="text"
                className={!isFirstNameValid && firstname ? "form-control input-error" : "form-control"}
                placeholder="First"
                value={firstname}
                onChange={handleFirstNameChange}
                required
              />
              {!isFirstNameValid && firstname && (
                <span style={{ color: "red", fontSize: "12px" }}>
                Must be more than 1 character
                </span>
              )}
            </div>
            <div className="col-sm-6">
              <p className="space">Last Name</p>
              <input
                type="text"
                className={!isLastNameValid && lastname ? "form-control input-error" : "form-control"}
                placeholder="Last"
                value={lastname}
                onChange={handleLastNameChange}
                required
              />
              {!isLastNameValid && lastname && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Must be more than 1 characters
                </span>
              )}
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-12">
              <p className="space">Aadhar Card Number</p>
              <input
                type="text"
                className={!isAdhaarNumberValid && adhaarNumber ? "form-control input-error" : "form-control"}
                placeholder="---- ---- ----"
                value={adhaarNumber}
                onChange={handleAdhaarNumberChange}
                required
              />
              {!isAdhaarNumberValid && adhaarNumber && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Invalid adhaar number
                </span>
              )}
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-12">
              <p className="space">University Email ID</p>
              <input
                type="email"
                className={!isEmailValid && email ? "form-control input-error" : "form-control"}
                placeholder="Enter Your University Email ID"
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
          </div>

          <div className="row mb-4  mt-1 hello">
            <div
              className="col-12 d-flex"
              style={{ backgroundColor: "#E3F3FC", borderRadius: "4px" }}
            >
              <img src={vector} alt="" className="img2" />
              <p className="mb-2 mt-2 alerttext">
                This email account will be used to send password instructions
              </p>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-12">
              <p className="space">Contact Number</p>
              <input
                type="tel"
                className={!isPhoneNumberValid && phoneNumber ? "form-control input-error" : "form-control"}
                placeholder="Enter Contact Number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required
              />
              {!isPhoneNumberValid && phoneNumber && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Invalid Phone Number
                </span>
              )}
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-12">
              <p className="space">University / College</p>
              <input
                type="text"
                className={!isUniNameValid && uniname ? "form-control input-error" : "form-control"}
                placeholder="Enter your University/College"
                value={uniname}
                onChange={handleUniNameChange}
                required
              />
              {!isUniNameValid && uniname && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Must be more than 2 characters
                </span>
              )}
            </div>
          </div>

          <div className="row nspace mb-4">
            <div className="col-12 butn">
              <button className=" py-1 px-3">Sign Up</button>
            </div>
          </div>
        </form>

        <div className="row mb-4">
          <a className="alink" href="/Login">
            Already have an account Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
