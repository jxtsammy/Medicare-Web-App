"use client";

import { useState, useEffect, useRef } from "react";
import { LayoutGrid, MessageSquare, Calendar, Settings, LogOut, Bell, ThumbsDown, ChevronDown } from "lucide-react";
import "./Appointment.css";
import { Link } from "react-router";
import logo from "../../assets/Medimock-removebg-preview.png";

export default function AppointmentPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      name: "Huston Carr",
      time: "10 : 20 AM",
      date: "20th March, 2025",
      condition: "Typhoid Fever",
      avatar: "https://i.pravatar.cc/100?img=11",
    },
    {
      id: 2,
      name: "Rozar Marquez",
      time: "12 : 45 PM",
      date: "21st March, 2025",
      condition: "Migraine",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
      id: 3,
      name: "Kyle Brown",
      time: "2 : 30 PM",
      date: "24th March, 2025",
      condition: "Cold & Flu",
      avatar: "https://i.pravatar.cc/100?img=13",
    },
    {
      id: 4,
      name: "Julia Kurry",
      time: "3 : 30 PM",
      date: "24th March, 2025",
      condition: "Diabetes",
      avatar: "https://i.pravatar.cc/100?img=30",
    },
    {
      id: 5,
      name: "Sarah Jones",
      time: "5 : 30 PM",
      date: "24th March, 2025",
      condition: "Sleep Disorder",
      avatar: "https://i.pravatar.cc/100?img=26",
    },
  ]);

  const dateDropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dateDropdownRef.current && !dateDropdownRef.current.contains(event.target)) {
        setShowDateDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDecline = (id) => {
    setAppointments((prevAppointments) =>
      prevAppointments.filter((appointment) => appointment.id !== id)
    );
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    const suffix = getDaySuffix(day);
    return `${day}${suffix} ${month}, ${year}`;
  };

  const getDaySuffix = (day) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const generateDateRange = () => {
    const dates = [];
    const currentDate = new Date();

    for (let i = 12; i > 0; i--) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() - i);
      dates.push(date);
    }

    dates.push(new Date(currentDate));

    for (let i = 1; i <= 12; i++) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() + i);
      dates.push(date);
    }

    return dates;
  };

  const dateRange = generateDateRange();
  const filteredAppointments = appointments.filter(
    (appointment) => appointment.date === formatDate(selectedDate)
  );

  return (
    <div className="appointment-container">
      {/* Sidebar */}
      <div className="appointment-sidebar">
        <nav className="appointment-nav">
          <Link to="/provider-dashboard" className="appointment-nav-item">
            <LayoutGrid size={20} />
            <span>Overview</span>
          </Link>
          <Link to="/chat" className="appointment-nav-item">
            <MessageSquare size={20} />
            <span>Messages</span>
          </Link>
          <Link to="/appointments" className="appointment-nav-item appointment-active">
            <Calendar size={20} />
            <span>Appointments</span>
          </Link>
        </nav>

        <div className="appointment-bottom-nav">
          <Link to="/profile" className="appointment-nav-item">
            <Settings size={20} />
            <span>Settings</span>
          </Link>
          <Link to="/" className="appointment-nav-item">
            <LogOut size={20} />
            <span>Logout</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="appointment-content">
        {/* Header */}
        <div className="appointment-header">
          <div className="appointment-logo">
            <img src={logo} alt="medicare" className="chat-logo-img" />
            <h1 className="chat-logo-title">
              <span className="chat-for-providers">for Providers</span>
            </h1>
          </div>

          <div className="appointment-user-section">
            <div className="appointment-notification">
              <Bell size={20} />
              <span className="appointment-notification-badge">3</span>
            </div>
            <div className="appointment-user">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User Avatar" className="appointment-user-avatar" />
              <div className="appointment-user-info">
                <h3>Kitty Woo Ham</h3>
                <p>Family Nurse Practitioner</p>
              </div>
            </div>
          </div>
        </div>

        {/* Appointments Section */}
        <div className="appointment-main">
          <div className="appointment-title-section">
            <h2 className="appointment-title">Appointments</h2>
            <div className="appointment-date-selector" ref={dateDropdownRef}>
              <button className="appointment-date-button" onClick={() => setShowDateDropdown(!showDateDropdown)}>
                {formatDate(selectedDate)} <ChevronDown size={16} />
              </button>

              {showDateDropdown && (
                <div className="appointment-date-dropdown">
                  {dateRange.map((date, index) => (
                    <div
                      key={index}
                      className={`appointment-date-option ${date.toDateString() === selectedDate.toDateString() ? "appointment-date-selected" : ""}`}
                      onClick={() => {
                        setSelectedDate(date);
                        setShowDateDropdown(false);
                      }}
                    >
                      {formatDate(date)}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="appointment-current-date">{formatDate(selectedDate)}</div>

          <div className="appointment-grid">
            {filteredAppointments.length > 0 ? (
              filteredAppointments.map((appointment) => (
                <div key={appointment.id} className="appointment-card">
                  <div className="appointment-card-content">
                    <div className="appointment-card-avatar">
                      <img src={appointment.avatar || "/placeholder.svg"} alt={appointment.name} />
                    </div>
                    <div className="appointment-card-info">
                      <h3 className="appointment-card-name">{appointment.name}</h3>
                      <p className="appointment-card-time">
                        {appointment.time}, {appointment.date}
                      </p>
                      <p className="appointment-card-condition">{appointment.condition}</p>
                    </div>
                  </div>
                  <div className="appointment-card-actions">
                    <button className="appointment-decline-button" onClick={() => handleDecline(appointment.id)}>
                      <ThumbsDown size={18} />
                      <span>Decline</span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-appointments">No Appointments Today</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
