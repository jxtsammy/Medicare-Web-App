"use client"

import { useState } from "react"
import "./RegisterPatient.css"
import medicareLogoSrc from "../../assets/Medicare-logo.png"
import handslogo from "../../assets/hands.png"

const RegisterPatient = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: "",
    sex: "",
    nationalId: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="RegisterPatient-container">
      <div className="RegisterPatient-logo-container">
        <img
          src={medicareLogoSrc || "/placeholder.svg"}
          alt="Medicare Logo"
          className="RegisterPatient-medicare-logo"
        />
      </div>

      <div className="RegisterPatient-form-card">
        <h1 className="RegisterPatient-form-title">Create an account</h1>

        <form onSubmit={handleSubmit}>
          <div className="RegisterPatient-name-row">
            <div className="RegisterPatient-form-group RegisterPatient-half">
              <label htmlFor="firstName">Legal first name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="RegisterPatient-form-group RegisterPatient-half">
              <label htmlFor="lastName">Legal last name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="RegisterPatient-form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="RegisterPatient-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="RegisterPatient-form-group">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="text"
              id="dateOfBirth"
              name="dateOfBirth"
              placeholder="mm/dd/yyyy"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>

          <div className="RegisterPatient-form-row">
            <div className="RegisterPatient-form-group RegisterPatient-half">
              <label>Sex</label>
              <div className="RegisterPatient-radio-group">
                <div className="RegisterPatient-radio-option">
                  <input
                    type="radio"
                    id="male"
                    name="sex"
                    value="male"
                    checked={formData.sex === "male"}
                    onChange={handleChange}
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="RegisterPatient-radio-option">
                  <input
                    type="radio"
                    id="female"
                    name="sex"
                    value="female"
                    checked={formData.sex === "female"}
                    onChange={handleChange}
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </div>

            <div className="RegisterPatient-form-group RegisterPatient-half">
              <label htmlFor="nationalId">National ID No</label>
              <input
                type="text"
                id="nationalId"
                name="nationalId"
                value={formData.nationalId}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="RegisterPatient-button">
            Register
          </button>

          <div className="RegisterPatient-divider">
            <span>or</span>
          </div>

          <button type="button" className="RegisterPatient-google-button">
            <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1, 0, 0, 1, 0, 0)">
                <path
                  d="M21.35,11.1H12v3.2h5.59c-0.56,2.68-2.78,4.2-5.59,4.2c-3.35,0-6.07-2.72-6.07-6.07
                c0-3.35,2.72-6.07,6.07-6.07c1.6,0,3.04,0.63,4.12,1.64l2.38-2.38C16.54,3.77,14.38,3,12,3C7.03,3,3,7.03,3,12
                c0,4.97,4.03,9,9,9c4.63,0,8.56-3.14,8.56-8.36C20.56,11.98,20.71,11.1,21.35,11.1z"
                />
              </g>
            </svg>
            Continue with Google
          </button>

          <div className="RegisterPatient-login-link">
            Already have an account? <a href="#">Log in</a>
          </div>
        </form>
      </div>

      <div className="RegisterPatient-hands-footer">
        <img src={handslogo || "/placeholder.svg"} alt="Hands" className="RegisterPatient-hands-image" />
      </div>
    </div>
  )
}

export default RegisterPatient
