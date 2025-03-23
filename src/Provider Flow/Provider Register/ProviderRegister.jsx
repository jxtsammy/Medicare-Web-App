import './Register.css';
import { FaEnvelope, FaLinkedin, FaTwitter, FaInstagram, FaRocket } from 'react-icons/fa';
import logo from '../../assets/Medimock-removebg-preview.png';
import { useNavigate, Link } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Perform login logic here...

    // Redirect to dashboard after successful login
    navigate("/dashboard");
  };

  return (
    <div className="signup-app">
      <header className="signup-header">
        <div className="signup-logo-container">
          <img src={logo} alt="medicare" className="signup-logo-img"/>
          <h1 className="signup-logo-title"><span className="signup-for-providers">for Providers</span></h1>
        </div>
        <Link to="/provider-login"><button className="signup-sign-in-btn-header">Sign In</button></Link>
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
              Zocdoc is the best way to reach the right patients for your practice. It’s easy to join and there are no upfront fees or subscription costs.
            </p>
          </div>

          <div className="signup-registration-card">
            <form className="signup-registration-form">
              <div className="signup-form-row">
                <div className="signup-form-group signup-half">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" />
                </div>
                <div className="signup-form-group signup-half">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" />
                </div>
              </div>

              <div className="signup-form-group">
                <label htmlFor="practiceName">Practice Name</label>
                <input type="text" id="practiceName" name="practiceName" />
              </div>

              <div className="signup-form-group">
                <label htmlFor="specialty">Your Speciality</label>
                <input type="text" id="specialty" name="specialty" />
              </div>

              <div className="signup-form-group">
                <label htmlFor="location">Location</label>
                <input type="text" id="location" name="location" />
              </div>

              <div className="signup-form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" />
              </div>

              <div className="signup-form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" />
              </div>

              <div className="signup-form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
              </div>

              <div className="signup-form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" />
              </div>

              <button type="submit" className="signup-register-btn" onClick={handleSignup}>Register</button>
            </form>

            <p className="signup-login-prompt">
              Already have an account? <Link to="/provider-login" className="signup-login-link">Sign In</Link>
            </p>
          </div>
        </div>
      </main>

      <footer className="signup-footer">
        <div className="signup-copyright">2025 Medicare Inc</div>
        <div className="signup-social-icons">
          <a href="#" className="signup-social-icon"><FaEnvelope /></a>
          <a href="#" className="signup-social-icon"><FaLinkedin /></a>
          <a href="#" className="signup-social-icon"><FaTwitter /></a>
          <a href="#" className="signup-social-icon"><FaInstagram /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
