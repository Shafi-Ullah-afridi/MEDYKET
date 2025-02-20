import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import bannerImage from "../CTABanner/make-appointment.png"; // Replace with the actual path

const CTABanner = () => {
  return (
    <div className="cta-banner text-white py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Side Text */}
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold">Make Your Dream Smile A Reality!</h2>
            <p>Call Us or Book Your Appointment Today</p>
            <Button variant="light" className="fw-bold px-4 py-2">
              Make An Appointment
            </Button>
          </Col>

          {/* Right Side Image */}
          <Col md={6} className="text-center">
            <img src={bannerImage} alt="Dentist Banner" className="img-fluid" />
          </Col>
        </Row>
      </Container>

      {/* Custom Styles */}
      <style jsx>{`
        .cta-banner {
          background: linear-gradient(90deg, #004aad, #00a8ff);
        }
      `}</style>
    </div>
  );
};

export default CTABanner;
