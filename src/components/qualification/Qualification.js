import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTrophy, FaBriefcase, FaGraduationCap } from "react-icons/fa"; // Icons for sections

const Qualification = () => {
  const educationData = [
    {
      university: "University of Toronto",
      duration: "Jan, 2016 to Jan, 2021",
    },
    {
      university: "University of Ontario",
      duration: "Jan, 2016 to Jan, 2021",
    },
  ];

  const experienceData = [
    {
      company: "Bachelor of Medicine & Surgery (MBBS)",
      description: "Performing advanced surgeries and mentoring junior doctors.",
    },
    {
      company: "Bachelor of Science and Engineering",
      description: "Provided medical consultation and developed healthcare strategies.",
    },
  ];

  const awardsData = [
    {
      title: "ASCB Public Service Award",
      description: "Recognized for contributions to public healthcare research.",
      rank: 1,
    },
    {
      title: "Albert B. Sabin Gold Medal",
      description: "Awarded for excellence in vaccine research and development.",
      rank: 2,
    },
  ];

  return (
    <div className="container py-5"style={{background:"#F1F9FC"}}>
      <div className="text-center mb-4">
        <p className="text-primary fw-semibold">SKILLS</p>
        <h1 className="fw-bold">My Qualification & Awards</h1>
      </div>

      {/* Single Row Section */}
      <div className="row d-flex flex-wrap justify-content-center"style={{background:"#F1F9FC"}}>
        {/* Education Section */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="bg-white rounded shadow-sm p-4 h-100">
            <h4 className="text-secondry d-flex align-items-center pb-2 border-bottom">
              <FaGraduationCap className="me-2" /> Education
            </h4>
            {educationData.map((edu, index) => (
              <div key={index} className="mt-3 pb-2 border-bottom">
                <h5 className="">{edu.university}</h5>
                <p className="text-muted ">{edu.duration}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="bg-white rounded shadow-sm p-4 h-100">
            <h4 className="text-secondry d-flex align-items-center pb-2 border-bottom">
              <FaBriefcase className="me-2" /> Job Experience
            </h4>
            {experienceData.map((exp, index) => (
              <div key={index} className="mt-3 pb-2 border-bottom">
                <h5 className="">{exp.company}</h5>
                <p className="text-muted">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="bg-white rounded shadow-sm p-4 h-100">
            <h4 className="text-secondry d-flex align-items-center pb-2 border-bottom">
              <FaTrophy className="me-2" /> Awards & Achievements
            </h4>
            {awardsData.map((award, index) => (
              <div key={index} className="d-flex align-items-center mt-3 pb-2 border-bottom">
                <div className="me-3">
                  <FaTrophy size={40} className="text-warning" />
                </div>
                <div className="flex-grow-1">
                  <h5 className="">{award.title}</h5>
                  <p className="text-muted">{award.description}</p>
                </div>
                <div className="bg-light rounded-circle text-dark d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                  <span className="fw-bold">{award.rank}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
