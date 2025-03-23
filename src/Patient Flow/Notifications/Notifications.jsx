"use client"

import { useState } from "react"
import "./Notifications.css"
import { Bell, Check } from "react-feather"
import Avatar from "../../assets/Avatar.png"

const Notifications = () => {
  const [activeTab, setActiveTab] = useState("offers")
  const [notifications, setNotifications] = useState({
    healthcareReminders: true,
    blogNewsletters: true,
    productNews: true,
    newOffers: true,
    unsubscribeAll: false,
  })

  const handleCheckboxChange = (name) => {
    if (name === "unsubscribeAll" && !notifications.unsubscribeAll) {
      // If unsubscribing from all, uncheck all other options
      setNotifications({
        healthcareReminders: false,
        blogNewsletters: false,
        productNews: false,
        newOffers: false,
        unsubscribeAll: true,
      })
    } else if (name === "unsubscribeAll" && notifications.unsubscribeAll) {
      // If unchecking unsubscribe all, don't change other settings
      setNotifications({
        ...notifications,
        unsubscribeAll: false,
      })
    } else {
      // For other checkboxes, toggle their state and ensure unsubscribeAll is false
      setNotifications({
        ...notifications,
        [name]: !notifications[name],
        unsubscribeAll: false,
      })
    }
  }

  const handleSave = () => {
    alert("Notification preferences saved!")
  }

  return (
    <div className="Notifications-container">
      {/* Header */}
      <header className="Notifications-header">
        <div className="Notifications-header-content">
          <div className="Notifications-spacer"></div>
          <div className="Notifications-user-controls">
            <button className="Notifications-notification-btn">
              <Bell size={20} />
            </button>
            <div className="Notifications-user-profile">
              <span className="Notifications-username">Abednego</span>
              <span className="Notifications-user-status">
                Verified User <Check size={16} className="Notifications-verified-icon" />
              </span>
              <img src={Avatar || "/placeholder.svg"} alt="User profile" className="Notifications-user-avatar" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="Notifications-main">
        {/* Sidebar Navigation */}
        <nav className="Notifications-nav">
          <ul>
            <li>
              <a href="#personal">Personal Information</a>
            </li>
            <li>
              <a href="#family">Family member</a>
            </li>
            <li>
              <a href="#login">Login and security</a>
            </li>
            <li className="Notifications-active">
              <a href="#notification">Notification</a>
            </li>
            <li>
              <a href="#permission">Permission</a>
            </li>
            <li>
              <a href="#insurance">Insurance and id card</a>
            </li>
            <li>
              <a href="#privacy">Privacy</a>
            </li>
          </ul>
        </nav>

        {/* Notifications Content */}
        <div className="Notifications-content">
          <h1 className="Notifications-page-title">Notifications</h1>

          {/* Tabs */}
          <div className="Notifications-tabs">
            <button
              className={`Notifications-tab-button ${activeTab === "offers" ? "Notifications-active" : ""}`}
              onClick={() => setActiveTab("offers")}
            >
              Offers and Updates
            </button>
            <button
              className={`Notifications-tab-button ${activeTab === "appointments" ? "Notifications-active" : ""}`}
              onClick={() => setActiveTab("appointments")}
            >
              Appointments
            </button>
          </div>

          {/* Email Notifications */}
          <section className="Notifications-section">
            <h2 className="Notifications-section-title">Email</h2>

            <div className="Notifications-option">
              <label className="Notifications-checkbox-container">
                <input
                  type="checkbox"
                  checked={notifications.healthcareReminders}
                  onChange={() => handleCheckboxChange("healthcareReminders")}
                />
                <span className="Notifications-checkbox-label">Healthcare reminders</span>
              </label>
              <p className="Notifications-option-description">
                Reminders to help you stay on top of preventative care appointments
              </p>
            </div>

            <div className="Notifications-option">
              <label className="Notifications-checkbox-container">
                <input
                  type="checkbox"
                  checked={notifications.blogNewsletters}
                  onChange={() => handleCheckboxChange("blogNewsletters")}
                />
                <span className="Notifications-checkbox-label">Blog newsletters</span>
              </label>
              <p className="Notifications-option-description">Our latest post to our blog, Paper Gown</p>
            </div>

            <div className="Notifications-option">
              <label className="Notifications-checkbox-container">
                <input
                  type="checkbox"
                  checked={notifications.productNews}
                  onChange={() => handleCheckboxChange("productNews")}
                />
                <span className="Notifications-checkbox-label">Product news</span>
              </label>
              <p className="Notifications-option-description">
                Getting started, new features and latest product updates from MyApp
              </p>
            </div>

            <div className="Notifications-option">
              <label className="Notifications-checkbox-container">
                <input
                  type="checkbox"
                  checked={notifications.newOffers}
                  onChange={() => handleCheckboxChange("newOffers")}
                />
                <span className="Notifications-checkbox-label">MyApp new offers</span>
              </label>
              <p className="Notifications-option-description">News, promotion s, events for you.</p>
            </div>

            <div className="Notifications-option">
              <label className="Notifications-checkbox-container">
                <input
                  type="checkbox"
                  checked={notifications.unsubscribeAll}
                  onChange={() => handleCheckboxChange("unsubscribeAll")}
                />
                <span className="Notifications-checkbox-label">
                  I nolonger wish to receive any future marketing emails
                </span>
              </label>
              <p className="Notifications-option-description">
                If you wish to unsubscribe from all marketing emails from MyApp, check the box and click the save
                button.
              </p>
            </div>
          </section>

          {/* Action Buttons */}
          <div className="Notifications-action-buttons">
            <button className="Notifications-save-button" onClick={handleSave}>
              save
            </button>
            <button className="Notifications-cancel-button">Cancel</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Notifications
