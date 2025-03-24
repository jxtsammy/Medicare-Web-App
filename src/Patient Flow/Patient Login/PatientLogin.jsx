"use client"

import { useState } from "react"
import "./PatientLogin.css"
import logo from "../../assets/Medimock-removebg-preview.png"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

const MedicareLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login attempt with:", { email, password })
    navigate('/patient-dasboard')
    // Add authentication logic here
  }

  return (
    <div className="medicare-login-container">
      <header className="medicare-login-header">
        <div className="medicare-login-logo-container">
          <img src={logo} alt="medicare-logo" className="medi-logo"/>
        </div>
      </header>

      <main className="medicare-login-main">
        <div className="medicare-login-card">
          <h1 className="medicare-login-title">Login into your Account</h1>

          <form className="medicare-login-form" onSubmit={handleSubmit}>
            <div className="medicare-login-form-group">
              <label htmlFor="email" className="medicare-login-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="medicare-login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="medicare-login-form-group">
              <label htmlFor="password" className="medicare-login-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="medicare-login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="medicare-login-button">
              Login
            </button>

            <p className="medicare-login-signup-text">
              New to Medicare?{" "}
              <Link to="/patient-register" className="medicare-login-signup-link">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </main>

      <footer className="medicare-login-footer">
        <div className="medicare-login-hands-container">
          {/* Create multiple hand elements with different colors */}
          <div className="medicare-login-hand medicare-login-hand-1"></div>
          <div className="medicare-login-hand medicare-login-hand-2"></div>
          <div className="medicare-login-hand medicare-login-hand-3"></div>
          <div className="medicare-login-hand medicare-login-hand-4"></div>
          <div className="medicare-login-hand medicare-login-hand-5"></div>
          <div className="medicare-login-hand medicare-login-hand-6"></div>
          <div className="medicare-login-hand medicare-login-hand-7"></div>
          <div className="medicare-login-hand medicare-login-hand-8"></div>
          <div className="medicare-login-hand medicare-login-hand-9"></div>
          <div className="medicare-login-hand medicare-login-hand-10"></div>
          <div className="medicare-login-hand medicare-login-hand-11"></div>
          <div className="medicare-login-hand medicare-login-hand-12"></div>
        </div>
      </footer>
    </div>
  )
}

export default MedicareLogin
