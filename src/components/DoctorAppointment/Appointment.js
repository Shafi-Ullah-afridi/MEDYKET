import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Appointment = () => {
  return (
    <div className="container py-5" >
      <h6 className="text-primary text-center">APPOINTMENT</h6>
      <h2 className="fw-bold text-center">Make An Appointment</h2>

      <div className=" p-4 rounded mt-4 shadow-sm"style={{background:"#F1F9FC"}}>
        <form>
          <div className="row g-3">
            {/* Name Input */}
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Write your name..." />
            </div>

            {/* Phone Input */}
            <div className="col-md-6">
              <label className="form-label">Phone</label>
              <input type="text" className="form-control" placeholder="Write your phone number..." />
            </div>

            {/* Select Service Dropdown */}
            <div className="col-md-6">
              <label className="form-label">Select Service</label>
              <select className="form-select">
                <option>Select services</option>
                <option>General Consultation</option>
                <option>Dental Checkup</option>
                <option>Cardiology</option>
              </select>
            </div>

            {/* Select Packages Dropdown */}
            <div className="col-md-6">
              <label className="form-label">Select Packages</label>
              <select className="form-select">
                <option>Select Packages</option>
                <option>Basic</option>
                <option>Premium</option>
                <option>VIP</option>
              </select>
            </div>

            {/* Date Input */}
            <div className="col-md-6">
              <label className="form-label">Select Date</label>
              <input type="date" className="form-control" />
            </div>

            {/* Email Input */}
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Write your email address..." />
            </div>

            {/* Submit Button */}
            <div className="text-center mt-4">
              <button type="submit" className="btn btn-primary px-5">
                Book Appointment
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
