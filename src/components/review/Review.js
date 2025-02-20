import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion"; // Import Framer Motion
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

// Sample testimonials data
const testimonials = [
  {
    name: "Julia Jenny",
    role: "Patient",
    review:
      "Office ipsum you must be muted. Die view contribution looking floor. All day playing call fit great wider globalize.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "John Williams",
    role: "Patient",
    review:
      "Beef pretend individual could able at chime. Goto brainstorming but what algorithm box reality vec.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
  },
  {
    name: "Emma Watson",
    role: "Patient",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel felis ac nunc auctor scelerisque.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 4,
  },
  {
    name: "Michael Brown",
    role: "Patient",
    review:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5,
  },
];

// Review Component
const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: (dots) => (
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <ul style={{ margin: "0px", padding: "0px" }}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <motion.div 
      className="container py-5 text-center"
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
    >
      <h2 className="fw-bold">What Our Clients Say About Us</h2>

      {/* Slider Component */}
      <Slider {...settings} className="mt-4">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index} 
            className="px-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="card border-0 shadow p-4 position-relative"
              style={{ maxWidth: "500px", margin: "0 auto" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="position-absolute top-0 end-0 p-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <FaStar key={i} className="text-warning" />
                ))}
              </motion.div>
              <FaQuoteLeft className="text-secondary fs-1 mb-3" />
              <p className="text-muted">{testimonial.review}</p>

              <div className="d-flex align-items-center mt-3">
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-circle me-3"
                  style={{ width: "50px", height: "50px" }}
                  whileHover={{ scale: 1.1 }}
                />
                <div className="text-start">
                  <h6 className="fw-bold mb-0">{testimonial.name}</h6>
                  <p className="text-muted mb-0">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default Review;
