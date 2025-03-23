"use client"

import { useState, useEffect } from "react"
import {
  LayoutGrid,
  MessageSquare,
  Calendar,
  Users,
  Settings,
  LogOut,
  Bell,
  ChevronDown,
  RefreshCw,
  ChevronRight,
} from "lucide-react"
import "./Dashboard.css"
import { Link } from "react-router"
import logo from '../../assets/Medimock-removebg-preview.png';

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Sidebar Component
  const Sidebar = () => (
    <div className="dashboard-sidebar">
      <nav className="dashboard-nav">
        <Link to="/provider-dashboard" className="dashboard-nav-item">
          <LayoutGrid size={20} />
          <span>Overview</span>
        </Link>
        <Link to="/chat" className="dashboard-nav-item">
          <MessageSquare size={20} />
          <span>Messages</span>
        </Link>
        <Link to="/appointments" className="dashboard-nav-item">
          <Calendar size={20} />
          <span>Appointments</span>
        </Link>
      </nav>

      <div className="dashboard-bottom-nav">
        <a href="/profile" className="dashboard-nav-item">
          <Settings size={20} />
          <span>Settings</span>
        </a>
        <Link href="/" className="dashboard-nav-item">
          <LogOut size={20} />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  )

  // Header Component
  const Header = () => (
    <div className="dashboard-header">
      <div className="dashboard-logo">
        <img src={logo} alt="medicare" className='chat-logo-img' />
        <h1 className="chat-logo-title"><span className="chat-for-providers">for Providers</span></h1>
      </div>

      <div className="dashboard-user-section">
        <div className="dashboard-notification">
          <Bell size={20} />
          <span className="dashboard-notification-badge">3</span>
        </div>
        <div className="dashboard-user">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User Avatar" className="dashboard-user-avatar" />
          <div className="dashboard-user-info">
            <h3>Kitty Woo Ham</h3>
            <p>Family Nurse Practitioner</p>
          </div>
        </div>
      </div>
    </div>
  )

  // Stats Cards Component
  const StatsCards = () => (
    <div className="dashboard-stats-grid">
      <div className="dashboard-stat-card">
        <div className="dashboard-stat-icon">
          <Calendar size={24} />
        </div>
        <div className="dashboard-stat-content">
          <h2 className="dashboard-stat-value">240</h2>
          <p className="dashboard-stat-label">Appointments</p>
        </div>
      </div>

      <div className="dashboard-stat-card">
        <div className="dashboard-stat-icon">
          <Users size={24} />
        </div>
        <div className="dashboard-stat-content">
          <h2 className="dashboard-stat-value">240</h2>
          <p className="dashboard-stat-label">Total Patients</p>
        </div>
      </div>

      <div className="dashboard-stat-card">
        <div className="dashboard-stat-icon">
          <MessageSquare size={24} />
        </div>
        <div className="dashboard-stat-content">
          <h2 className="dashboard-stat-value">56</h2>
          <p className="dashboard-stat-label">Consultations</p>
        </div>
      </div>

      <div className="dashboard-stat-card">
        <div className="dashboard-stat-icon">
          <RefreshCw size={24} />
        </div>
        <div className="dashboard-stat-content">
          <h2 className="dashboard-stat-value">100</h2>
          <p className="dashboard-stat-label">Returning Patients</p>
        </div>
      </div>
    </div>
  )

  // Patients Chart Component
  const PatientsChart = () => (
    <div className="dashboard-chart-container">
      <div className="dashboard-chart-header">
        <div className="dashboard-chart-title">
          <Users size={20} />
          <h3>Patients Visits</h3>
        </div>
        <div className="dashboard-chart-legend">
          <div className="dashboard-legend-item">
            <span className="dashboard-legend-dot dashboard-male"></span>
            <span>Male</span>
          </div>
          <div className="dashboard-legend-item">
            <span className="dashboard-legend-dot dashboard-female"></span>
            <span>Female</span>
          </div>
        </div>
        <div className="dashboard-chart-filter">
          <span>Monthly</span>
          <ChevronDown size={16} />
        </div>
      </div>

      <div className="dashboard-chart">
        <div className="dashboard-chart-y-axis">
          <div className="dashboard-y-label">+50</div>
          <div className="dashboard-y-label">40</div>
          <div className="dashboard-y-label">20</div>
          <div className="dashboard-y-label">-5</div>
        </div>
        <div className="dashboard-chart-content">
          <svg viewBox="0 0 600 200" className="dashboard-chart-svg">
            <line x1="0" y1="50" x2="600" y2="50" className="dashboard-chart-grid-line" />
            <line x1="0" y1="100" x2="600" y2="100" className="dashboard-chart-grid-line" />
            <line x1="0" y1="150" x2="600" y2="150" className="dashboard-chart-grid-line" />

            {/* Sample path for the chart line */}
            <path
              d="M0,100 C50,70 100,130 150,100 C200,70 250,130 300,100 C350,70 400,180 450,100 C500,70 550,180 600,100"
              className="dashboard-chart-line"
            />

            {/* Sample data points */}
            <circle cx="0" cy="100" r="4" className="dashboard-chart-point" />
            <circle cx="100" cy="130" r="4" className="dashboard-chart-point" />
            <circle cx="200" cy="70" r="4" className="dashboard-chart-point" />
            <circle cx="300" cy="100" r="4" className="dashboard-chart-point" />
            <circle cx="400" cy="180" r="4" className="dashboard-chart-point" />
            <circle cx="500" cy="70" r="4" className="dashboard-chart-point" />
            <circle cx="600" cy="100" r="4" className="dashboard-chart-point" />
          </svg>
        </div>
        <div className="dashboard-chart-x-axis">
          <div className="dashboard-x-label">Jan</div>
          <div className="dashboard-x-label">Jul</div>
          <div className="dashboard-x-label">Aug</div>
          <div className="dashboard-x-label">Sep</div>
          <div className="dashboard-x-label">Oct</div>
          <div className="dashboard-x-label">Nov</div>
        </div>
      </div>
    </div>
  )

  // Next Appointment Component
  const NextAppointment = () => (
    <div className="dashboard-next-appointment">
      <h3 className="dashboard-section-title">Next Appointment</h3>

      <div className="dashboard-appointment-status">
        <span className="dashboard-status-dot"></span>
        <span className="dashboard-status-text">New Patient</span>
      </div>

      <div className="dashboard-patient-info">
        <img src="https://i.pravatar.cc/80?img=2" alt="Sallo Samuel" className="dashboard-patient-avatar" />
        <div className="dashboard-patient-details">
          <h4 className="dashboard-patient-name">Sallo Samuel M</h4>
          <p className="dashboard-patient-phone">0257256751</p>
          <p className="dashboard-appointment-date">03/04/2025</p>
          <p className="dashboard-appointment-time">9:00 Am</p>
        </div>
      </div>
    </div>
  )

  // Upcoming Patients Component
  const UpcomingPatients = () => {
    const patients = [
      {
        id: 1,
        name: "Huston Carr",
        time: "9 : 30 AM",
        avatar: "https://i.pravatar.cc/50?img=3",
      },
      {
        id: 2,
        name: "Roza Marquez",
        time: "9 : 45 AM",
        avatar: "https://i.pravatar.cc/50?img=4",
      },
      {
        id: 3,
        name: "Jayden Terry",
        time: "10 : 00 AM",
        avatar: "https://i.pravatar.cc/50?img=5",
      },
      {
        id: 4,
        name: "Kyle Brown",
        time: " 1 : 00 PM",
        avatar: "https://i.pravatar.cc/50?img=6",
      },
    ]

    return (
      <div className="dashboard-upcoming-patients">
        <div className="dashboard-timeline">
          {patients.map((patient, index) => (
            <div key={patient.id} className="dashboard-timeline-item">
              <div className="dashboard-timeline-marker">
                <div className="dashboard-timeline-dot"></div>
                {index < patients.length - 1 && <div className="dashboard-timeline-line"></div>}
              </div>
              <div className="dashboard-patient-card">
                <img
                  src={patient.avatar || "/placeholder.svg"}
                  alt={patient.name}
                  className="dashboard-patient-avatar-small"
                />
                <div className="dashboard-patient-card-info">
                  <h4 className="dashboard-patient-card-name">{patient.name}</h4>
                  <p className="dashboard-patient-card-dept">{patient.time}</p>
                </div>
                <ChevronRight size={20} className="dashboard-chevron" />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Calendar Widget Component
  const CalendarWidget = () => {
    // Generate calendar days for October
    const days = Array.from({ length: 31 }, (_, i) => i + 1)
    const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

    return (
      <div className="dashboard-calendar-widget">
        <div className="dashboard-calendar-header">
          <div className="dashboard-calendar-title">
            <Calendar size={20} />
            <h3>Calendar</h3>
          </div>
          <div className="dashboard-calendar-action">
            <span>Open</span>
            <ChevronRight size={16} />
          </div>
        </div>

        <div className="dashboard-calendar">
          <div className="dashboard-calendar-month">October</div>
          <div className="dashboard-calendar-weekdays">
            {weekdays.map((day) => (
              <div key={day} className="dashboard-calendar-weekday">
                {day}
              </div>
            ))}
          </div>
          <div className="dashboard-calendar-days">
            {/* Previous month placeholder days */}
            {[25, 26, 27, 28, 29, 30].map((day) => (
              <div key={`prev-${day}`} className="dashboard-calendar-day dashboard-prev-month">
                {day}
              </div>
            ))}

            {/* Current month days */}
            {days.map((day) => (
              <div key={day} className={`dashboard-calendar-day ${day === 13 ? "dashboard-current-day" : ""}`}>
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Current Time Component
  const CurrentTime = () => {
    const hours = currentTime.getHours().toString().padStart(2, "0")
    const minutes = currentTime.getMinutes().toString().padStart(2, "0")

    return (
      <div className="dashboard-current-time">
        <h3 className="dashboard-time-title">Current Time:</h3>
        <div className="dashboard-time-display">
          <span className="dashboard-time-value">{hours}</span>
          <span className="dashboard-time-separator">:</span>
          <span className="dashboard-time-value">{minutes}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <Header />
        <div className="dashboard-grid">
          <div className="dashboard-stats-section">
            <StatsCards />
          </div>
          <div className="dashboard-chart-section">
            <PatientsChart />
          </div>
          <div className="dashboard-right-section">
            <NextAppointment />
            <UpcomingPatients />
          </div>
          <div className="dashboard-bottom-section">
            <CalendarWidget />
            <CurrentTime />
          </div>
        </div>
      </div>
    </div>
  )
}
