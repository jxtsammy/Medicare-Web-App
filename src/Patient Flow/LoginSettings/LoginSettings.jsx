import './LoginSettings.css';
import { Bell, Check } from 'react-feather';
import Avatar from '../../assets/Avatar.png';

const LoginSettings = () => {
  return (
    <div className="login-settings-container">
      {/* Header */}
      <header className="login-settings-header">
        <div className="login-settings-header-content">
          <div className="login-settings-spacer"></div>
          <div className="login-settings-user-controls">
            <button className="login-settings-notification-btn">
              <Bell size={20} />
            </button>
            <div className="login-settings-user-profile">
              <span className="login-settings-username">Abednego</span>
              <span className="login-settings-user-status">Verified User <Check size={16} className="login-settings-verified-icon" /></span>
              <img
                src={Avatar || "/placeholder.svg"}
                alt="User profile"
                className="login-settings-user-avatar"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="login-settings-main">
        {/* Sidebar Navigation */}
        <nav className="login-settings-nav">
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
        <div className="login-settings-content">
          {/* Login Section */}
          <section className="login-settings-section">
            <h2 className="login-settings-section-title">Login</h2>

            <div className="login-settings-item">
              <div className="login-settings-item-details">
                <h3>Password</h3>
                <p className="login-settings-item-description">set a strong password to secure your account</p>
              </div>
              <div className="login-settings-item-action">
                <button className="login-settings-action-button">Change password</button>
              </div>
            </div>
          </section>

          {/* Connected Account Section */}
          <section className="login-settings-section">
            <div className="login-settings-item">
              <div className="login-settings-item-details">
                <h3>Connected Account</h3>
                <p className="login-settings-item-description">You have connected to Google</p>
              </div>
            </div>
          </section>

          {/* Security Section */}
          <section className="login-settings-section">
            <h2 className="login-settings-section-title">Security</h2>

            <div className="login-settings-item">
              <div className="login-settings-item-details">
                <h3>Phone number</h3>
                <p className="login-settings-item-description">Adding and verifying phone number makes booking easier and faster</p>
              </div>
              <div className="login-settings-item-action">
                <button className="login-settings-action-button">Add</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default LoginSettings;