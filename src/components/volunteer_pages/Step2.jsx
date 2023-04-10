import React from "react";
import alert from "../../images/alert.svg";
import "./Step2.css";

const Step2 = () => {
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
              Step 2
            </p>

            <p className="mt-1 p_color">Location</p>
          </div>
        </div>

        <hr/>

        <div className="row mb-4  mt-1">
          <div
            className="col-12 d-flex"
            style={{ backgroundColor: "#E3F3FC", borderRadius: "4px" }}
          >
            <img src={alert} alt="" className="img2" />
            <p className="mb-2 mt-2 p_color">
              Your address will not be displayed to others. It will be used to
              calculate approximate distance between office and your residence
            </p>
          </div>
        </div>

        <form>
          <div className="row">
            <div className="col"></div>
          </div>

          <div className="row">
            <div className="col">
              <p className="p_color">Enter additional information</p>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p className="p_color">Locality</p>
              <input type="text" placeholder="" className="form-control" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p className="p_color">Nearest Metro Station</p>
              <input type="text" placeholder="" className="form-control" />
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
              <button className="d-flex imgButn mx-4">
                <div className="ms-1 my-1">
                  <p>Previous</p>
                </div>
              </button>
              <button className="border-0 butn" >Save & Next</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step2;
