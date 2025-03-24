import { useState } from "react";
import { Link } from "react-router-dom";
import "./PatientRegister.css";
import logo from "../../assets/Medimock-removebg-preview.png"
import { useNavigate } from 'react-router-dom';

export default function MedicareSignup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: "",
    sex: "",
    nationalId: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here

    navigate('/patient-dasboard')
  };

  return (
    <div className="medicare-container">
      <div className="logo-container">
        <img src={logo} alt="medicare-logo" className="medi-logo"/>
      </div>

      <div className="form-card">
        <h2>Create an account</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
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

            <div className="form-group">
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

          <div className="form-group">
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

          <div className="form-row">
            <div className="form-group">
              <label>Sex</label>
              <div className="radio-group">
                <div className="radio-option">
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
                <div className="radio-option">
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

            <div className="form-group">
              <label htmlFor="nationalId">National ID No</label>
              <input
                type="text"
                id="nationalId"
                name="nationalId"
                value={formData.nationalId}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="register-btn">Register</button>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/patient-login">Log in</Link>
        </p>
      </div>

      <div className="hands-background"></div>
    </div>
  );
}
