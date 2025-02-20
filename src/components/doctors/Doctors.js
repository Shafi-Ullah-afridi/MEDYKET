import React, { useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import doctorImage from '../doctors/doctor-removebg-preview.png';

// Sample doctors data
const doctorsData = [
  { name: "Dr. Roberto", specialization: "Oral Surgeon", img: doctorImage },
  { name: "Dr. Jenny R", specialization: "Oral Surgeon", img: doctorImage },
  { name: "Dr. Veronika", specialization: "Orthodontist", img: doctorImage },
];

// Doctors Component
const Doctors = () => {
  const sliderRef = useRef(null);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: dots => (
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <ul style={{ margin: "0px", padding: "0px" }}> {dots} </ul>
      </div>
    ),
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <motion.div
      className="container py-5 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="fw-bold">Meet Our Specialist</h1>
      <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
        Lorem ipsum dolor sit amet consectetur. Eu metus augue posuere congue suspendisse phasellus sit sit.
      </p>

      {/* Slider Component */}
      <Slider ref={sliderRef} {...settings}>
        {doctorsData.map((doctor, index) => (
          <div key={index} className="px-3">
            <motion.div
              className="card border-0 shadow-sm p-3"
              style={{ background: "#E7F3FF" }}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={doctor.img}
                alt={doctor.name}
                className="card-img-top mx-auto"
                style={{ width: "150px", height: "150px" }}
              />
              <div className="card-body">
                <h5 className="fw-bold">{doctor.name}</h5>
                <p className="text-primary">{doctor.specialization}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default Doctors;