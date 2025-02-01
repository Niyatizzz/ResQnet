// src/App.jsx
import React from "react";
import "./App.css";
import AidRequestForm from "./pages/AidRequestForm";

function App() {
  return (
    <>
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
              <button className="cta-button volunteer">Volunteer</button>
              <button className="cta-button victim">Victim</button>
              <button className="cta-button organization">Organization</button>
            </div>
            <div className="extra-buttons">
              <button className="cta-button report-disaster">
                Report Disaster
              </button>
              <button className="cta-button locate-disaster">
                Locate Disaster
              </button>
            </div>
          </div>
        </section>
      </div>
      <AidRequestForm />
    </>
  );
}

export default App;
