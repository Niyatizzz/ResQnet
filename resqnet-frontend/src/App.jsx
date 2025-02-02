import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom"; // Importing useNavigate
import "./App.css";
import AidRequestForm from "./pages/AidRequestForm";
import VolunteerDashboard from "./pages/VolunteerDashboard";
import OrganizationDashboard from "./pages/OrganisationDashboard";
import VictimDashboard from "./pages/VictimDashboard";

function App() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleVolunteerClick = () => {
    navigate("/volunteer"); // Navigate to the VolunteerDashboard
  };

  const handleOrganizationClick = () => {
    navigate("/organization"); // Navigate to the OrganizationDashboard
  };

  const handleVictimClick = () => {
    navigate("/victim"); // Navigate to the VictimDashboard
  };

  const handleRequestAidClick = () => {
    navigate("/request-aid"); // Navigate to the AidRequestForm
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-left">
          <h1>ResQNet</h1>
        </div>
        <div className="header-right">
          <ul className="header-nav">
            <li>
              <i className="fas fa-home"></i>Home
            </li>
            <li>
              <i className="fas fa-info-circle"></i>About Us
            </li>
            <li>
              <i className="fas fa-phone-alt"></i>Helpline
            </li>
            <li>
              <i className="fas fa-sign-in-alt"></i>Login/Signup
            </li>
          </ul>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">ResQNet</h1>
          <p className="hero-tagline">
            Linking Those In Need With Those Who Lead
          </p>

          <div className="cta-buttons">
            <button
              className="cta-button volunteer"
              onClick={handleVolunteerClick}
            >
              Volunteer
            </button>
            <button className="cta-button victim" onClick={handleVictimClick}>
              Victim
            </button>
            <button
              className="cta-button organization"
              onClick={handleOrganizationClick}
            >
              Organization
            </button>
          </div>
          <div className="extra-buttons">
            <button
              className="cta-button report-disaster"
              onClick={handleRequestAidClick}
            >
              Request Aid
            </button>
            <button className="cta-button locate-disaster">
              Locate Disaster
            </button>
          </div>
        </div>
      </section>

      <Routes>
        <Route path="/volunteer" element={<VolunteerDashboard />} />
        <Route path="/organization" element={<OrganizationDashboard />} />
        <Route path="/victim" element={<VictimDashboard />} />
        <Route path="/request-aid" element={<AidRequestForm />} />
      </Routes>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <p>&copy; 2025 ResQNet. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-social">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      {" "}
      {/* Wrap the app with Router */}
      <App />
    </Router>
  );
}

export default AppWrapper;
