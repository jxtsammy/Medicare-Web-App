"use client"

import "./Register.css"
import { FaEnvelope, FaLinkedin, FaTwitter, FaInstagram, FaRocket } from "react-icons/fa"
import logo from "../../assets/Medimock-removebg-preview.png"
import { useNavigate, Link } from "react-router-dom"
import { useState, useEffect } from "react"

function App() {
  const navigate = useNavigate()

  // State for form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    practiceName: "",
    specialty: "",
    location: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  // State for validation errors
  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  })

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Validate password and confirm password whenever they change
  useEffect(() => {
    validatePasswords()
  }, [formData.password, formData.confirmPassword])

  // Password validation function
  const validatePasswords = () => {
    const newErrors = {
      password: "",
      confirmPassword: "",
    }

    // Check password length
    if (formData.password && formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    // Check if passwords match
    if (formData.confirmPassword && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    setErrors(newErrors)
  }

  // Check if form is valid
  const isFormValid = () => {
    // Check if there are any errors
    return (
      !errors.password &&
      !errors.confirmPassword &&
      formData.password.length >= 6 &&
      formData.password === formData.confirmPassword
    )
  }

  const handleSignup = (e) => {
    e.preventDefault()

    // Validate form before submission
    validatePasswords()

    // Only proceed if form is valid
    if (isFormValid()) {
      // Perform registration logic here...
      console.log("Form submitted successfully", formData)

      // Redirect to dashboard after successful registration
      navigate("/provider-dashboard")
    } else {
      console.log("Form has errors, please fix them")
    }
  }

  return (
    <div className="signup-app">
      <header className="signup-header">
        <div className="signup-logo-container">
          <img src={logo || "/placeholder.svg"} alt="medicare" className="signup-logo-img" />
          <h1 className="signup-logo-title">
            <span className="signup-for-providers">for Providers</span>
          </h1>
        </div>
        <Link to="/provider-login">
          <button className="signup-sign-in-btn-header">Sign In</button>
        </Link>
      </header>

      <main className="signup-main-content">
        <div className="signup-content-container">
          <div className="signup-left-section">
            <div className="signup-rocket-icon">
              <FaRocket className="signup-rocket" />
              <div className="signup-rocket-circle"></div>
            </div>
            <h2 className="signup-get-started-text">Lets get started</h2>
            <p className="signup-description-text">
              Zocdoc is the best way to reach the right patients for your practice. Its easy to join and there are no
              upfront fees or subscription costs.
            </p>
          </div>

          <div className="signup-registration-card">
            <form className="signup-registration-form">
              <div className="signup-form-row">
                <div className="signup-form-group signup-half">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="signup-form-group signup-half">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="signup-form-group">
                <label htmlFor="practiceName">Practice Name</label>
                <input
                  type="text"
                  id="practiceName"
                  name="practiceName"
                  value={formData.practiceName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="signup-form-group">
                <label htmlFor="specialty">Your Speciality</label>
                <input
                  type="text"
                  id="specialty"
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleInputChange}
                />
              </div>

              <div className="signup-form-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                />
              </div>

              <div className="signup-form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>

              <div className="signup-form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
              </div>

              <div className="signup-form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                {errors.password && <div className="signup-error-message">{errors.password}</div>}
              </div>

              <div className="signup-form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                {errors.confirmPassword && <div className="signup-error-message">{errors.confirmPassword}</div>}
              </div>

              <button
                type="submit"
                className="signup-register-btn"
                onClick={handleSignup}
                disabled={!isFormValid() && (formData.password || formData.confirmPassword)}
              >
                Register
              </button>
            </form>

            <p className="signup-login-prompt">
              Already have an account?{" "}
              <Link to="/provider-login" className="signup-login-link">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </main>

      <footer className="signup-footer">
        <div className="signup-copyright">2025 Medicare Inc</div>
        <div className="signup-social-icons">
          <a href="#" className="signup-social-icon">
            <FaEnvelope />
          </a>
          <a href="#" className="signup-social-icon">
            <FaLinkedin />
          </a>
          <a href="#" className="signup-social-icon">
            <FaTwitter />
          </a>
          <a href="#" className="signup-social-icon">
            <FaInstagram />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
