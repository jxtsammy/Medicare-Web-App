"use client"

import { useState, useEffect } from "react"
import "./Dashboard.css"
import medicareLogoSrc from './assets/Medicare-logo.png';
import profilepic from './assets/profile-pic.png';

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
const ProviderCard = ({ name, title, rating, reviews, onClick }) => {
  return (
    <div className="provider-card" onClick={onClick}>
      <div className="provider-info">
        <img src={profilepic || "/placeholder.svg"} alt={name} className="provider-image" />  
        <div className="chat-icon">
          <ChatIcon />
        </div>
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
  const [filteredProviders, setFilteredProviders] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [activeNav, setActiveNav] = useState("home")
  const [showProviderDetails, setShowProviderDetails] = useState(null)
  const [sortOption, setSortOption] = useState("relevance")

  // Enhanced provider data with conditions and locations
  const allProviders = [
    {
      id: 1,
      name: "Alysia Barker, FNP-C",
      title: "Family Nurse Practitioner",
      rating: "4.97",
      reviews: "118",
      conditions: ["diabetes", "hypertension", "asthma", "allergies", "common cold"],
      locations: ["New York, NY", "10001", "Manhattan"],
      specialties: ["family medicine", "primary care", "preventive care"]
    },
    {
      id: 2,
      name: "Kitty Woo Ham",
      title: "Dentist",
      rating: "4.87",
      reviews: "199",
      conditions: ["cavities", "gum disease", "tooth pain", "dental cleaning", "root canal"],
      locations: ["Los Angeles, CA", "90001", "Downtown LA"],
      specialties: ["general dentistry", "cosmetic dentistry", "pediatric dentistry"]
    },
    {
      id: 3,
      name: "Damian Irabor",
      title: "Cardiologist",
      rating: "4.92",
      reviews: "156",
      conditions: ["heart disease", "hypertension", "arrhythmia", "chest pain", "heart failure"],
      locations: ["Chicago, IL", "60601", "Downtown Chicago"],
      specialties: ["cardiology", "heart health", "vascular medicine"]
    },
    {
      id: 4,
      name: "Sarah Johnson, MD",
      title: "Dermatologist",
      rating: "4.85",
      reviews: "142",
      conditions: ["acne", "eczema", "psoriasis", "skin cancer", "rashes"],
      locations: ["Miami, FL", "33101", "South Beach"],
      specialties: ["dermatology", "skin care", "cosmetic procedures"]
    },
    {
      id: 5,
      name: "Michael Chen, DO",
      title: "Orthopedic Surgeon",
      rating: "4.91",
      reviews: "178",
      conditions: ["fractures", "joint pain", "arthritis", "sports injuries", "back pain"],
      locations: ["Boston, MA", "02108", "Downtown Boston"],
      specialties: ["orthopedics", "sports medicine", "joint replacement"]
    }
  ]

  // Initialize filtered providers with all providers
  useEffect(() => {
    setFilteredProviders(allProviders)
  }, [])

  // Apply sorting to providers
  const sortProviders = (providers, option) => {
    const sortedProviders = [...providers];
    
    switch(option) {
      case "rating":
        // Sort by rating (highest first)
        sortedProviders.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
        break;
      case "reviews":
        // Sort by number of reviews (highest first)
        sortedProviders.sort((a, b) => parseInt(b.reviews) - parseInt(a.reviews));
        break;
      case "relevance":
      default:
        // For relevance, we'll prioritize providers that match more search criteria
        if (searchDoctor || searchCondition || searchLocation) {
          sortedProviders.sort((a, b) => {
            let aScore = 0;
            let bScore = 0;
            
            // Check doctor/specialty match
            if (searchDoctor) {
              if (a.name.toLowerCase().includes(searchDoctor.toLowerCase()) || 
                  a.title.toLowerCase().includes(searchDoctor.toLowerCase()) ||
                  a.specialties.some(s => s.toLowerCase().includes(searchDoctor.toLowerCase()))) {
                aScore += 3;
              }
              if (b.name.toLowerCase().includes(searchDoctor.toLowerCase()) || 
                  b.title.toLowerCase().includes(searchDoctor.toLowerCase()) ||
                  b.specialties.some(s => s.toLowerCase().includes(searchDoctor.toLowerCase()))) {
                bScore += 3;
              }
            }
            
            // Check condition match
            if (searchCondition) {
              const aConditionMatches = a.conditions.filter(c => 
                c.toLowerCase().includes(searchCondition.toLowerCase())).length;
              const bConditionMatches = b.conditions.filter(c => 
                c.toLowerCase().includes(searchCondition.toLowerCase())).length;
              
              aScore += aConditionMatches * 2;
              bScore += bConditionMatches * 2;
            }
            
            // Check location match
            if (searchLocation) {
              const aLocationMatches = a.locations.filter(l => 
                l.toLowerCase().includes(searchLocation.toLowerCase())).length;
              const bLocationMatches = b.locations.filter(l => 
                l.toLowerCase().includes(searchLocation.toLowerCase())).length;
              
              aScore += aLocationMatches;
              bScore += bLocationMatches;
            }
            
            // If scores are equal, sort by rating
            if (aScore === bScore) {
              return parseFloat(b.rating) - parseFloat(a.rating);
            }
            
            return bScore - aScore;
          });
        } else {
          // If no search criteria, sort by rating
          sortedProviders.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
        }
        break;
    }
    
    return sortedProviders;
  };

  // Search function
  const handleSearch = () => {
    setIsSearching(true)
    
    // Filter providers based on search criteria
    const results = allProviders.filter(provider => {
      // Check if provider name or specialty matches search doctor
      const doctorMatch = searchDoctor === "" || 
        provider.name.toLowerCase().includes(searchDoctor.toLowerCase()) ||
        provider.title.toLowerCase().includes(searchDoctor.toLowerCase()) ||
        provider.specialties.some(specialty => 
          specialty.toLowerCase().includes(searchDoctor.toLowerCase())
        );
      
      // Check if provider treats the condition
      const conditionMatch = searchCondition === "" ||
        provider.conditions.some(condition => 
          condition.toLowerCase().includes(searchCondition.toLowerCase())
        );
      
      // Check if provider is in the location
      const locationMatch = searchLocation === "" ||
        provider.locations.some(location => 
          location.toLowerCase().includes(searchLocation.toLowerCase())
        );
      
      // Return true only if all specified criteria match
      return doctorMatch && conditionMatch && locationMatch;
    });
    
    // Apply sorting to the filtered results
    const sortedResults = sortProviders(results, sortOption);
    setFilteredProviders(sortedResults);
    
    // Simulate search delay for better UX
    setTimeout(() => {
      setIsSearching(false);
    }, 500);
  }

  // Handle sort change
  const handleSortChange = (e) => {
    const newSortOption = e.target.value;
    setSortOption(newSortOption);
    
    // Apply the new sort to the current filtered providers
    const sortedProviders = sortProviders(filteredProviders, newSortOption);
    setFilteredProviders(sortedProviders);
  };

  // Handle provider card click
  const handleProviderClick = (providerId) => {
    setShowProviderDetails(providerId);
  }

  // Clear search
  const clearSearch = () => {
    setSearchDoctor("");
    setSearchCondition("");
    setSearchLocation("");
    const sortedProviders = sortProviders(allProviders, sortOption);
    setFilteredProviders(sortedProviders);
  }

  return (
    <div className="dashboard">
      <header className="header">
        <div className="logo">
          <img src={medicareLogoSrc || "/placeholder.svg"} alt="Medicare Logo" className="logo-img" />
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
            {searchDoctor && (
              <button className="clear-input" onClick={() => setSearchDoctor("")}>×</button>
            )}
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
            {searchCondition && (
              <button className="clear-input" onClick={() => setSearchCondition("")}>×</button>
            )}
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
            {searchLocation && (
              <button className="clear-input" onClick={() => setSearchLocation("")}>×</button>
            )}
          </div>
          <button className="search-btn" onClick={handleSearch}>
            <SearchIcon />
          </button>
        </div>
        {(searchDoctor || searchCondition || searchLocation) && (
          <div className="search-tags">
            {searchDoctor && (
              <div className="search-tag">
                <span>Doctor: {searchDoctor}</span>
                <button onClick={() => setSearchDoctor("")}>×</button>
              </div>
            )}
            {searchCondition && (
              <div className="search-tag">
                <span>Condition: {searchCondition}</span>
                <button onClick={() => setSearchCondition("")}>×</button>
              </div>
            )}
            {searchLocation && (
              <div className="search-tag">
                <span>Location: {searchLocation}</span>
                <button onClick={() => setSearchLocation("")}>×</button>
              </div>
            )}
            <button className="clear-all" onClick={clearSearch}>Clear All</button>
          </div>
        )}
      </div>

      <div className="providers-section">
        <div className="providers-header">
          <h2>
            {isSearching 
              ? "Searching..." 
              : filteredProviders.length === 0 
                ? "No providers found" 
                : `${filteredProviders.length} Providers Found`}
          </h2>
          {filteredProviders.length > 0 && !isSearching && (
            <div className="sort-options">
              <select 
                className="sort-dropdown"
                value={sortOption}
                onChange={handleSortChange}
              >
                <option value="relevance">Sort by: Relevance</option>
                <option value="rating">Sort by: Rating</option>
                <option value="reviews">Sort by: Reviews</option>
              </select>
            </div>
          )}
        </div>
        
        {isSearching ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Searching for providers...</p>
          </div>
        ) : filteredProviders.length === 0 ? (
          <div className="no-results">
            <p>No providers match your search criteria.</p>
            <p>Try adjusting your search terms or <button className="clear-search-btn" onClick={clearSearch}>clear all filters</button>.</p>
          </div>
        ) : (
          <div className="providers-list">
            {filteredProviders.map((provider) => (
              <ProviderCard
                key={provider.id}
                name={provider.name}
                title={provider.title}
                rating={provider.rating}
                reviews={provider.reviews}
                onClick={() => handleProviderClick(provider.id)}
              />
            ))}
          </div>
        )}
      </div>

      {showProviderDetails && (
        <div className="provider-details-modal">
          <div className="modal-content">
            <button className="close-modal" onClick={() => setShowProviderDetails(null)}>×</button>
            <div className="provider-details-header">
              <img src={profilepic || "/placeholder.svg"} alt="Provider" className="provider-image-large" />
              <div>
                <h2>{allProviders.find(p => p.id === showProviderDetails)?.name}</h2>
                <p>{allProviders.find(p => p.id === showProviderDetails)?.title}</p>
                <div className="rating">
                  <StarIcon />
                  <span>
                    {allProviders.find(p => p.id === showProviderDetails)?.rating} - 
                    {allProviders.find(p => p.id === showProviderDetails)?.reviews} reviews
                  </span>
                </div>
              </div>
            </div>
            <div className="provider-details-body">
              <h3>Specialties</h3>
              <div className="specialties-list">
                {allProviders.find(p => p.id === showProviderDetails)?.specialties.map((specialty, index) => (
                  <span key={index} className="specialty-tag">{specialty}</span>
                ))}
              </div>
              
              <h3>Conditions Treated</h3>
              <div className="conditions-list">
                {allProviders.find(p => p.id === showProviderDetails)?.conditions.map((condition, index) => (
                  <span key={index} className="condition-tag">{condition}</span>
                ))}
              </div>
              
              <h3>Locations</h3>
              <div className="locations-list">
                {allProviders.find(p => p.id === showProviderDetails)?.locations.map((location, index) => (
                  <p key={index}>{location}</p>
                ))}
              </div>
              
              <div className="action-buttons">
                <button className="book-appointment-btn">Book Appointment</button>
                <button className="contact-btn">Contact Provider</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <nav className="bottom-nav">
        <button 
          className={`nav-item ${activeNav === "home" ? "active" : ""}`}
          onClick={() => setActiveNav("home")}
        >
          <HomeIcon />
          <span>Home</span>
        </button>
        <button 
          className={`nav-item ${activeNav === "chat" ? "active" : ""}`}
          onClick={() => setActiveNav("chat")}
        >
          <ChatIcon />
          <span>Chat</span>
        </button>
        <button 
          className={`nav-item ${activeNav === "map" ? "active" : ""}`}
          onClick={() => setActiveNav("map")}
        >
          <MapIcon />
          <span>Map</span>
        </button>
        <button 
          className={`nav-item ${activeNav === "notifications" ? "active" : ""}`}
          onClick={() => setActiveNav("notifications")}
        >
          <BellIcon />
          <span>Alerts</span>
        </button>
        <button 
          className={`nav-item ${activeNav === "calendar" ? "active" : ""}`}
          onClick={() => setActiveNav("calendar")}
        >
          <CalendarIcon />
          <span>Calendar</span>
        </button>
        <button 
          className={`nav-item ${activeNav === "profile" ? "active" : ""}`}
          onClick={() => setActiveNav("profile")}
        >
          <ProfileIcon />
          <span>Profile</span>
        </button>
      </nav>
    </div>
  )
}

export default Dashboard