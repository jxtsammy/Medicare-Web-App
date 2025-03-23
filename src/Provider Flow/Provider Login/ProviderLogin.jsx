import './Login.css';
import { FaEnvelope, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../../assets/Medimock-removebg-preview.png';
import { Link, useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here...

    // Redirect to dashboard after successful login
    navigate("/dashboard");
  };

  return (
    <div className="login-app">
      <header className="login-header">
        <div className="login-logo-container">
          <img src={logo} alt="medicare" className='login-logo-img' />
          <h1 className="login-logo-title">
            <span className="login-for-providers">for Providers</span>
          </h1>
        </div>
        <Link to="/register"><button className="login-register-btn">Register</button></Link>
      </header>

      <main className="login-main-content">
        <div className="login-card">
          <h2 className="login-welcome-text">Welcome back</h2>

          <form className="login-form">
            <div className="login-form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
              />
            </div>

            <div className="login-form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
              />
            </div>

            <button type="submit" className="login-sign-in-btn" onClick={handleLogin}>Sign In</button>
          </form>

          <p className="login-register-prompt">
            Dont have an account? <Link to="/register" className="login-register-link">Register</Link>
          </p>
        </div>
      </main>

      <footer className="login-footer">
        <div className="login-copyright">2025 Medicare Inc</div>
        <div className="login-social-icons">
          <a href="#" className="login-social-icon"><FaEnvelope /></a>
          <a href="#" className="login-social-icon"><FaLinkedin /></a>
          <a href="#" className="login-social-icon"><FaTwitter /></a>
          <a href="#" className="login-social-icon"><FaInstagram /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
