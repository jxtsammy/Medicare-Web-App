"use client"

import { useState } from "react"
import "./LandingPage.css"
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa"
import medstar from './assets/medstar.png';
import sinai from './assets/mount-sinai.png';
import tufts from './assets/tufts.png';
import methodist from './assets/methodist.png'
import health from './assets/health.png'
import montefiore from './assets/montefiore.png'
import provider from './assets/provider.png'
import book from './assets/book-doc.png'
import girl from './assets/girl-doc.png'
import cigna from './assets/cigna.png'
import medicare from './assets/medicare.png'
import aetna from './assets/aetna.png'
import united from './assets/unitedhealth.png'
import BlueCross from './assets/BlueCross.png'
import Medicaresrc from './assets/Medicare-logo.png'
import eye from './assets/eye.png'
import dentist from './assets/dentist.png'
import dermatologist from './assets/dermatologist.png'
import doctor from './assets/doctor.png'
import heart from './assets/heart.png'
import psychiatrist from './assets/psychiatrist.png'


const LandingPage = () => {
  // State for search form
  const [searchQuery, setSearchQuery] = useState("")
  const [location, setLocation] = useState("")
  const [insurance, setInsurance] = useState("")

  // State for dropdowns
  const [browseOpen, setBrowseOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)

  // State for modals
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [showInsuranceModal, setShowInsuranceModal] = useState(false)

  // Form submission handler
  const handleSearch = (e) => {
    e.preventDefault()
    alert(`Searching for: ${searchQuery} in ${location} with insurance: ${insurance}`)
    // In a real app, you would redirect to search results page
  }

  // Toggle dropdown menus
  const toggleBrowseDropdown = () => {
    setBrowseOpen(!browseOpen)
    if (loginOpen) setLoginOpen(false)
  }

  const toggleLoginDropdown = () => {
    setLoginOpen(!loginOpen)
    if (browseOpen) setBrowseOpen(false)
  }

  // Handle specialist card click
  const handleSpecialistClick = (specialistType) => {
    alert(`Navigating to ${specialistType} specialists page`)
    // In a real app, you would redirect to the specialist page
  }

  // Handle feature button clicks
  const handleFeatureClick = (action) => {
    alert(`Navigating to ${action} page`)
    // In a real app, you would redirect to the appropriate page
  }

  // Handle registration
  const handleGetRegistered = () => {
    setShowRegisterModal(true)
  }

  // Handle insurance selection
  const handleAddInsurance = () => {
    setShowInsuranceModal(true)
  }

  // Handle login
  const handleLogin = () => {
    setShowLoginModal(true)
  }

  // Handle register
  const handleRegister = () => {
    setShowRegisterModal(true)
  }

  // Close modals
  const closeModals = () => {
    setShowLoginModal(false)
    setShowRegisterModal(false)
    setShowInsuranceModal(false)
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-container">
        <div className="logo">
            <img src={Medicaresrc} alt="Medicare Logo" className="logo-img"/>
          </div>
          <nav className="nav">
            <div className="nav-links">
              <div className="dropdown">
                <button className="nav-link" onClick={toggleBrowseDropdown}>
                  Browse <span>▼</span>
                </button>
                {browseOpen && (
                  <div className="dropdown-menu">
                    <a href="#" className="dropdown-item">
                      Find Doctors
                    </a>
                    <a href="#" className="dropdown-item">
                      Specialties
                    </a>
                    <a href="#" className="dropdown-item">
                      Insurance Plans
                    </a>
                    <a href="#" className="dropdown-item">
                      Health Systems
                    </a>
                  </div>
                )}
              </div>
              <button className="nav-link">Help</button>
              <button className="nav-link">List your practice on Medicare</button>
            </div>
            <div className="auth-buttons">
              <div className="dropdown">
                <button className="login-btn" onClick={toggleLoginDropdown}>
                  Log In <span>▼</span>
                </button>
                {loginOpen && (
                  <div className="dropdown-menu">
                    <a href="#" className="dropdown-item" onClick={() => handleLogin()}>
                      Patient Login
                    </a>
                    <a href="#" className="dropdown-item" onClick={() => handleLogin()}>
                      Provider Login
                    </a>
                  </div>
                )}
              </div>
              <button className="register-btn" onClick={handleRegister}>
                Register
              </button>
            </div>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>
            Book local dermatologists
            <br />
            who take your insurance
          </h1>

          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-input">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Condition, Procedure, Doctor"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="search-input">
              <FaMapMarkerAlt className="search-icon" />
              <input
                type="text"
                placeholder="Akosombo, ER"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="search-input">
              <FaCalendarAlt className="search-icon" />
              <input
                type="text"
                placeholder="Insurance Carrier Plan"
                value={insurance}
                onChange={(e) => setInsurance(e.target.value)}
              />
            </div>
            <button type="submit" className="search-btn">
              <FaSearch />
            </button>
          </form>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="insurance-section">
        <div className="section-container">
          <h2 className="section-title">Find an in-network doctor from over 1,000 insurance plans</h2>
          <p className="section-subtitle">Add your insurance to see in-network primary care doctors</p>

          <div className="insurance-logos">
            <div className="insurance-logo">
              <img src={aetna} alt="Aetna" />
            </div>
            <div className="insurance-logo">
              <img src={cigna} alt="Cigna" />
            </div>
            <div className="insurance-logo">
              <img src={united} alt="United Health" />
            </div>
            <div className="insurance-logo">
              <img src={medicare} alt="Medicare" />
            </div>
            <div className="insurance-logo">
              <img src={BlueCross} alt="Blue Cross" />
            </div>
            <div className="insurance-logo see-all" onClick={handleAddInsurance}>
              <span>See all (1,000+)</span>
            </div>
          </div>

          <button className="add-insurance-btn" onClick={handleAddInsurance}>
            Add Your Insurance Coverage
          </button>
        </div>
      </section>

      {/* Specialists Section */}
      <section className="specialists-section">
        <div className="section-container">
          <h2 className="section-title">Top-Searched Specialists</h2>

          <div className="specialists-grid">
            <div className="specialist-card" onClick={() => handleSpecialistClick("Heart")}>
              <div className="specialist-icon">
                <img src={heart} alt="Heart Specialist" className="specialist-img" />
              </div>
              <span className="specialist-name">Heart Specialist</span>
            </div>
            <div className="specialist-card" onClick={() => handleSpecialistClick("Dentist")}>
              <div className="specialist-icon">
                <img src={dentist} alt="Dentist" className="specialist-img" />
              </div>
              <span className="specialist-name">Dentist</span>
            </div>
            <div className="specialist-card" onClick={() => handleSpecialistClick("Doctor")}>
              <div className="specialist-icon">
                <img src={doctor} alt="Doctor" className="specialist-img" />
              </div>
              <span className="specialist-name">Doctor</span>
            </div>
            <div className="specialist-card" onClick={() => handleSpecialistClick("Dermatologist")}>
              <div className="specialist-icon">
                <img src={dermatologist} alt="Dermatologist" className="specialist-img" />
              </div>
              <span className="specialist-name">Dermatologist</span>
            </div>
            <div className="specialist-card" onClick={() => handleSpecialistClick("Psychiatrist")}>
              <div className="specialist-icon">
                <img src={psychiatrist} alt="Psychiatrist" className="specialist-img" />
              </div>
              <span className="specialist-name">Psychiatrist</span>
            </div>
            <div className="specialist-card" onClick={() => handleSpecialistClick("Eye Doctor")}>
              <div className="specialist-icon">
                <img src={eye} alt="Eye Doctor" className="specialist-img" />
              </div>
              <span className="specialist-name">Eye Doctor</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <h2 className="section-title">Let's get you a doc who gets you</h2>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-image">
                <img src="/placeholder.svg?height=150&width=150" alt="Browse providers" />
              </div>
              <h3 className="feature-title">Browse providers who take your insurance</h3>
              <button className="feature-btn" onClick={() => handleFeatureClick("specialists")}>
                See specialists
              </button>
            </div>

            <div className="feature-card">
              <div className="feature-image">
                <img src={girl} alt="Read reviews" />
              </div>
              <h3 className="feature-title">Read reviews from users</h3>
              <button className="feature-btn" onClick={() => handleFeatureClick("providers")}>
                See Providers
              </button>
            </div>

            <div className="feature-card">
              <div className="feature-image">
                <img src={book} alt="Book appointment" />
              </div>
              <h3 className="feature-title">Book an appointment today online</h3>
              <button className="feature-btn" onClick={() => handleFeatureClick("availability")}>
                See Availability
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Section */}
      <section className="provider-section">
        <div className="section-container provider-container">
          <div className="provider-image">
            <img src={provider} alt="Provider" />
          </div>

          <div className="provider-content">
            <h2 className="section-title">Are you a healthcare provider interested in reaching new patients?</h2>

            <ul className="provider-benefits">
              <li>Reach patients in your area looking for new providers</li>
              <li>Fill last-minute openings in your schedule</li>
              <li>Strengthen your online reputation with verified reviews</li>
            </ul>

            <button className="get-registered-btn" onClick={handleGetRegistered}>
              Get Registered
            </button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="section-container">
          <div className="trust-header">
            <div className="trust-title-container">
              <p className="trust-subtitle">Medicare for health systems</p>
              <h2 className="section-title">We're trusted by top health systems</h2>
              <button className="get-registered-btn" onClick={handleGetRegistered}>
                Get Registered
              </button>
            </div>

            <div className="trust-logos">
              <div className="trust-logo-row">
                <img src={medstar} alt="Medstar" />
                <img src={sinai} alt="Mount Sinai" />
                <img src={tufts} alt="Tufts" />
              </div>
              <div className="trust-logo-row">
                <img src={montefiore} alt="Montefiore" />
                <img src={health}alt="Health" />
                <img src={methodist} alt="Methodist" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h3 className="footer-title">Medicare</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Discover</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Get Connected to patients every time anytime</a>
              </li>
              <li>
                <a href="#">Real time messaging and healthcare</a>
              </li>
              <li>
                <a href="#">Tools to create schedules with healthcare providers</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Are you a top doctor or health service?</h3>
            <ul className="footer-links">
              <li>
                <a href="#">
                  Medicare is here to help you connect and help both new and returning patients in your vicinity.
                </a>
              </li>
              <li>
                <a href="#">Use your specialty to use your knowledge in healthcare to save more lives.</a>
              </li>
              <li>
                <a href="#">Operational 24/7 system anytime any day</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <span>© 2025 Medicare, Inc</span>
            <div className="footer-legal">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
              <a href="#">Customer Health</a>
            </div>
          </div>

          <div className="footer-social">
            <a href="#" className="social-icon">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon">
              <FaFacebook />
            </a>
            <a href="#" className="social-icon">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {showLoginModal && (
        <div className="modal-overlay" onClick={closeModals}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModals}>
              ×
            </button>
            <h2>Log In</h2>
            <form className="modal-form">
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
              </div>
              <button type="submit" className="modal-submit">
                Log In
              </button>
            </form>
            <p className="modal-footer">
              Don't have an account?{" "}
              <a
                href="#"
                onClick={() => {
                  setShowLoginModal(false)
                  setShowRegisterModal(true)
                }}
              >
                Register
              </a>
            </p>
          </div>
        </div>
      )}

      {showRegisterModal && (
        <div className="modal-overlay" onClick={closeModals}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModals}>
              ×
            </button>
            <h2>Register</h2>
            <form className="modal-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Create a password" />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm your password" />
              </div>
              <div className="form-group">
                <label>
                  <input type="checkbox" /> I am a healthcare provider
                </label>
              </div>
              <button type="submit" className="modal-submit">
                Register
              </button>
            </form>
            <p className="modal-footer">
              Already have an account?{" "}
              <a
                href="#"
                onClick={() => {
                  setShowRegisterModal(false)
                  setShowLoginModal(true)
                }}
              >
                Log In
              </a>
            </p>
          </div>
        </div>
      )}

      {showInsuranceModal && (
        <div className="modal-overlay" onClick={closeModals}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModals}>
              ×
            </button>
            <h2>Add Your Insurance</h2>
            <form className="modal-form">
              <div className="form-group">
                <label>Insurance Provider</label>
                <select>
                  <option value="">Select your insurance provider</option>
                  <option value="aetna">Aetna</option>
                  <option value="cigna">Cigna</option>
                  <option value="united">United Healthcare</option>
                  <option value="medicare">Medicare</option>
                  <option value="bluecross">Blue Cross Blue Shield</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Plan Type</label>
                <select>
                  <option value="">Select your plan type</option>
                  <option value="hmo">HMO</option>
                  <option value="ppo">PPO</option>
                  <option value="epo">EPO</option>
                  <option value="pos">POS</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Member ID (Optional)</label>
                <input type="text" placeholder="Enter your member ID" />
              </div>
              <button type="submit" className="modal-submit">
                Save Insurance
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default LandingPage

