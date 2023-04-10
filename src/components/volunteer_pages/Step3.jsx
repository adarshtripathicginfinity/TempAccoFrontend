import React from "react";
import "./Step3.css";

const Step3 = () => {
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
              Step 3
            </p>
          </div>
          <div>
            <p className="mt-1 mb-2 p_color my-0 heading">Accommodation Type</p>
          </div>
        </div>

        <hr />

        <form>
          <div className="row mb-4">
            <div className="col mb-3">
              <p className="my-0 subhead">Accommodation Type</p>
            </div>
            <div className="d-flex">
              <button className="pgbutn">
                <p className="ms-1 my-1">PG</p>
              </button>
              <button className="d-flex flatbtn mx-3">
                <p className="my-0">Flat</p>
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col mb-3">
              <p className="my-0 subhead">Sharing Type</p>
            </div>
            <div className="d-flex">
              <button className="d-flex flatbtn ">
                <p className="my-0">Single</p>
              </button>
              <button className="d-flex flatbtn mx-3">
                <p className="my-0">Double</p>
              </button>
              <button className="d-flex flatbtn ">
                <p className="my-0">Triple</p>
              </button>
            </div>
          </div>

          <div className="row">
            <div className="mt-4">
              <p className="my-0 subhead">House Habit Permitted</p>
            </div>

            <fieldset>
              <div className="mt-3">
                <input
                  type="checkbox"
                  id="coding"
                  name="interest"
                  value="coding"
                  className=""
                />
                <label className="mx-3">Non Veg</label>
              </div>
              <div className="mt-3">
                <input
                  type="checkbox"
                  id="music"
                  name="interest"
                  value="music"
                />
                <label className="mx-3">Smoking</label>
              </div>
              <div className="mt-3">
                <input
                  type="checkbox"
                  id="music"
                  name="interest"
                  value="music"
                />
                <label className="mx-3">Drinking</label>
              </div>
            </fieldset>
          </div>

          <div className="row">
            <div className="d-flex justify-content-end" style={{marginTop:"150px"}}>
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

export default Step3;
