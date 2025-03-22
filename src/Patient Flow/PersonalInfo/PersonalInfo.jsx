import React from 'react';
import Avatar from './assets/Avatar.png';
import './PersonalInfo.css';
import { Bell, Check } from 'react-feather';

const PersonalInfo = () => {
  return (
    <div className="personal-info-container">
      {/* Header */}
      <header className="personal-info-header">
        <div className="header-content">
          <div className="spacer"></div>
          <div className="user-controls">
            <button className="notification-btn">
              <Bell size={20} />
            </button>
            <div className="user-profile">
              <span className="username">Abednego</span>
              <span className="user-status">Verified User <Check size={16} className="verified-icon" /></span>
              <img 
                src={Avatar}
                alt="User profile" 
                className="user-avatar" 
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="personal-info-main">
        {/* Sidebar Navigation */}
        <nav className="personal-info-nav">
          <ul>
            <li className="active"><a href="#personal">Personal Information</a></li>
            <li><a href="#family">Family member</a></li>
            <li><a href="#login">Login and security</a></li>
            <li><a href="#notification">Notification</a></li>
            <li><a href="#permission">Permission</a></li>
            <li><a href="#privacy">Privacy</a></li>
          </ul>
        </nav>

        {/* Personal Information Content */}
        <div className="personal-info-content">
          <h1 className="page-title">Personal Information</h1>
          
          {/* Full Name */}
          <div className="info-item">
            <div className="info-details">
              <h2 className="info-label">Full Name</h2>
              <p className="info-value">Sallo Samuel</p>
            </div>
            <button className="action-button">Edit</button>
          </div>
          
          {/* Phone Number */}
          <div className="info-item">
            <div className="info-details">
              <h2 className="info-label">Phone number</h2>
              <p className="info-description">
                Adding and verifying your phone number makes booking faster and allows you to turn on two-step verification.
              </p>
            </div>
            <button className="action-button">Add</button>
          </div>
          
          {/* Email Address */}
          <div className="info-item">
            <div className="info-details">
              <h2 className="info-label">Email Address</h2>
              <p className="info-value">SalloSamuel@gmail.com</p>
              <p className="info-description">To secure your email, please verify your email address.</p>
            </div>
          </div>
          
          {/* Address */}
          <div className="info-item">
            <div className="info-details">
              <h2 className="info-label">Address</h2>
              <p className="info-value">Not provide</p>
            </div>
            <button className="action-button">Add</button>
          </div>
          
          {/* Sex */}
          <div className="info-item">
            <div className="info-details">
              <h2 className="info-label">Sex</h2>
              <p className="info-value">Male</p>
            </div>
            <button className="action-button">Edit</button>
          </div>
          
          {/* More Sex and Gender Info */}
          <div className="info-item">
            <div className="info-details">
              <h2 className="info-label">More sex and gender info</h2>
              <p className="info-value">Add more sex and gender info (optional)</p>
            </div>
          </div>
          
          {/* Date of Birth */}
          <div className="info-item">
            <div className="info-details">
              <h2 className="info-label">Date of Birth</h2>
              <p className="info-value">24th November, 2005</p>
            </div>
            <button className="action-button">Edit</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PersonalInfo;