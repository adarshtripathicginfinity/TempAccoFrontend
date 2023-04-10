import React from "react";
import "./Step5.css";
import alert from "../../images/alert.svg";

const Step5 = () => {
  return (
    <div className="container-fluid d-flex align-content-center justify-content-center p-4">
      <div className="hello">
        <div className="row ">
          <div className="mb-1">
            <p
              className="my-0 mhead"
              style={{
                color: "#626262",
                font: "Lato",
                fontSize: "16px",
                padding: "0px",
              }}
            >
              Step 5
            </p>
          </div>
          <div>
            <p className="mt-1 mb-2 p_color my-0 heading">
              Contact Information
            </p>
          </div>
        </div>

        <hr />

        <form>
          <div className="row mb-4">
            <div className="col mb-3">
              <p className="my-0 subhead">
                Preferred days and time to contact you
              </p>
            </div>
            <div className="">
              <div className="d-flex">
                <button className="pgbutn">
                  <p className="ms-1 my-1">Mon-Fri</p>
                </button>
                <button className="d-flex flatbtn mx-3">
                  <p className="my-0">Weekends</p>
                </button>
                <button className="d-flex flatbtn">
                  <p className="my-0">All Days</p>
                </button>
              </div>

              <div className="d-flex mt-3">
                <input type="time" name="" id="" className="form-control" placeholder=""/>
                <input type="time" name="" id="" className="form-control mx-4"/>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="d-flex">
              <div className="mb-3">
                <p className="my-0 subhead">Landlord/House owner details</p>
              </div>
              <div className=" mx-2 mb-3">
                <p className="my-0 subheado">(Optional)</p>
              </div>
            </div>

            <div className="row mb-4  mt-1">
              <div
                className="col-12 d-flex"
                style={{ backgroundColor: "#E3F3FC", borderRadius: "4px" }}
              >
                <img src={alert} alt="" className="img2" />
                <p className="mb-2 mt-2 p_color">
                  Please provide this information after your landlord’s consent.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p className="p_input">Name of your Landlord/House owner</p>
              <input
                type="text"
                placeholder="John Doe"
                className="form-control"
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p className="p_input mt-4" >Contact Number</p>
              <input
                type="text"
                placeholder="0987654321"
                className="form-control"
              />
            </div>
          </div>

          <div className="row">
            <div
              className="d-flex justify-content-end"
              style={{ marginTop: "150px" }}
            >
              <button className="d-flex imgButn mx-4">
                <div className="ms-1 my-1">
                  <p>Previous</p>
                </div>
              </button>
              <button className="border-0 butn">Save & Next</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step5;
