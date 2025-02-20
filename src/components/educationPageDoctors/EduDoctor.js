import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import Doctor1 from '../educationPageDoctors/doctors-1.jpg';
import Doctor2 from '../educationPageDoctors/doctors-2.jpg';
import Doctor3 from '../educationPageDoctors/doctors-3.jpg';
import Doctor4 from '../educationPageDoctors/doctors-4.jpg';

// Doctor data
const doctorsData = [
  {
    id: 1,
    name: "Walter White",
    specialty: "Chief Medical Officer",
    description: "Explicabo voluptatem mollitia et repellat qui dolorem quasi.",
    image: Doctor1,
  },
  {
    id: 2,
    name: "Sarah Jhonson",
    specialty: "Anesthesiologist",
    description: "Aut maiores voluptates amet et quis praesentium qui senda para.",
    image: Doctor2,
  },
  {
    id: 3,
    name: "William Anderson",
    specialty: "Cardiology",
    description: "Quisquam facilis cum velit laborum corrupti fuga rerum quia.",
    image: Doctor3,
  },
  {
    id: 4,
    name: "Amanda Jepson",
    specialty: "Neurosurgeon",
    description: "Dolorum tempora officiis odit laborum officiis et et accusamus.",
    image: Doctor4,
  },
];

const EduDoctor = () => {
  return (
    <section id="doctors" className="doctors section py-5">
      <div className="container text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Doctors
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </motion.p>
      </div>

      <div className="container mt-4">
        <div className="row gy-4">
          {doctorsData.map((doctor, index) => (
            <div className="col-lg-6 col-md-6" key={doctor.id}>
              <motion.div
                className="card p-4 shadow border-0 mx-auto"
                style={{ maxWidth: "500px" }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="d-flex align-items-center">
                  {/* Doctor Image */}
                  <motion.img
                    src={doctor.image}
                    alt={doctor.name}
                    className="rounded-circle shadow me-3"
                    style={{ width: "150px", height: "150px", objectFit: "cover" }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  />

                  {/* Doctor Details */}
                  <div>
                    <h5 className="fw-bold text-dark mb-0">{doctor.name}</h5>
                    <p className="text-muted mb-1">{doctor.specialty}</p>
                    <p className="text-muted small mb-2">{doctor.description}</p>

                    {/* Social Icons */}
                    <div className="social">
                      <i className="bi bi-twitter"></i>
                      <i className="bi bi-facebook"></i>
                      <i className="bi bi-instagram"></i>
                      <i className="bi bi-linkedin"></i>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EduDoctor;
