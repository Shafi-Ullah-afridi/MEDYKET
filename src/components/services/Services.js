import React, { useRef } from "react";
import Slider from "react-slick";
import heroImage from "../services/hero.png";
import neurology from "../services/our-service-item-1.png";
import cardiology from "../services/cardiology.png";
import eye from "../services/eye.png";
import dental from "../services/dental.png";
import { motion } from "framer-motion"; // Import Framer Motion
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Sample services data
const servicesData = [
  { title: "Cardiology", desc: "We are here to help you whenever you feel ill, but keeping you healthy.", img: cardiology },
  { title: "Neurology", desc: "We are here to help you whenever you feel ill, but keeping you healthy.", img: neurology },
  { title: "Dental Surgery", desc: "We are here to help you whenever you feel ill, but keeping you healthy.", img: dental },
  { title: "Eye", desc: "We are here to help you whenever you feel ill, but keeping you healthy.", img: eye },
];

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <button className="custom-arrow mx-2" onClick={onClick}>
    <FaArrowRight />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="custom-arrow mx-2" onClick={onClick}>
    <FaArrowLeft />
  </button>
);

const Services = () => {
  const sliderRef = useRef(null);

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <motion.div 
      className="container py-5"
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
    >
      <div className="text-center mb-4">
        <p className="text-danger fw-semibold">Services</p>
        <h1 className="fw-bold" style={{ color: "#000f20" }}>Provides Our Best Services</h1>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {servicesData.map((service, index) => (
          <motion.div 
            key={index} 
            className="px-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="card shadow-sm border-0 text-center p-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="d-flex justify-content-center mb-3"
                whileHover={{ scale: 1.1 }}
              >
                <img src={service.img} alt={service.title} className="rounded-circle" width="60" height="60" />
              </motion.div>
              <h2 className="h5">{service.title}</h2>
              <p className="text-muted">{service.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </Slider>

      {/* Arrow Controls */}
      <div className="d-flex justify-content-center mt-3">
        <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
        <NextArrow onClick={() => sliderRef.current.slickNext()} />
      </div>
    </motion.div>
  );
};

export default Services;
