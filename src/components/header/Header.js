import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../header/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const searchRef = useRef(null);
  const dropdownRef = useRef(null);

  // Toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle Search Bar
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Close search bar & dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsPagesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-light" style={{ color: "#000f20" }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light container">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <FaBars />
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Main Navigation Links */}
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about-us" },
              { name: "Services", path: "/doctor-services" },
              { name: "Portfolio", path: "/Portfolio" },
              { name: "News", path: "/News" },
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <Link className="nav-link" to={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Pages Dropdown */}
            <li className="nav-item dropdown position-relative" ref={dropdownRef}>
              <button
                className="nav-link dropdown-toggle border-0 bg-transparent"
                onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)}
              >
                Pages
              </button>

              {/* Dropdown Menu */}
              {isPagesDropdownOpen && (
                <ul className="dropdown-menu show position-absolute" style={{ top: "40px", left: 0 }}>
                  {[
                    
                    { name: "Education", path: "/education" }, // Added Education
                  
                  ].map((page, idx) => (
                    <li key={idx}>
                      <Link className="dropdown-item" to={page.path}>
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Search Icon & Search Bar */}
            <li className="nav-item position-relative" ref={searchRef}>
              <button className="nav-link border-0 bg-transparent" onClick={toggleSearch}>
                <FaSearch />
              </button>

              {/* Search Input Field */}
              {isSearchOpen && (
                <div className="position-absolute start-50 translate-middle-x w-100" style={{ top: "40px" }}>
                  <input
                    type="text"
                    className="form-control border-0 border-bottom w-100 text-center"
                    placeholder="Search..."
                    style={{
                      outline: "none",
                      borderBottom: "2px solid #1364C0",
                      boxShadow: "none",
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  />
                </div>
              )}
            </li>

            {/* Book Appointment Button */}
            <li className="nav-item">
              <Link
                className="btn"
                to="/doctor-appointment"
                style={{
                  background: "linear-gradient(to right,#1364C0, #0BA9DC)",
                  color: "white",
                }}
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
