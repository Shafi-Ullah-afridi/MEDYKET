import React from "react";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";

const AppointmentBooking = () => {
  const workingHours = [
    { day: "Mon", time: "7AM - 11PM" },
    { day: "Tue", time: "7AM - 11PM" },
    { day: "Wed", time: "7AM - 11PM" },
    { day: "Thu", time: "7AM - 11PM" },
    { day: "Fri", time: "7AM - 11PM" },
    { day: "Sat", time: "7AM - 11PM" },
    { day: "Sun", time: "7AM - 11PM" },
  ];

  return (
    <Container className="my-5">
      {/* Heading */}
      <h2 className="text-center fw-bold mb-4">Book Appointment</h2>

      <Row className="justify-content-center">
        {/* Working Hours Section */}
        <Col md={5} className="p-4 bg-light rounded shadow">
          <h6 className="text-primary">Working Hours</h6>
          <h4 className="fw-bold">Book Appointment According to the Time Table</h4>
          <Table borderless className="mt-3">
            <tbody>
              {workingHours.map((slot, index) => (
                <tr key={index}>
                  <td className="fw-bold">{slot.day}</td>
                  <td>{slot.time}</td>
                  <td>
                    <Button variant="link" className="text-primary p-0">
                      Book Now
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <p className="text-muted mt-3">
            Time’s not Flexible? <a href="#" className="text-primary fw-bold">Make a Custom Appointment</a>
          </p>
        </Col>

        {/* Booking Form Section */}
        <Col md={5} className="p-4 bg-white rounded shadow">
          <h6 className="text-primary">Appointment</h6>
          <h4 className="fw-bold">Book Your Appointment</h4>
          <Form className="mt-3">
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Name*</Form.Label>
                  <Form.Control type="text" placeholder="First Name" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control type="email" placeholder="email@example.com" required />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Number*</Form.Label>
                  <Form.Control type="tel" placeholder="+1 (547) 546 768" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Date*</Form.Label>
                  <Form.Control type="date" required />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Time*</Form.Label>
              <Form.Control type="time" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Hey there!" />
            </Form.Group>

            <Button variant="primary" className="w-100 fw-bold">
              Book an Appointment
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AppointmentBooking;
