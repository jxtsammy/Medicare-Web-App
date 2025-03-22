import React from 'react';
import './LoginSettings.css';
import { Bell, Check } from 'react-feather';
import Avatar from './assets/Avatar.png';

const LoginSettings = () => {
  return (
    <div className="account-settings-container">
      {/* Header */}
      <header className="settings-header">
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
      <main className="settings-main">
        {/* Sidebar Navigation */}
        <nav className="settings-nav">
          <ul>
            <li><a href="#personal">Personal Information</a></li>
            <li><a href="#family">Family member</a></li>
            <li className="active"><a href="#login">Login and security</a></li>
            <li><a href="#notification">Notification</a></li>
            <li><a href="#permission">Permission</a></li>
            <li><a href="#insurance">Insurance and id card</a></li>
            <li><a href="#privacy">Privacy</a></li>
          </ul>
        </nav>

        {/* Settings Content */}
        <div className="settings-content">
          {/* Login Section */}
          <section className="settings-section">
            <h2 className="section-title">Login</h2>
            
            <div className="settings-item">
              <div className="item-details">
                <h3>Password</h3>
                <p className="item-description">set a strong password to secure your account</p>
              </div>
              <div className="item-action">
                <button className="action-button">Change password</button>
              </div>
            </div>
          </section>

          {/* Connected Account Section */}
          <section className="settings-section">
            <div className="settings-item">
              <div className="item-details">
                <h3>Connected Account</h3>
                <p className="item-description">You have connected to Google</p>
              </div>
            </div>
          </section>

          {/* Security Section */}
          <section className="settings-section">
            <h2 className="section-title">Security</h2>
            
            <div className="settings-item">
              <div className="item-details">
                <h3>Phone number</h3>
                <p className="item-description">Adding and verifying phone number makes booking easier and faster</p>
              </div>
              <div className="item-action">
                <button className="action-button">Add</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default LoginSettings;