"use client"

import { useState } from 'react'
import { Home, Bell, MessageSquare, Package, User, X, MessageCircle, Phone } from 'lucide-react'
import "./Maps.css"
import {Link} from 'react-router-dom'

// Sample doctor data
const doctors = [
  {
    id: 1,
    name: 'Kitty Woo Ham',
    credentials: 'NP',
    specialty: 'Family Nurse Practitioner',
    rating: 4.87,
    reviews: 199,
    avatar: 'https://i.pravatar.cc/150?img=28',
    location: {
      x: 50,
      y: 50
    },
    online: true
  },
  {
    id: 2,
    name: 'John Smith',
    credentials: 'MD',
    specialty: 'Cardiologist',
    rating: 4.92,
    reviews: 156,
    avatar: 'https://i.pravatar.cc/150?img=60',
    location: {
      x: 30,
      y: 60
    },
    online: true
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    credentials: 'DO',
    specialty: 'Pediatrician',
    rating: 4.75,
    reviews: 128,
    avatar: 'https://i.pravatar.cc/150?img=32',
    location: {
      x: 70,
      y: 40
    },
    online: false
  },
  {
    id: 4,
    name: 'Michael Chen',
    credentials: 'MD',
    specialty: 'Dermatologist',
    rating: 4.89,
    reviews: 210,
    avatar: 'https://i.pravatar.cc/150?img=11',
    location: {
      x: 60,
      y: 70
    },
    online: true
  },
  {
    id: 5,
    name: 'Emily Rodriguez',
    credentials: 'PA',
    specialty: 'Orthopedic Physician Assistant',
    rating: 4.81,
    reviews: 175,
    avatar: 'https://i.pravatar.cc/150?img=45',
    location: {
      x: 40,
      y: 30
    },
    online: true
  },
  {
    id: 6,
    name: 'David Wilson',
    credentials: 'MD',
    specialty: 'Neurologist',
    rating: 4.95,
    reviews: 189,
    avatar: 'https://i.pravatar.cc/150?img=12',
    location: {
      x: 20,
      y: 50
    },
    online: true
  },
  {
    id: 7,
    name: 'Lisa Thompson',
    credentials: 'NP',
    specialty: 'Psychiatric Nurse Practitioner',
    rating: 4.78,
    reviews: 142,
    avatar: 'https://i.pravatar.cc/150?img=25',
    location: {
      x: 80,
      y: 60
    },
    online: true
  }
]

export default function DoctorMap() {
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const userLocation = { x: 50, y: 50 }

  // Sort doctors by distance from user
  const sortedDoctors = [...doctors].sort((a, b) => {
    const distA = calculateDistance(userLocation, a.location)
    const distB = calculateDistance(userLocation, b.location)
    return distA - distB
  })

  // Calculate distance between two points
  function calculateDistance(point1, point2) {
    const dx = point1.x - point2.x
    const dy = point1.y - point2.y
    return Math.sqrt(dx * dx + dy * dy)
  }

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor)
  }

  const handleCloseCard = () => {
    setSelectedDoctor(null)
  }

  return (
    <div className="doctor-map-container">
      <div className="doctor-map-sidebar">
        <Link to="/patient-dasboard">
        <button className="doctor-map-sidebar-button">
          <Home size={30} />
        </button>
        </Link>
        <Link to="/user-notifications">
        <button className="doctor-map-sidebar-button">
          <Bell size={30} />
        </button>
        </Link>
        <Link to="/user-chats">
        <button className="doctor-map-sidebar-button">
          <MessageSquare size={30} />
        </button>
        </Link>
        <Link to="/medi-ai">
        <button className="doctor-map-sidebar-button">
          <Package size={30} />
        </button>
        </Link>
        <Link to="/user-settings">
        <button className="doctor-map-sidebar-button">
          <User size={30} />
        </button>
        </Link>
      </div>

      <div className="doctor-map-content">
        <div className="doctor-map-mock">

          {/* User location marker */}
          <div
            className="doctor-map-user-marker"
            style={{
              left: `${userLocation.x}%`,
              top: `${userLocation.y}%`
            }}
          >
            <div className="doctor-map-user-marker-text">You</div>
          </div>

          {/* Doctor markers */}
          {doctors.map(doctor => (
            <div
              key={doctor.id}
              className="doctor-map-doctor-marker"
              style={{
                left: `${doctor.location.x}%`,
                top: `${doctor.location.y}%`
              }}
              onClick={() => handleDoctorClick(doctor)}
            >
              <img
                src={doctor.avatar || "/placeholder.svg"}
                alt={doctor.name}
                className="doctor-map-doctor-avatar"
              />
              {doctor.online && <div className="doctor-map-online-indicator"></div>}
            </div>
          ))}
        </div>

        {/* Doctor info card */}
        {selectedDoctor && (
          <div className="doctor-map-info-card">
            <div className="doctor-map-info-card-content">
              <img
                src={selectedDoctor.avatar || "/placeholder.svg"}
                alt={selectedDoctor.name}
                className="doctor-map-info-card-avatar"
              />
              <div className="doctor-map-info-card-details">
                <h2 className="doctor-map-info-card-name">
                  {selectedDoctor.name}, {selectedDoctor.credentials}
                </h2>
                <p className="doctor-map-info-card-specialty">
                  {selectedDoctor.specialty}
                </p>
                <div className="doctor-map-info-card-rating">
                  <span className="doctor-map-info-card-rating-star">★</span>
                  <span className="doctor-map-info-card-rating-number">{selectedDoctor.rating}</span>
                  <span className="doctor-map-info-card-rating-count">
                    ({selectedDoctor.reviews} patients rating)
                  </span>
                </div>
              </div>
              <div className="doctor-map-info-card-actions">
                <button className="doctor-map-info-card-action-button">
                  <MessageCircle size={20} />
                </button>
                <button className="doctor-map-info-card-action-button">
                  <Phone size={20} />
                </button>
              </div>
              <button
                className="doctor-map-info-card-close"
                onClick={handleCloseCard}
              >
                <X size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Bottom navigation with doctor avatars */}
        <div className="doctor-map-bottom-nav">
          {sortedDoctors.slice(0, 7).map(doctor => (
            <div
              key={doctor.id}
              className={`doctor-map-bottom-nav-item ${selectedDoctor?.id === doctor.id ? 'doctor-map-bottom-nav-item-active' : ''}`}
              onClick={() => handleDoctorClick(doctor)}
            >
              <div className="doctor-map-bottom-nav-avatar-container">
                <img
                  src={doctor.avatar || "/placeholder.svg"}
                  alt={doctor.name}
                  className="doctor-map-bottom-nav-avatar"
                />
                {doctor.online && <div className="doctor-map-bottom-nav-online-indicator"></div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
