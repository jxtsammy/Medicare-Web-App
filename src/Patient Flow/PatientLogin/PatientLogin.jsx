import { useState } from 'react';
import './PatientLogin.css';
import medicareLogoSrc from '../../assets/Medicare-logo.png';
import handslogo from '../../assets/hands-bond.png';

const PatientLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    // Here you would typically handle authentication
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src={medicareLogoSrc || "/placeholder.svg"} alt="Medicare Logo" className="medicare-logo" />
      </div>

      <div className="login-card">
        <h1 className="login-title">Login into your Account</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
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

          <button type="submit" className="login-button">Login</button>

          <div className="divider">
            <span>or</span>
          </div>

          <button type="button" className="google-button">
            <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1, 0, 0, 1, 0, 0)">
                <path d="M21.35,11.1H12v3.2h5.59c-0.56,2.68-2.78,4.2-5.59,4.2c-3.35,0-6.07-2.72-6.07-6.07
                c0-3.35,2.72-6.07,6.07-6.07c1.6,0,3.04,0.63,4.12,1.64l2.38-2.38C16.54,3.77,14.38,3,12,3C7.03,3,3,7.03,3,12
                c0,4.97,4.03,9,9,9c4.63,0,8.56-3.14,8.56-8.36C20.56,11.98,20.71,11.1,21.35,11.1z" />
              </g>
            </svg>
            Continue with Google
          </button>

          <div className="signup-link">
            New to Medicare? <a href="#">Create an account</a>
          </div>
        </form>
      </div>

      <div className="hands-footer">
        <img src={handslogo || "/placeholder.svg"} alt="Hands" className="hands-image" />
      </div>
    </div>
  );
};

export default PatientLogin;