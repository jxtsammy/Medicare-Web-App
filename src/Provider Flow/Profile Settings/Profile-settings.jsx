import { useLocation, Link } from "react-router-dom";
import { LayoutGrid, MessageSquare, Calendar, Settings, LogOut, MapPin, Edit } from "lucide-react";
import "./Profile-settings.css";
import cover from '../../assets/Medimock.png';

export default function ProfileSettings() {
  const location = useLocation();
  const profileData = location.state || {};

  return (
    <div className="provider-app-container">
      {/* Sidebar */}
      <div className="provider-sidebar">
        <nav className="provider-sidebar-nav">
          <div className="provider-nav-item">
            <Link to="/provider-dashboard" className="provider-nav-icon">
              <LayoutGrid size={24} />
            </Link>
          </div>
          <div className="provider-nav-item">
            <Link to="/chat" className="provider-nav-icon">
              <MessageSquare size={24} />
            </Link>
          </div>
          <div className="provider-nav-item">
            <Link to="/appointments" className="provider-nav-icon">
              <Calendar size={24} />
            </Link>
          </div>
          <div className="provider-nav-spacer"></div>
          <div className="provider-nav-item provider-active">
            <Link to="/profile" className="provider-nav-icon">
              <Settings size={24} />
            </Link>
          </div>
          <div className="provider-nav-item">
            <Link to="/" className="provider-nav-icon">
              <LogOut size={24} />
            </Link>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="provider-main-content">
        <h1 className="provider-page-title">Profile Settings</h1>

        <div className="provider-content-scroll-area">
          {/* Profile Card */}
          <div className="provider-profile-card">
            <div className="provider-profile-banner">
              <img src={profileData.coverImage || cover} alt="Medical illustration" className="provider-banner-image" />
            </div>

            <div className="provider-profile-info-section">
              <div className="provider-profile-avatar-container">
                <img src={profileData.profileImage || "https://randomuser.me/api/portraits/women/44.jpg"}
                     alt="Profile avatar"
                     className="provider-avatar-image" />
              </div>

              <div className="provider-profile-details">
                <h2 className="provider-profile-name">{profileData.fullName || "Kitty Woo Ham"}</h2>
                <p className="provider-profile-title">{profileData.speciality || "Family Nurse Practitioner"}</p>
                <p className="provider-profile-contact">
                  {profileData.email || "kittywooham@gmail.com"} | {profileData.phoneNumber || "+233 257256751"}
                </p>
              </div>

              <Link to="/edit-profile">
                <button className="provider-edit-profile-btn">
                  <Edit size={18} />
                  <span>Edit Profile</span>
                </button>
              </Link>
            </div>

            <div className="provider-profile-location-container">
              <div className="provider-profile-location">
                <MapPin size={16} />
                <span>{profileData.location || "Semarang, Indonesia"}</span>
              </div>
            </div>
          </div>

          {/* Profile Bio */}
          <div className="provider-profile-bio-card">
            <h2 className="provider-bio-title">Profile Bio</h2>
            <div className="provider-bio-content">
              <p>{profileData.bio || "No bio available."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
