import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// Pages
import Home from "./pages/Home";
import Education from "./pages/Education";
import ServicesPage from "./pages/ServicesPage";
import AppointmentPage from "./pages/AppointmentPage";
import Page404 from './pages/Page404';
function App() {
  return (
   
    <Router>
    {/* Header Component */}
    <Header />

    {/* Page Routes */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctor-services" element={<ServicesPage />} />
      <Route path="/education" element={<Education />} />
      <Route path="/doctor-appointment" element={<AppointmentPage />} />
      <Route path="/about-us" element={<Page404 />} />
      <Route path="/Portfolio" element={<Page404 />} />
      <Route path="/News" element={<Page404 />} />
    </Routes>

    {/* Footer Component */}
    <Footer />

</Router>

  
  );
}

export default App;
