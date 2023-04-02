import React from "react";
import alert from "../../images/alert.svg";
import camera from "../../images/Camera.svg";
import "./Step1.css";

const Step1 = () => {
  const imgHandle = () => {};

  return (
    <div className="container-fluid d-flex align-content-center justify-content-center p-4">
      <div className="hello">
        <div className="row">
          <div>
            <p
              className=""
              style={{
                color: "#626262",
                font: "Lato",
                fontSize: "16px",
                padding: "0px",
              }}
            >
              Step 1
            </p>

            <p className="mt-1 p_color">Personal Information</p>
          </div>
        </div>

        <form>
          <div className="row">
            <div className="col">
              {/* <span class="dot" style={{}}></span> */}
            </div>

            <div className="col">
              <p className="p_color mb-1">John Doe</p>
              <p className="p_color">johndoe@example.com</p>
              {/* <input type="file" /> */}
              <button onClick={imgHandle} className="d-flex imgButn">
                <div className="me-2 d-flex align-items-baseline">
                  <img src={camera} />
                </div>
                <div className="ms-1">
                  <p className="">Upload Image</p>
                </div>
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p className="p_color">CGI ID</p>
              <input
                type="text"
                placeholder="Enter your CGI ID"
                className="form-control"
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p className="p_color">Contact No.</p>
              <input
                type="number"
                placeholder="**********"
                className="form-control"
              />
            </div>
          </div>

          <div className="row ">
            <div className="d-flex justify-content-between">
              <div>
                <p className="p_color" style={{width:'fit-content'}}>
                  Accommodations are currently 
                  available near me
                </p>
              </div>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="d-flex justify-content-between">
              <div>
                <p className="p_color">I am looking for a roommate</p>
              </div>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="d-flex justify-content-between">
              <div>
                <p className="p_color">I am looking for a flatmate</p>
              </div>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
          </div>

          <div className="row mb-4  mt-1">
            <div
              className="col-12 d-flex"
              style={{ backgroundColor: "#E3F3FC", borderRadius: "4px" }}
            >
              <img src={alert} alt="" className="img2" />
              <p className="mb-2 mt-2 p_color">
                Flat-mate indicate having a separate room and Roommate indicate
                sharing same room with other
              </p>
            </div>
          </div>

          <div className="row">
            <div className="d-flex justify-content-end">
              <button className="border-0 butn">Save & Next</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step1;
