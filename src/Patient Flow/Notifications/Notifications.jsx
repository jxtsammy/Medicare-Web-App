import React, { useState } from 'react';
import './Notifications.css';
import { Bell, Check } from 'react-feather';
import Avatar from './assets/Avatar.png';
const Notifications = () => {
  const [activeTab, setActiveTab] = useState('offers');
  const [notifications, setNotifications] = useState({
    healthcareReminders: true,
    blogNewsletters: true,
    productNews: true,
    newOffers: true,
    unsubscribeAll: false
  });

  const handleCheckboxChange = (name) => {
    if (name === 'unsubscribeAll' && !notifications.unsubscribeAll) {
      // If unsubscribing from all, uncheck all other options
      setNotifications({
        healthcareReminders: false,
        blogNewsletters: false,
        productNews: false,
        newOffers: false,
        unsubscribeAll: true
      });
    } else if (name === 'unsubscribeAll' && notifications.unsubscribeAll) {
      // If unchecking unsubscribe all, don't change other settings
      setNotifications({
        ...notifications,
        unsubscribeAll: false
      });
    } else {
      // For other checkboxes, toggle their state and ensure unsubscribeAll is false
      setNotifications({
        ...notifications,
        [name]: !notifications[name],
        unsubscribeAll: false
      });
    }
  };

  const handleSave = () => {
    alert('Notification preferences saved!');
  };

  return (
    <div className="notifications-container">
      {/* Header */}
      <header className="notifications-header">
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
      <main className="notifications-main">
        {/* Sidebar Navigation */}
        <nav className="notifications-nav">
          <ul>
            <li><a href="#personal">Personal Information</a></li>
            <li><a href="#family">Family member</a></li>
            <li><a href="#login">Login and security</a></li>
            <li className="active"><a href="#notification">Notification</a></li>
            <li><a href="#permission">Permission</a></li>
            <li><a href="#insurance">Insurance and id card</a></li>
            <li><a href="#privacy">Privacy</a></li>
          </ul>
        </nav>

        {/* Notifications Content */}
        <div className="notifications-content">
          <h1 className="page-title">Notifications</h1>
          
          {/* Tabs */}
          <div className="notification-tabs">
            <button 
              className={`tab-button ${activeTab === 'offers' ? 'active' : ''}`}
              onClick={() => setActiveTab('offers')}
            >
              Offers and Updates
            </button>
            <button 
              className={`tab-button ${activeTab === 'appointments' ? 'active' : ''}`}
              onClick={() => setActiveTab('appointments')}
            >
              Appointments
            </button>
          </div>
          
          {/* Email Notifications */}
          <section className="notification-section">
            <h2 className="section-title">Email</h2>
            
            <div className="notification-option">
              <label className="checkbox-container">
                <input 
                  type="checkbox" 
                  checked={notifications.healthcareReminders} 
                  onChange={() => handleCheckboxChange('healthcareReminders')}
                />
                <span className="checkbox-label">Healthcare reminders</span>
              </label>
              <p className="option-description">Reminders to help you stay on top of preventative care appointments</p>
            </div>
            
            <div className="notification-option">
              <label className="checkbox-container">
                <input 
                  type="checkbox" 
                  checked={notifications.blogNewsletters} 
                  onChange={() => handleCheckboxChange('blogNewsletters')}
                />
                <span className="checkbox-label">Blog newsletters</span>
              </label>
              <p className="option-description">Our latest post to our blog, Paper Gown</p>
            </div>
            
            <div className="notification-option">
              <label className="checkbox-container">
                <input 
                  type="checkbox" 
                  checked={notifications.productNews} 
                  onChange={() => handleCheckboxChange('productNews')}
                />
                <span className="checkbox-label">Product news</span>
              </label>
              <p className="option-description">Getting started, new features and latest product updates from MyApp</p>
            </div>
            
            <div className="notification-option">
              <label className="checkbox-container">
                <input 
                  type="checkbox" 
                  checked={notifications.newOffers} 
                  onChange={() => handleCheckboxChange('newOffers')}
                />
                <span className="checkbox-label">MyApp new offers</span>
              </label>
              <p className="option-description">News, promotion s, events for you.</p>
            </div>
            
            <div className="notification-option">
              <label className="checkbox-container">
                <input 
                  type="checkbox" 
                  checked={notifications.unsubscribeAll} 
                  onChange={() => handleCheckboxChange('unsubscribeAll')}
                />
                <span className="checkbox-label">I nolonger wish to receive any future marketing emails</span>
              </label>
              <p className="option-description">If you wish to unsubscribe from all marketing emails from MyApp, check the box and click the save button.</p>
            </div>
          </section>
          
          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="save-button" onClick={handleSave}>save</button>
            <button className="cancel-button">Cancel</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Notifications;