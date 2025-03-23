import "./Profile-settings.css"
import { FaCommentDots, FaCalendarAlt, FaUsers, FaCog, FaHeadset, FaMapMarkerAlt, FaPencilAlt } from "react-icons/fa"
import { BsGrid } from "react-icons/bs"

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <nav className="sidebar-nav">
            <ul>
              <li>
                <a href="#">
                  <span className="icon-container">
                    <BsGrid />
                  </span>{" "}
                  <span className="nav-text">Overview</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-container">
                    <FaCommentDots />
                  </span>{" "}
                  <span className="nav-text">Messages</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-container">
                    <FaCalendarAlt />
                  </span>{" "}
                  <span className="nav-text">Appointments</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-container">
                    <FaUsers />
                  </span>{" "}
                  <span className="nav-text">Patients</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="sidebar-bottom">
          <nav className="sidebar-nav">
            <ul>
              <li className="active">
                <a href="#">
                  <span className="icon-container">
                    <FaCog />
                  </span>{" "}
                  <span className="nav-text">Settings</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon-container">
                    <FaHeadset />
                  </span>{" "}
                  <span className="nav-text">Support</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1 className="page-title">Profile Settings</h1>

        {/* Profile Card */}
        <div className="profile-card">
          <div className="profile-banner">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Desktop%20-%201-JMuxjUB2dtmpNeeGZtrBERIxAxCwf1.png"
              alt="Medical illustration"
              className="banner-image"
            />
          </div>
          <div className="profile-info-container">
            <div className="profile-avatar-container">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Kitty Woo Ham"
                className="profile-avatar"
              />
            </div>
            <div className="profile-info">
              <h2 className="profile-name">Kitty Woo Ham</h2>
              <p className="profile-role">Family Nurse Practitioner</p>
              <p className="profile-contact">kittywooham@gmail.com | +233 257256751</p>

              <div className="profile-location">
                <FaMapMarkerAlt className="location-icon" />
                <span>Semarang, Indonesia</span>
              </div>
            </div>
            <button className="edit-profile-btn">
              <FaPencilAlt /> Edit Profile
            </button>
          </div>
        </div>

        {/* Profile Bio */}
        <div className="profile-bio-card">
          <h2 className="bio-title">Profile Bio</h2>
          <div className="bio-content">
            <p>
              Specific Tasks Depend On Your Speciality – For Instance, The Work Surgeons Carry Out On A Daily Basis Is
              Completely Different From The Workload Of An Accident And Emergency (A&E) Doctor.
            </p>

            <p>Regardless Of Your Speciality, As A Hospital Doctor You Will Need To:</p>

            <ul className="bio-list">
              <li>Monitor And Provide General Care To Patients On Hospital Wards And In Outpatient Clinics</li>
              <li>Admit Patients Requiring Special Care, Followed By Investigations And Treatment</li>
              <li>Examine And Talk To Patients To Diagnose Their Medical Conditions</li>
              <li>Carry Out Specific Procedures, E.G. Performing Operations And Specialist Investigations</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
