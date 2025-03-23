
import './Appointment.css';
import {
  FaHome,
  FaCommentDots,
  FaCalendarAlt,
  FaUsers,
  FaCog,
  FaHeadset,
  FaBell,
  FaChevronDown,
  FaThumbsUp,
  FaThumbsDown
} from 'react-icons/fa';
import logo from '../../assets/Medimock-removebg-preview.png'


function App() {
  // Sample appointment data
  const appointments = [
    {
      id: 1,
      name: 'Huston Carr',
      time: '10:20 Am',
      date: '20th March, 2025',
      condition: 'Typhoid Fever',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      name: 'Rozar Marquez',
      time: '10:20 Am',
      date: '20th March, 2025',
      condition: 'Typhoid Fever',
      image: 'https://randomuser.me/api/portraits/men/45.jpg'
    },
    {
      id: 3,
      name: 'Kyle Brown',
      time: '10:20 Am',
      date: '20th March, 2025',
      condition: 'Typhoid Fever',
      image: 'https://randomuser.me/api/portraits/men/22.jpg'
    },
    {
      id: 4,
      name: 'Jayden Terry',
      time: '10:20 Am',
      date: '20th March, 2025',
      condition: 'Typhoid Fever',
      image: 'https://randomuser.me/api/portraits/men/67.jpg'
    }
  ];

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <nav className="sidebar-nav">
            <ul>
              <li>
                <a href="#"><FaHome /> Overview</a>
              </li>
              <li>
                <a href="#"><FaCommentDots /> Messages</a>
              </li>
              <li className="active">
                <a href="#"><FaCalendarAlt /> Appointments</a>
              </li>
              <li>
                <a href="#"><FaUsers /> Patients</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="sidebar-bottom">
          <nav className="sidebar-nav">
            <ul>
              <li>
                <a href="#"><FaCog /> Settings</a>
              </li>
              <li>
                <a href="#"><FaHeadset /> Support</a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <div className="logo-container">
            <img src={logo} alt="medicare" className='logo-imge'/>
            <h1 className="logo-title"> <span className="for-providers">for Providers</span></h1>
          </div>
          <div className="user-profile">
            <div className="notification">
              <FaBell />
              <span className="notification-badge">2</span>
            </div>
            <div className="user-info">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="user-avatar" />
              <div className="user-details">
                <h3 className="user-name">Kitty Woo Ham</h3>
                <p className="user-role">Family Nurse Practitioner</p>
              </div>
            </div>
          </div>
        </header>

        {/* Appointments Content */}
        <div className="appointments-container">
          <div className="appointments-header">
            <h2 className="page-title">Appointments</h2>
            <div className="date-selector">
              <div className="current-date">4th March, 2025</div>
              <div className="date-dropdown">
                <button className="date-dropdown-btn">
                  4th March, 2025
                  <FaChevronDown />
                </button>
              </div>
            </div>
          </div>

          <div className="appointments-grid">
            {appointments.map(appointment => (
              <div key={appointment.id} className="appointment-card">
                <div className="appointment-info">
                  <img
                    src={appointment.image || "/placeholder.svg"}
                    alt={appointment.name}
                    className="patient-avatar"
                  />
                  <div className="appointment-details">
                    <h3 className="patient-name">{appointment.name}</h3>
                    <p className="appointment-time">
                      {appointment.time}, {appointment.date}
                    </p>
                    <p className="appointment-condition">{appointment.condition}</p>
                  </div>
                </div>
                <div className="appointment-actions">
                  <button className="action-btn accept-btn">
                    <FaThumbsUp />
                    <span>Accept</span>
                  </button>
                  <button className="action-btn decline-btn">
                    <FaThumbsDown />
                    <span>Decline</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;