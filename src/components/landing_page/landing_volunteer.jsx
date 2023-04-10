import React from "react";
import Navbar from "./navbar";
import "./landing_volunteer.css";

const landing_volunteer = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row d-flex">
          Home / Nearby Available Accommodation
          {/* <p className='col'>Home</p>
                <p className='col'>/</p>
                <p className='col'>Nearby Available Accommodation</p> */}
        </div>

        <div className="row">
          <p>Nearby Available Accommodation</p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ border: "solid black 1px" }}>
            <div class="input-group">
              <div class="form-outline">
                <input type="search" id="form1" class="form-control" />
                <label class="form-label" for="form1">
                  
                </label>
              </div>
              <button type="button" class="btn btn-primary" style={{width:"auto"}}>
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
          <div
            style={{
              border: "solid black 1px",
              display: "flex",
              justifyContent: "space-between",
              gap: "1%",
            }}
          >
            <p>filter</p>
            <div class="dropdown ">
              <button
                class="btn btn-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select Accomodation Type
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <button
                class="btn btn-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select Distance
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <button
                class="btn btn-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                House Habits
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-around">
          <div className="col-4 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.679789251819!2d77.31854831452182!3d28.579376693236757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45a79d0f4b9%3A0x8865fb53ffb94e5a!2sPinnacle%20Business%20Park!5e0!3m2!1sen!2sin!4v1681135487004!5m2!1sen!2sin"
              width="auto"
              height="auto"
              style={{ border: "0", display: "inline-block" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-8">
            <div className="row row-cols-2">
              <div className="col">div 1</div>
              <div className="col">div 2</div>
              <div className="col">div 3</div>
              <div className="col">div 4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default landing_volunteer;
