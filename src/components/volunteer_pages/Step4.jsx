import React from "react";

const Step4 = () => {
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
              Step 4
            </p>
          </div>
          <div>
            <p className="mt-1 mb-2 p_color my-0 heading">Amenities</p>
          </div>
        </div>

        <hr />

        <form>
          
          <div className="row">
            <div className="mt-4">
              <p className="my-0 subhead">I have access to the following facilities:</p>
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
                <label className="mx-3">Wi-Fi</label>
              </div>
              <div className="mt-3">
                <input
                  type="checkbox"
                  id="music"
                  name="interest"
                  value="music"
                />
                <label className="mx-3">Food</label>
              </div>
              <div className="mt-3">
                <input
                  type="checkbox"
                  id="music"
                  name="interest"
                  value="music"
                />
                <label className="mx-3">Induction</label>
              </div>
              <div className="mt-3">
                <input
                  type="checkbox"
                  id="music"
                  name="interest"
                  value="music"
                />
                <label className="mx-3">AC</label>
              </div>
              <div className="mt-3">
                <input
                  type="checkbox"
                  id="music"
                  name="interest"
                  value="music"
                />
                <label className="mx-3">Geyser</label>
              </div>
              <div className="mt-3">
                <input
                  type="checkbox"
                  id="music"
                  name="interest"
                  value="music"
                />
                <label className="mx-3">Cleanliness</label>
              </div>
              <div className="mt-3">
                <input
                  type="checkbox"
                  id="music"
                  name="interest"
                  value="music"
                />
                <label className="mx-3">Washing Machine</label>
              </div>
              <div className="mt-3">
                <input
                  type="checkbox"
                  id="music"
                  name="interest"
                  value="music"
                />
                <label className="mx-3">Parking (2-wheeler)</label>
              </div>
              <div className="mt-3">
                <input
                  type="checkbox"
                  id="music"
                  name="interest"
                  value="music"
                />
                <label className="mx-3">Parking (4-wheeler)</label>
              </div>
            </fieldset>
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

export default Step4;
