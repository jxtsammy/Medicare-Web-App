
import './Login.css';
import { FaEnvelope, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../../assets/Medimock-removebg-preview.png'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo-container">
					<img src={logo} alt="medicare" className='logo-imge'/>
          <h1 className="logo-title"> <span className="for-providers">for Providers</span></h1>
        </div>
        <button className="register-btn">Register</button>
      </header>

      <main className="main-content">
        <div className="login-card">
          <h2 className="welcome-text">Welcome back</h2>

          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
              />
            </div>

            <button type="submit" className="sign-in-btn">Sign In</button>
          </form>

          <p className="register-prompt">
            Dont have an account? <a href="#" className="register-link">Register</a>
          </p>
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