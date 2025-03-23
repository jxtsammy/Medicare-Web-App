
		import './Register.css';
import { FaEnvelope, FaLinkedin, FaTwitter, FaInstagram, FaRocket } from 'react-icons/fa';
import logo from '../../assets/Medimock-removebg-preview.png'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="medicare" className='logo-imge'/>
          <h1 className="logo-title"><span className="for-providers">for Providers</span></h1>
        </div>
        <button className="sign-in-btn-header">Sign In</button>
      </header>

      <main className="main-content">
        <div className="content-container">
          <div className="left-section">
            <div className="rocket-icon">
              <FaRocket className="rocket" />
              <div className="rocket-circle"></div>
            </div>
            <h2 className="get-started-text">Lets get started</h2>
            <p className="description-text">
              Zocdoc is the best way to reach the right patients for your practice. Its easy to join and there are no upfront fees or subscription costs.
            </p>
          </div>

          <div className="registration-card">
            <form className="registration-form">
              <div className="form-row">
                <div className="form-group half">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" />
                </div>
                <div className="form-group half">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="practiceName">Practice Name</label>
                <input type="text" id="practiceName" name="practiceName" />
              </div>

              <div className="form-group">
                <label htmlFor="specialty">Your Speciality</label>
                <input type="text" id="specialty" name="specialty" />
              </div>

              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input type="text" id="location" name="location" />
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" />
              </div>

              <button type="submit" className="register-btn">Register</button>
            </form>

            <p className="login-prompt">
              Already have an account? <a href="#" className="login-link">Login</a>
            </p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="copyright">2025 Medicare Inc</div>
        <div className="social-icons">
          <a href="#" className="social-icon"><FaEnvelope /></a>
          <a href="#" className="social-icon"><FaLinkedin /></a>
          <a href="#" className="social-icon"><FaTwitter /></a>
          <a href="#" className="social-icon"><FaInstagram /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;