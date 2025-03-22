"use client"

import { useState } from "react"
import "./Dashboard.css"
import medicareLogoSrc from '../assets/Medicare-logo.png';
import profilepic from '../assets/profile-pic.png';
import kittywoo from '../../assets/kittywoo.png'
import robert from '../../assets/Robert.png'


// Icons as simple components
const BellIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
)

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
)

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
)

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
)

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
)

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="#FFD700"
    stroke="#FFD700"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
)

const ChatIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
)

const VideoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="23 7 16 12 23 17 23 7"></polygon>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
  </svg>
)

const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
)

const MapIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
    <line x1="8" y1="2" x2="8" y2="18"></line>
    <line x1="16" y1="6" x2="16" y2="22"></line>
  </svg>
)

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
)

const ProfileIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
)

const PackageIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
)

// Provider component
const ProviderCard = ({ name, title, rating, reviews }) => {
  return (
    <div className="provider-card">
      <div className="provider-info">
        <img src={providers.profile} alt={name} className="provider-image" />  
        <div className="chat-icon">
        <ChatIcon /></div>
        <div className="provider-details">
          <h3>{name}</h3>
          <p>{title}</p>
          <div className="rating">
            <StarIcon />
            <span>
              {rating} - {reviews} reviews
            </span>
          </div>
          <div className="video-call">
            <VideoIcon />
            <span>Real-time Video Call</span>
          </div>
          <p className="appointment-label">New patient appointment, Highly Recommended</p>
        </div>
      </div>
    </div>
  )
}

const Dashboard = () => {
  const [searchDoctor, setSearchDoctor] = useState("")
  const [searchCondition, setSearchCondition] = useState("")
  const [searchLocation, setSearchLocation] = useState("")

  const providers = [
    {
      id: 1,
      name: "Alysia Barker, FNP-C",
      title: "Family Nurse",
      rating: "4.97",
      reviews: "118",
      profile: profilepic,
    },
    {
      id: 2,
      name: "Kitty Woo Ham",
      title: "Dentist",
      rating: "4.97",
      reviews: "118",
      profile: kittywoo,
    },
    {
      id: 3,
      name: "Damian Irabor",
      title: "Doctor",
      rating: "4.97",
      reviews: "118",
      profile: robert,
    },
  ]

  return (
    <div className="dashboard">
      <header className="header">
        <div className="logo">
        <img src={medicareLogoSrc} alt="Medicare Logo" className="logo-img" />
        </div>
        <div className="header-actions">
          <button className="notification-btn">
            <BellIcon />
          </button>
          <button className="logout-btn">Logout</button>
        </div>
      </header>

      <div className="search-section">
        <h1 className="header-text">Book local doctors who are always available to help you</h1>
        <div className="search-bar">
          <div className="search-input">
            <UserIcon />
            <input
              type="text"
              placeholder="Name of doctor, specialist"
              value={searchDoctor}
              onChange={(e) => setSearchDoctor(e.target.value)}
            />
          </div>
          <div className="search-divider"></div>
          <div className="search-input">
            <HeartIcon />
            <input
              type="text"
              placeholder="Condition, illness, procedure"
              value={searchCondition}
              onChange={(e) => setSearchCondition(e.target.value)}
            />
          </div>
          <div className="search-divider"></div>
          <div className="search-input">
            <LocationIcon />
            <input
              type="text"
              placeholder="City, state, or zip code"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            />
          </div>
          <button className="search-btn">
            <SearchIcon />
          </button>
        </div>
      </div>

      <div className="providers-section">
        <h2>Suggested Providers</h2>
        <div className="providers-list">
          {providers.map((provider) => (
            <ProviderCard
              key={provider.id}
              name={provider.name}
              title={provider.title}
              rating={provider.rating}
              reviews={provider.reviews}
            />
          ))}
        </div>
      </div>

      <nav className="bottom-nav">
        <button className="nav-item active">
          <HomeIcon />
          <span>Home</span>
        </button>
        <button className="nav-item">
          <ChatIcon />
        </button>
        <button className="nav-item">
          <MapIcon />
        </button>
        <button className="nav-item">
          <BellIcon />
        </button>
        <button className="nav-item">
          <CalendarIcon />
        </button>
        <button className="nav-item">
          <ProfileIcon />
        </button>
      </nav>
    </div>
  )
}

export default Dashboard

