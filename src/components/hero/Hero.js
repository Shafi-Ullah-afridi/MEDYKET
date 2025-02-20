import React from "react";
import heroImage from "../hero/doctor-removebg-preview.png"; // Adjust the path to your image

const Hero = () => {
  return (
    <div className="container-fluid py-5" style={{ color: "#000f20" }}>
      <div className="row align-items-center ps-4  flex-md-row">
        {/* Left Side: Text Content */}
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-4 fw-bold">
            Consult Your <br />
            <span className="text-primary">Dental Health</span> <br />
            Issue
          </h1>
          <p className="lead text-muted">
            Lorem ipsum dolor sit amet consectetur. Tincidunt eu purus risus dolor pharetra
            <br />
            tristique pulvinar. Purus id aliquet dolor odio venenatis imperdiet urna.
          </p>
          <button className="btn btn-primary btn-lg">Schedule a call</button>
          <p className="mt-3">
            We are able to restore your <span className="text-primary">dental health issue</span>
          </p>
        </div>

        {/* Right Side: Image and Card */}
        <div className="col-md-6 position-relative text-center">
          <img
            src={heroImage}
            alt="Dental Health Consultation"
            className="img-fluid w-75"
          />

          {/* Card */}
          <div
            className="card mt-3 mt-md-0 position-relative position-md-absolute bottom-0 start-0 mb-4 ms-4 mx-auto opacity-75"
            style={{ maxWidth: "250px" }}
          >
            {/* Card Header */}
            <div className="card-header p-2">
              <h5 className="card-title mb-0" style={{ fontSize: "0.8rem" }}>
                Available Doctors
              </h5>
              <p className="card-text text-muted" style={{ fontSize: "0.75rem" }}>
                Select Doctor
              </p>
            </div>

            {/* Card Body */}
            <div className="card-body p-2">
              {/* Doctor 1 */}
              <div className="d-flex align-items-center mb-2">
                <img
                  src={heroImage} // Replace with actual avatar image
                  alt="Hester Howard"
                  className="rounded-circle me-2"
                  width="30"
                  height="30"
                />
                <div>
                  <h6 className="mb-0" style={{ fontSize: "0.75rem" }}>Hester Howard</h6>
                  <p className="text-muted mb-0" style={{ fontSize: "0.75rem" }}>New Jersey</p>
                </div>
              </div>

              {/* Doctor 2 */}
              <div className="d-flex align-items-center mb-2">
                <img
                  src={heroImage} // Replace with actual avatar image
                  alt="Kristin Watson"
                  className="rounded-circle me-2"
                  width="30"
                  height="30"
                />
                <div>
                  <h6 className="mb-0" style={{ fontSize: "0.75rem" }}>Kristin Watson</h6>
                  <p className="text-muted mb-0" style={{ fontSize: "0.75rem" }}>New Jersey</p>
                </div>
              </div>

              {/* Book Appointment Button */}
              <button className="btn btn-primary w-100 btn-sm mt-2">Book Appointment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
