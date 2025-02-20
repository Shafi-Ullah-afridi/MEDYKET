import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaTooth, FaHeartbeat, FaChild, FaSyringe, FaFlask, FaSmile } from "react-icons/fa";
import servicesImage from "../servicesSection/dental.png"; // Replace with actual path

const services = [
  { icon: <FaTooth size={30} className="text-primary" />, title: "General Dental Care" },
  { icon: <FaHeartbeat size={30} className="text-primary" />, title: "General Dentistry" },
  { icon: <FaFlask size={30} className="text-primary" />, title: "Holistic Dentistry" },
  { icon: <FaSyringe size={30} className="text-primary" />, title: "Oral Surgery" },
  { icon: <FaSmile size={30} className="text-primary" />, title: "Teeth Whitening" },
  { icon: <FaChild size={30} className="text-primary" />, title: "Children’s Dentistry" },
];

// Animation Variants
const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
};

const fadeCenter = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.3 } },
};

const ServiceSection = () => {
  return (
    <Container className="text-center my-5">
      {/* Heading */}
      <p className="text-uppercase text-primary">— Service We Provide —</p>
      <h2 className="fw-bold">What We Provide</h2>

      <Row className="align-items-center mt-4">
        {/* Left Side Services */}
        <Col md={4} className="text-start">
          {services.slice(0, 3).map((service, index) => (
            <motion.div key={index} className="mb-4" variants={fadeLeft} initial="hidden" animate="visible">
              {service.icon}
              <h5 className="mt-2">{service.title}</h5>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt dolore.
              </p>
              <a href="#" className="text-dark fw-bold text-decoration-none">
                Read More →
              </a>
            </motion.div>
          ))}
        </Col>

        {/* Center Image */}
        <Col md={4} className="d-flex justify-content-center">
          <motion.img src={servicesImage} alt="Dental Services" className="img-fluid" variants={fadeCenter} initial="hidden" animate="visible" />
        </Col>

        {/* Right Side Services */}
        <Col md={4} className="text-start">
          {services.slice(3).map((service, index) => (
            <motion.div key={index} className="mb-4" variants={fadeRight} initial="hidden" animate="visible">
              {service.icon}
              <h5 className="mt-2">{service.title}</h5>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt dolore.
              </p>
              <a href="#" className="text-dark fw-bold text-decoration-none">
                Read More →
              </a>
            </motion.div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceSection;
