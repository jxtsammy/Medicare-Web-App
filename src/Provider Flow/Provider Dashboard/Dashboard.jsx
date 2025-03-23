	import './Dashboard.css';
import {
  FaHome,
  FaCommentDots,
  FaCalendarAlt,
  FaUsers,
  FaCog,
  FaHeadset,
  FaBell,
  FaChevronRight,
  FaArrowRight
} from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import logo from '../../assets/Medimock-removebg-preview.png'

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {


  // Chart data
  const chartData = {
    labels: ['Jan', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [
      {
        label: 'Male',
        data: [30, 15, 40, 20, 35, 25],
        borderColor: '#4361ee',
        backgroundColor: 'rgba(67, 97, 238, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Female',
        data: [20, 30, -5, 25, 15, -5],
        borderColor: '#f72585',
        backgroundColor: 'rgba(247, 37, 133, 0.1)',
        tension: 0.4,
        hidden: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: -10,
        max: 50,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
        },
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  // Upcoming patients
  const upcomingPatients = [
    {
      id: 1,
      name: 'Huston Carr',
      department: 'Heart Department',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 2,
      name: 'Roza Marquez',
      department: 'Heart Department',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    {
      id: 3,
      name: 'Jayden Terry',
      department: 'Heart Department',
      image: 'https://randomuser.me/api/portraits/men/67.jpg',
    },
  ];

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <nav className="sidebar-nav">
            <ul>
              <li className="active">
                <a href="#"><FaHome /> Overview</a>
              </li>
              <li>
                <a href="#"><FaCommentDots /> Messages</a>
              </li>
              <li>
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

        {/* Dashboard Content */}
        <div className="dashboard">
          <div className="dashboard-left">
            {/* Stats Cards */}
            <div className="stats-container">
              <div className="stat-card">
                <div className="stat-icon appointments-icon">
                  <FaCalendarAlt />
                </div>
                <div className="stat-info">
                  <h2 className="stat-value">240</h2>
                  <p className="stat-label">Appointments</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon patients-icon">
                  <FaUsers />
                </div>
                <div className="stat-info">
                  <h2 className="stat-value">240</h2>
                  <p className="stat-label">Total Patients</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon consultations-icon">
                  <FaCommentDots />
                </div>
                <div className="stat-info">
                  <h2 className="stat-value">56</h2>
                  <p className="stat-label">Consultations</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon returning-icon">
                  <FaUsers />
                </div>
                <div className="stat-info">
                  <h2 className="stat-value">100</h2>
                  <p className="stat-label">Returning Patients</p>
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="chart-container">
              <div className="chart-header">
                <div className="chart-title">
                  <FaUsers className="chart-icon" />
                  <h3>Patients Visits</h3>
                </div>
                <div className="chart-legend">
                  <div className="legend-item">
                    <span className="legend-dot male"></span>
                    <span>Male</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-dot female"></span>
                    <span>Female</span>
                  </div>
                </div>
                <div className="chart-filter">
                  <select>
                    <option>Monthly</option>
                    <option>Weekly</option>
                    <option>Daily</option>
                  </select>
                  <FaChevronRight className="select-icon" />
                </div>
              </div>
              <div className="chart">
                <Line data={chartData} options={chartOptions} height={200} />
              </div>
            </div>
          </div>

          <div className="dashboard-right">
            {/* Next Appointment */}
            <div className="next-appointment">
              <h3 className="section-title">Next Appointment</h3>
              <div className="patient-info">
                <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Patient" className="patient-avatar" />
                <div className="patient-details">
                  <h4 className="patient-name">Sallo Samuel M</h4>
                  <p className="patient-id">0257256751</p>
                  <p className="appointment-date">03/04/2025</p>
                  <p className="appointment-time">9:00 Am</p>
                </div>
              </div>
            </div>

            {/* Upcoming Patients */}
            <div className="upcoming-patients">
              <div className="timeline">
                {upcomingPatients.map((patient, index) => (
                  <div key={patient.id} className="timeline-item">
                    <div className="timeline-marker">
                      <div className="timeline-dot"></div>
                      {index < upcomingPatients.length - 1 && <div className="timeline-line"></div>}
                    </div>
                    <div className="patient-card">
                      <img src={patient.image || "/placeholder.svg"} alt={patient.name} className="patient-avatar" />
                      <div className="patient-details">
                        <h4 className="patient-name">{patient.name}</h4>
                        <p className="patient-department">{patient.department}</p>
                      </div>
                      <FaArrowRight className="card-arrow" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;