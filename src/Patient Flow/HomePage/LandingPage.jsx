"use client"

import { useState } from "react"
import "./LandingPage.css"
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa"
import medstar from '../../assets/medstar.png';
import sinai from '../../assets/mount-sinai.png';
import tufts from '../../assets/tufts.png';
import methodist from '../../assets/methodist.png'
import health from '../../assets/health.png'
import montefiore from '../../assets/montefiore.png'
import provider from '../../assets/provider.png'
import book from '../../assets/book-doc.png'
import girl from '../../assets/girl-doc.png'
import cigna from '../../assets/cigna.png'
import medicare from '../../assets/medicare.png'
import aetna from '../../assets/aetna.png'
import united from '../../assets/unitedhealth.png'
import BlueCross from '../../assets/BlueCross.png'
import Medicaresrc from '../../assets/Medicare-logo.png'
import eye from '../../assets/eye.png'
import dentist from '../../assets/dentist.png'
import dermatologist from '../../assets/dermatologist.png'
import doctor from '../../assets/doctor.png'
import heart from '../../assets/heart.png'
import psychiatrist from '../../assets/psychiatrist.png'
import help from '../../assets/helpp.png'
import { Link } from "react-router-dom"


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
    <div className="landing-page-app">
      <header className="landing-page-header">
        <div className="landing-page-header-container">
        <div className="landing-page-logo">
            <img src={Medicaresrc || "/placeholder.svg"} alt="Medicare Logo" className="landing-page-logo-img"/>
          </div>
          <nav className="landing-page-nav">
            <div className="landing-page-auth-buttons">
              <div className="landing-page-dropdown">
                <button className="landing-page-login-btn" onClick={toggleLoginDropdown}>
                  Log In <span>▼</span>
                </button>
                {loginOpen && (
                  <div className="landing-page-dropdown-menu">
                    <a href="#" className="landing-page-dropdown-item" onClick={() => handleLogin()}>
                      Patient Login
                    </a>
                    <Link to="provider-login" className="landing-page-dropdown-item">
                      Provider Login
                    </Link>
                  </div>
                )}
              </div>
              <button className="landing-page-register-btn" onClick={handleRegister}>
                Register
              </button>
            </div>
          </nav>
        </div>
      </header>

      <section className="landing-page-hero">
        <div className="landing-page-container">
          <h1>
            Book local dermatologists
            <br />
            who take your insurance
          </h1>

          <form className="landing-page-search-form" onSubmit={handleSearch}>
            <div className="landing-page-search-input">
              <FaSearch className="landing-page-search-icon" />
              <input
                type="text"
                placeholder="Condition, Procedure, Doctor"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="landing-page-search-input">
              <FaMapMarkerAlt className="landing-page-search-icon" />
              <input
                type="text"
                placeholder="Akosombo, ER"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="landing-page-search-input">
              <FaCalendarAlt className="landing-page-search-icon" />
              <input
                type="text"
                placeholder="Insurance Carrier Plan"
                value={insurance}
                onChange={(e) => setInsurance(e.target.value)}
              />
            </div>
            <button type="submit" className="landing-page-search-btn">
              <FaSearch />
            </button>
          </form>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="landing-page-insurance-section">
        <div className="landing-page-section-container">
          <h2 className="landing-page-section-title">Find an in-network doctor from over 1,000 insurance plans</h2>
          <p className="landing-page-section-subtitle">Add your insurance to see in-network primary care doctors</p>

          <div className="landing-page-insurance-logos">
            <div className="landing-page-insurance-logo">
              <img src={aetna || "/placeholder.svg"} alt="Aetna" />
            </div>
            <div className="landing-page-insurance-logo">
              <img src={cigna || "/placeholder.svg"} alt="Cigna" />
            </div>
            <div className="landing-page-insurance-logo">
              <img src={united || "/placeholder.svg"} alt="United Health" />
            </div>
            <div className="landing-page-insurance-logo">
              <img src={medicare || "/placeholder.svg"} alt="Medicare" />
            </div>
            <div className="landing-page-insurance-logo">
              <img src={BlueCross || "/placeholder.svg"} alt="Blue Cross" />
            </div>
            <div className="landing-page-insurance-logo landing-page-see-all" onClick={handleAddInsurance}>
              <span>See all (1,000+)</span>
            </div>
          </div>

          <button className="landing-page-add-insurance-btn" onClick={handleAddInsurance}>
            Add Your Insurance Coverage
          </button>
        </div>
      </section>

      {/* Specialists Section */}
      <section className="landing-page-specialists-section">
        <div className="landing-page-section-container">
          <h2 className="landing-page-section-title">Top-Searched Specialists</h2>

          <div className="landing-page-specialists-grid">
            <div className="landing-page-specialist-card" onClick={() => handleSpecialistClick("Heart")}>
              <div className="landing-page-specialist-icon">
                <img src={heart || "/placeholder.svg"} alt="Heart Specialist" className="landing-page-specialist-img" />
              </div>
              <span className="landing-page-specialist-name">Heart Specialist</span>
            </div>
            <div className="landing-page-specialist-card" onClick={() => handleSpecialistClick("Dentist")}>
              <div className="landing-page-specialist-icon">
                <img src={dentist || "/placeholder.svg"} alt="Dentist" className="landing-page-specialist-img" />
              </div>
              <span className="landing-page-specialist-name">Dentist</span>
            </div>
            <div className="landing-page-specialist-card" onClick={() => handleSpecialistClick("Doctor")}>
              <div className="landing-page-specialist-icon">
                <img src={doctor || "/placeholder.svg"} alt="Doctor" className="landing-page-specialist-img" />
              </div>
              <span className="landing-page-specialist-name">Doctor</span>
            </div>
            <div className="landing-page-specialist-card" onClick={() => handleSpecialistClick("Dermatologist")}>
              <div className="landing-page-specialist-icon">
                <img src={dermatologist || "/placeholder.svg"} alt="Dermatologist" className="landing-page-specialist-img" />
              </div>
              <span className="landing-page-specialist-name">Dermatologist</span>
            </div>
            <div className="landing-page-specialist-card" onClick={() => handleSpecialistClick("Psychiatrist")}>
              <div className="landing-page-specialist-icon">
                <img src={psychiatrist || "/placeholder.svg"} alt="Psychiatrist" className="landing-page-specialist-img" />
              </div>
              <span className="landing-page-specialist-name">Psychiatrist</span>
            </div>
            <div className="landing-page-specialist-card" onClick={() => handleSpecialistClick("Eye Doctor")}>
              <div className="landing-page-specialist-icon">
                <img src={eye || "/placeholder.svg"} alt="Eye Doctor" className="landing-page-specialist-img" />
              </div>
              <span className="landing-page-specialist-name">Eye Doctor</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="landing-page-features-section">
        <div className="landing-page-features-container">
          <h2 className="landing-page-section-title">Lets get you a doc who gets you</h2>

          <div className="landing-page-features-grid">
            <div className="landing-page-feature-card">
              <div className="landing-page-feature-image">
                <img src={help || "/placeholder.svg"} alt="Browse providers" />
              </div>
              <h3 className="landing-page-feature-title">Browse providers who take your insurance</h3>
              <button className="landing-page-feature-btn" onClick={() => handleFeatureClick("specialists")}>
                See specialists
              </button>
            </div>

            <div className="landing-page-feature-card">
              <div className="landing-page-feature-image">
                <img src={girl || "/placeholder.svg"} alt="Read reviews" />
              </div>
              <h3 className="landing-page-feature-title">Read reviews from users</h3>
              <button className="landing-page-feature-btn" onClick={() => handleFeatureClick("providers")}>
                See Providers
              </button>
            </div>

            <div className="landing-page-feature-card">
              <div className="landing-page-feature-image">
                <img src={book || "/placeholder.svg"} alt="Book appointment" />
              </div>
              <h3 className="landing-page-feature-title">Book an appointment today online</h3>
              <button className="landing-page-feature-btn" onClick={() => handleFeatureClick("availability")}>
                See Availability
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Section */}
      <section className="landing-page-provider-section">
        <div className="landing-page-section-container landing-page-provider-container">
          <div className="landing-page-provider-image">
            <img src={provider || "/placeholder.svg"} alt="Provider" />
          </div>

          <div className="landing-page-provider-content">
            <h2 className="landing-page-section-title">Are you a healthcare provider interested in reaching new patients?</h2>

            <ul className="landing-page-provider-benefits">
              <li>Reach patients in your area looking for new providers</li>
              <li>Fill last-minute openings in your schedule</li>
              <li>Strengthen your online reputation with verified reviews</li>
            </ul>

            <button className="landing-page-get-registered-btn" onClick={handleGetRegistered}>
              Get Registered
            </button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="landing-page-trust-section">
        <div className="landing-page-section-container">
          <div className="landing-page-trust-header">
            <div className="landing-page-trust-title-container">
              <p className="landing-page-trust-subtitle">Medicare for health systems</p>
              <h2 className="landing-page-section-title">We're trusted by top health systems</h2>
              <button className="landing-page-get-registered-btn" onClick={handleGetRegistered}>
                Get Registered
              </button>
            </div>

            <div className="landing-page-trust-logos">
              <div className="landing-page-trust-logo-row">
                <img src={medstar || "/placeholder.svg"} alt="Medstar" />
                <img src={sinai || "/placeholder.svg"} alt="Mount Sinai" />
                <img src={tufts || "/placeholder.svg"} alt="Tufts" />
              </div>
              <div className="landing-page-trust-logo-row">
                <img src={montefiore || "/placeholder.svg"} alt="Montefiore" />
                <img src={health || "/placeholder.svg"}alt="Health" />
                <img src={methodist || "/placeholder.svg"} alt="Methodist" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-page-footer">
        <div className="landing-page-footer-container">
          <div className="landing-page-footer-column">
            <h3 className="landing-page-footer-title">Medicare</h3>
            <ul className="landing-page-footer-links">
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

          <div className="landing-page-footer-column">
            <h3 className="landing-page-footer-title">Discover</h3>
            <ul className="landing-page-footer-links">
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

          <div className="landing-page-footer-column">
            <h3 className="landing-page-footer-title">Are you a top doctor or health service?</h3>
            <ul className="landing-page-footer-links">
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

        <div className="landing-page-footer-bottom">
          <div className="landing-page-footer-copyright">
            <span>© 2025 Medicare, Inc</span>
            <div className="landing-page-footer-legal">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
              <a href="#">Customer Health</a>
            </div>
          </div>

          <div className="landing-page-footer-social">
            <a href="#" className="landing-page-social-icon">
              <FaInstagram />
            </a>
            <a href="#" className="landing-page-social-icon">
              <FaTwitter />
            </a>
            <a href="#" className="landing-page-social-icon">
              <FaFacebook />
            </a>
            <a href="#" className="landing-page-social-icon">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {showLoginModal && (
        <div className="landing-page-modal-overlay" onClick={closeModals}>
          <div className="landing-page-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="landing-page-modal-close" onClick={closeModals}>
              ×
            </button>
            <h2>Log In</h2>
            <form className="landing-page-modal-form">
              <div className="landing-page-form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="landing-page-form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
              </div>
              <button type="submit" className="landing-page-modal-submit">
                Log In
              </button>
            </form>
            <p className="landing-page-modal-footer">
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
        <div className="landing-page-modal-overlay" onClick={closeModals}>
          <div className="landing-page-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="landing-page-modal-close" onClick={closeModals}>
              ×
            </button>
            <h2>Register</h2>
            <form className="landing-page-modal-form">
              <div className="landing-page-form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="landing-page-form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="landing-page-form-group">
                <label>Password</label>
                <input type="password" placeholder="Create a password" />
              </div>
              <div className="landing-page-form-group">
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm your password" />
              </div>
              <div className="landing-page-form-group">
                <label>
                  <input type="checkbox" /> I am a healthcare provider
                </label>
              </div>
              <button type="submit" className="landing-page-modal-submit">
                Register
              </button>
            </form>
            <p className="landing-page-modal-footer">
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
        <div className="landing-page-modal-overlay" onClick={closeModals}>
          <div className="landing-page-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="landing-page-modal-close" onClick={closeModals}>
              ×
            </button>
            <h2>Add Your Insurance</h2>
            <form className="landing-page-modal-form">
              <div className="landing-page-form-group">
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
              <div className="landing-page-form-group">
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
              <div className="landing-page-form-group">
                <label>Member ID (Optional)</label>
                <input type="text" placeholder="Enter your member ID" />
              </div>
              <button type="submit" className="landing-page-modal-submit">
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