"use client"

import { useState } from "react"
import "./Landing.css"
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa"
import medstar from '../assets/medstar.png';
import sinai from '../assets/mount-sinai.png';
import tufts from '../assets/tufts.png';
import methodist from '../assets/methodist.png'
import health from '../assets/health.png'
import montefiore from '../assets/montefiore.png'
import provider from '../assets/provider.png'
import book from '../assets/book-doc.png'
import girl from '../assets/girl-doc.png'
import cigna from '../assets/cigna.png'
import medicare from '../assets/medicare.png'
import aetna from '../assets/aetna.png'
import united from '../assets/unitedhealth.png'
import BlueCross from '../assets/BlueCross.png'
import Medicaresrc from '../assets/Medicare-logo.png'
import eye from '../assets/eye.png'
import dentist from '../assets/dentist.png'
import dermatologist from '../assets/dermatologist.png'
import doctor from '../assets/doctor.png'
import heart from '../assets/heart.png'
import psychiatrist from '../assets/psychiatrist.png'
import help from '../assets/helpp.png'
import { Link } from "react-router-dom"
import { Typewriter } from "react-simple-typewriter";

const LandingPage = () => {
  // State for search form
  const [searchQuery, setSearchQuery] = useState("")
  const [location, setLocation] = useState("")
  const [insurance, setInsurance] = useState("")

  // State for dropdowns
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false)

  // State for modals
 // const [showLoginModal, setShowLoginModal] = useState(false)
 // const [showRegisterModal, setShowRegisterModal] = useState(false)
 // const [showInsuranceModal, setShowInsuranceModal] = useState(false)

  // Form submission handler
  const handleSearch = (e) => {
    e.preventDefault()
    alert(`Searching for: ${searchQuery} in ${location} with insurance: ${insurance}`)
  }

  // Toggle login dropdown
  const toggleLoginDropdown = () => {
    setIsLoginDropdownOpen(!isLoginDropdownOpen)
  }

  // Handle specialist card click
  const handleSpecialistClick = (specialistType) => {
    alert(`Navigating to ${specialistType} specialists page`)
  }

  // Handle feature button clicks
  const handleFeatureClick = (action) => {
    alert(`Navigating to ${action} page`)
  }



  return (
    <div className="landing-page">
      {/* Header */}
      <header className="landing-page-header">
        <div className="landing-page-header-container">
          <div className="landing-page-logo">
            <img src={Medicaresrc} alt="Medicare Logo" className="landing-page-logo-img" />
          </div>
          <nav className="landing-page-nav">
            <div className="landing-page-auth-buttons">
              <div className="landing-page-dropdown">
                <button className="landing-page-login-btn" onClick={toggleLoginDropdown}>
                  Log In <span>▼</span>
                </button>
                {isLoginDropdownOpen && (
                  <div className="landing-page-dropdown-menu">
                    <label className="lable-txt">Patient Authentication</label>
                    <Link to="/patient-login" className="landing-page-dropdown-item" >
                      Patient Login
                    </Link>
                    <label className="lable-txt">Provider Authentication</label>
                    <Link to="provider-login" className="landing-page-dropdown-item">
                      Provider Login
                    </Link>
                    <Link to="provider-register" className="landing-page-dropdown-item">
                      Provider Registration
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/patient-register">
              <button className="landing-page-register-btn">
                Register
              </button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="landing-page-hero">
        <div className="landing-page-hero-container">
        <h1 className="landing-page-hero-title">
      Book local{" "}
      <Typewriter
        words={["Dermatologist", "Doctor", "Nurses", "Dentist", "Midwives"]}
        loop={Infinity}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      /><br/>
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
              <img src={aetna} alt="Aetna" />
            </div>
            <div className="landing-page-insurance-logo">
              <img src={cigna} alt="Cigna" />
            </div>
            <div className="landing-page-insurance-logo">
              <img src={united} alt="United Health" />
            </div>
            <div className="landing-page-insurance-logo">
              <img src={medicare} alt="Medicare" />
            </div>
            <div className="landing-page-insurance-logo">
              <img src={BlueCross} alt="Blue Cross" />
            </div>
            <div className="landing-page-insurance-logo see-all">
              <span>See all (1,000+)</span>
            </div>
          </div>

          <button className="landing-page-add-insurance-btn">
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
                <img src={heart} alt="Heart Specialist" className="landing-page-specialist-img" />
              </div>
              <span className="landing-page-specialist-name">Heart Specialist</span>
            </div>
            <div className="landing-page-specialist-card" onClick={() => handleSpecialistClick("Dentist")}>
              <div className="landing-page-specialist-icon">
                <img src={dentist} alt="Dentist" className="landing-page-specialist-img" />
              </div>
              <span className="landing-page-specialist-name">Dentist</span>
            </div>
            <div className="landing-page-specialist-card" onClick={() => handleSpecialistClick("Doctor")}>
              <div className="landing-page-specialist-icon">
                <img src={doctor} alt="Doctor" className="landing-page-specialist-img" />
              </div>
              <span className="landing-page-specialist-name">Doctor</span>
            </div>
            <div className="landing-page-specialist-card" onClick={() => handleSpecialistClick("Dermatologist")}>
              <div className="landing-page-specialist-icon">
                <img src={dermatologist} alt="Dermatologist" className="landing-page-specialist-img" />
              </div>
              <span className="landing-page-specialist-name">Dermatologist</span>
            </div>
            <div className="landing-page-specialist-card" onClick={() => handleSpecialistClick("Psychiatrist")}>
              <div className="landing-page-specialist-icon">
                <img src={psychiatrist} alt="Psychiatrist" className="landing-page-specialist-img" />
              </div>
              <span className="landing-page-specialist-name">Psychiatrist</span>
            </div>
            <div className="landing-page-specialist-card" onClick={() => handleSpecialistClick("Eye Doctor")}>
              <div className="landing-page-specialist-icon">
                <img src={eye} alt="Eye Doctor" className="landing-page-specialist-img" />
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
                <img src={help} alt="Browse providers" />
              </div>
              <h3 className="landing-page-feature-title">Browse providers who take your insurance</h3>
              <button className="landing-page-feature-btn" onClick={() => handleFeatureClick("specialists")}>
                See specialists
              </button>
            </div>

            <div className="landing-page-feature-card">
              <div className="landing-page-feature-image">
                <img src={girl} alt="Read reviews" />
              </div>
              <h3 className="landing-page-feature-title">Read reviews from users</h3>
              <button className="landing-page-feature-btn" onClick={() => handleFeatureClick("providers")}>
                See Providers
              </button>
            </div>

            <div className="landing-page-feature-card">
              <div className="landing-page-feature-image">
                <img src={book} alt="Book appointment" />
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
            <img src={provider} alt="Provider" />
          </div>

          <div className="landing-page-provider-content">
            <h2 className="landing-page-section-title">Are you a healthcare provider interested in reaching new patients?</h2>

            <ul className="landing-page-provider-benefits">
              <li>Reach patients in your area looking for new providers</li>
              <li>Fill last-minute openings in your schedule</li>
              <li>Strengthen your online reputation with verified reviews</li>
            </ul>

            <button className="landing-page-get-registered-btn">
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
              <h2 className="landing-page-section-title">Were trusted by top health systems</h2>
              <button className="landing-page-get-registered-btn">
                Get Registered
              </button>
            </div>

            <div className="landing-page-trust-logos">
              <div className="landing-page-trust-logo-row">
                <img src={medstar} alt="Medstar" />
                <img src={sinai} alt="Mount Sinai" />
                <img src={tufts} alt="Tufts" />
              </div>
              <div className="landing-page-trust-logo-row">
                <img src={montefiore} alt="Montefiore" />
                <img src={health} alt="Health" />
                <img src={methodist} alt="Methodist" />
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
    </div>
  )
}

export default LandingPage