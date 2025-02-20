import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NotFoundPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center bg-light">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3">Oops! Page Not Found</h2>
      <p className="text-muted">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="btn btn-primary">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
