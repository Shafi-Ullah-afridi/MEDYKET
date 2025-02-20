import React from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import imageleft from "../patientReviewSlider/feedback.jpg";
import imageright from "../patientReviewSlider/doctors-1.jpg";

const reviews = [
  {
    name: "Mark Brown",
    image: imageright,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At temporibus perspicitatis deserunt quam tempora molestias Lorem ipsum dolor sit amet, consectetur adipiscing elit. At temporibus perspicitatis deserunt quam tempora molestias.",
    rating: 4.5,
    role: "Cancer Patient",
  },
  {
    name: "Lisa Adams",
    image: imageright,
    review:
      "Dolor sit amet, consectetur adipiscing elit. Laudantium dolore reiciendis est, obcaecati molestias fugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. At temporibus perspicitatis deserunt quam tempora molestias.",
    rating: 5,
    role: "Heart Patient",
  },
  {
    name: "John Doe",
    image: imageright,
    review:
      "Sint quos cumque enim laborum dolorem. Inventore facere neque quo! Sit molestias ex voluptatem.Lorem ipsum dolor sit amet, consectetur adipiscing elit. At temporibus perspicitatis deserunt quam tempora molestias.",
    rating: 4,
    role: "Surgery Patient",
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  appendArrows: (arrows) => (
    <div className="d-flex justify-content-end mt-3">{arrows}</div>
  ),
};

// Function to render star rating
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="d-flex">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} className="text-warning me-1" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="text-warning me-1" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} className="text-warning me-1" />
      ))}
    </div>
  );
};

const PatientReviewSlider = () => {
  return (
    <section className="container-fluid px-0">
      <div className="row g-0 align-items-stretch">
        {/* Left Side: Image */}
        <div className="col-md-6">
          <img
            src={imageleft}
            alt="Doctor and Patient"
            className="img-fluid w-100 h-100"
            style={{ objectFit: "cover", height: "100vh" }}
          />
        </div>

        {/* Right Side: Review Slider */}
        <div
          className="col-md-6 text-white p-5 d-flex align-items-center justify-content-center"
          style={{
            background: "linear-gradient(to right,#1364C0, #0BA9DC)",
            height: "100vh",
          }}
        >
          <div className="w-100 h-100 d-flex flex-column justify-content-center">
            <h2 className="mb-4 text-center">
              What Our Happy Patients<br /> Say About Us
            </h2>
            <Slider {...settings}>
              {reviews.map((review, index) => (
                <div key={index} className="text-start px-4 d-flex flex-column justify-content-between">
                  {/* Review Text */}
                  <div>
                    {/* Star Ratings (Left) */}
                    <div className="mb-2">{renderStars(review.rating)}</div>
                    <p className="fs-6 fst-italic">{review.review}</p>
                  </div>

                  {/* Avatar, Name & Role (Below the Card on the Left) */}
                  <div className="d-flex align-items-center mt-3">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="rounded-circle me-3"
                      width="50"
                      height="50"
                    />
                    <div>
                      <h5 className="mb-0">{review.name}</h5>
                      <p className="mb-0">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientReviewSlider;
