// App.js
import  { useState } from 'react';
import './Profile-bio.css';
import { FaPencilAlt } from 'react-icons/fa';
// import medicareLogoImg from './assets/medicare-logo.png';
// import profileImg from './assets/profile-img.jpg';
// import coverImg from './assets/cover-img.jpg';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
    speciality: '',
    location: '',
    bio: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo-container">
          <div className="logo">
            <span className="logo-text">MC</span>
          </div>
          <h1 className="title">Medicare <span className="subtitle">for Providers</span></h1>
        </div>
        <div className="profile-header">
          <img
            src={profileImg || "/placeholder.svg"}
            alt="Profile"
            className="header-profile-pic"
          />
          <div className="profile-info">
            <h3>Kitty Woo Ham</h3>
            <p>Family Nurse Practitioner</p>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="profile-container">
          <h2 className="section-title">Profile Bio</h2>
          <p className="section-description">Your Profile Will Be Displayed Publicly So Becareful What You Share</p>

          <div className="profile-section">
            <h3 className="subsection-title">Profile Picture & Cover</h3>
            <div className="cover-photo-container">
              <img
                src={coverImg || "/placeholder.svg"}
                alt="Cover"
                className="cover-photo"
              />
              <div className="edit-cover-button">
                <FaPencilAlt />
              </div>
              <div className="profile-pic-container">
                <img
                  src={profileImg || "/placeholder.svg"}
                  alt="Profile"
                  className="profile-pic"
                />
                <div className="edit-profile-button">
                  <FaPencilAlt />
                </div>
              </div>
            </div>
          </div>

          <form>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="speciality">Speciality</label>
              <input
                type="text"
                id="speciality"
                name="speciality"
                value={formData.speciality}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="5"
              />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;