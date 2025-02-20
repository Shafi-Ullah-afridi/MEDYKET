import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5" style={{ background: "linear-gradient(to right,#1364C0, #0BA9DC)"}}>
      <div className="container">
        <div className="row">
          {/* MEDYKET Section */}
          <div className="col-md-3">
            <h4 className="fw-bold">MEDYKET</h4>
            <p>
              Sed ut perspiciatis unde omnis nerror sit voluptatem accusitum dolorem tium totam rem aperam eaque ipsa quae ab illose inntore vertatus.
            </p>
          </div>

          {/* Our Links Section */}
          <div className="col-md-3">
            <h5>Our Links</h5>
            <ul className="list-unstyled">
              <li>Partners</li>
              <li>About Us</li>
              <li>Career</li>
              <li>Reviews</li>
              <li>Terms & Conditions</li>
              <li>Help</li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div className="col-md-3">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Project</li>
              <li>Our Team</li>
              <li>Latest Blog</li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="col-md-3">
            <h5>Subscribe</h5>
            <p>Subscribe to our latest newsletter to get news about upcoming sales.</p>
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Enter your email" />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <p className="mb-0">Copyright © 2024 Meddygol. All Rights Reserved.</p>
          <div className="d-flex justify-content-center gap-3 mt-2">
            <a href="/privacy" className="text-light text-decoration-none">Privacy</a>
            <a href="/terms" className="text-light text-decoration-none">Terms</a>
            <a href="/sitemap" className="text-light text-decoration-none">Sitemap</a>
            <a href="/help" className="text-light text-decoration-none">Help</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
