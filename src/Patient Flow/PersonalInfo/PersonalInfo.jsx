import Avatar from "../../assets/Avatar.png"
import "./PersonalInfo.css"
import { Bell, Check } from "react-feather"

const PersonalInfo = () => {
  return (
    <div className="PersonalInfo-container">
      {/* Header */}
      <header className="PersonalInfo-header">
        <div className="PersonalInfo-header-content">
          <div className="PersonalInfo-spacer"></div>
          <div className="PersonalInfo-user-controls">
            <button className="PersonalInfo-notification-btn">
              <Bell size={20} />
            </button>
            <div className="PersonalInfo-user-profile">
              <span className="PersonalInfo-username">Abednego</span>
              <span className="PersonalInfo-user-status">
                Verified User <Check size={16} className="PersonalInfo-verified-icon" />
              </span>
              <img src={Avatar || "/placeholder.svg"} alt="User profile" className="PersonalInfo-user-avatar" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="PersonalInfo-main">
        {/* Sidebar Navigation */}
        <nav className="PersonalInfo-nav">
          <ul>
            <li className="PersonalInfo-active">
              <a href="#personal">Personal Information</a>
            </li>
            <li>
              <a href="#family">Family member</a>
            </li>
            <li>
              <a href="#login">Login and security</a>
            </li>
            <li>
              <a href="#notification">Notification</a>
            </li>
            <li>
              <a href="#permission">Permission</a>
            </li>
            <li>
              <a href="#privacy">Privacy</a>
            </li>
          </ul>
        </nav>

        {/* Personal Information Content */}
        <div className="PersonalInfo-content">
          <h1 className="PersonalInfo-page-title">Personal Information</h1>

          {/* Full Name */}
          <div className="PersonalInfo-info-item">
            <div className="PersonalInfo-info-details">
              <h2 className="PersonalInfo-info-label">Full Name</h2>
              <p className="PersonalInfo-info-value">Sallo Samuel</p>
            </div>
            <button className="PersonalInfo-action-button">Edit</button>
          </div>

          {/* Phone Number */}
          <div className="PersonalInfo-info-item">
            <div className="PersonalInfo-info-details">
              <h2 className="PersonalInfo-info-label">Phone number</h2>
              <p className="PersonalInfo-info-description">
                Adding and verifying your phone number makes booking faster and allows you to turn on two-step
                verification.
              </p>
            </div>
            <button className="PersonalInfo-action-button">Add</button>
          </div>

          {/* Email Address */}
          <div className="PersonalInfo-info-item">
            <div className="PersonalInfo-info-details">
              <h2 className="PersonalInfo-info-label">Email Address</h2>
              <p className="PersonalInfo-info-value">SalloSamuel@gmail.com</p>
              <p className="PersonalInfo-info-description">To secure your email, please verify your email address.</p>
            </div>
          </div>

          {/* Address */}
          <div className="PersonalInfo-info-item">
            <div className="PersonalInfo-info-details">
              <h2 className="PersonalInfo-info-label">Address</h2>
              <p className="PersonalInfo-info-value">Not provide</p>
            </div>
            <button className="PersonalInfo-action-button">Add</button>
          </div>

          {/* Sex */}
          <div className="PersonalInfo-info-item">
            <div className="PersonalInfo-info-details">
              <h2 className="PersonalInfo-info-label">Sex</h2>
              <p className="PersonalInfo-info-value">Male</p>
            </div>
            <button className="PersonalInfo-action-button">Edit</button>
          </div>

          {/* More Sex and Gender Info */}
          <div className="PersonalInfo-info-item">
            <div className="PersonalInfo-info-details">
              <h2 className="PersonalInfo-info-label">More sex and gender info</h2>
              <p className="PersonalInfo-info-value">Add more sex and gender info (optional)</p>
            </div>
          </div>

          {/* Date of Birth */}
          <div className="PersonalInfo-info-item">
            <div className="PersonalInfo-info-details">
              <h2 className="PersonalInfo-info-label">Date of Birth</h2>
              <p className="PersonalInfo-info-value">24th November, 2005</p>
            </div>
            <button className="PersonalInfo-action-button">Edit</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PersonalInfo
