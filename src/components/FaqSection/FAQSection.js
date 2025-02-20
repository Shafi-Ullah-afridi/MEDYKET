import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import faqImage from "../FaqSection/faq-background.jpg"; // Replace with the actual path

const FAQSection = () => {
  return (
    <Container className="text-center my-5">
      {/* Heading */}
      <p className="text-uppercase text-primary">— FAQ —</p>
      <h2 className="fw-bold">Customers Frequently Ask</h2>

      <Row className="align-items-center mt-4">
        {/* FAQ Section */}
        <Col md={6} className="text-start">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <strong>How can I improve my oral hygiene?</strong>
              </Accordion.Header>
              <Accordion.Body>
                Everyone’s needs are different, so have a chat with your dentist about how often you need to have your teeth checked by them based on the condition of your mouth, teeth, and gums.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>When should I change my toothbrush?</Accordion.Header>
              <Accordion.Body>
                Dentists recommend changing your toothbrush every 3-4 months or sooner if the bristles become frayed.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>What to do if I need medication?</Accordion.Header>
              <Accordion.Body>
                Always consult your dentist or healthcare provider before taking any medication related to dental health.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>How do I know my teeth are healthy?</Accordion.Header>
              <Accordion.Body>
                Regular dental checkups, good oral hygiene, and a balanced diet are key indicators of healthy teeth.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>

        {/* Video Section */}
        <Col md={6} className="d-flex justify-content-center position-relative">
          <div className="position-relative">
            <img src={faqImage} alt="FAQ Video" className="img-fluid rounded" />
            <div className="position-absolute top-50 start-50 translate-middle">
              <FaPlay className="text-primary bg-white p-3 rounded-circle shadow" size={50} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQSection;
