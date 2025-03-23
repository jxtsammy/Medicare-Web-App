"use client"

import { useState } from "react"
import "./MapsViewUser.css"
import baby from "../../assets/baby.png"
import Michael from "../../assets/Michael.png"
import Sarah from "../../assets/Sarah.png"
import Wilson from "../../assets/Wilson.png"
import Robert from "../../assets/Robert.png"
import kitty from "../../assets/kitty-woo.png"

import { Home, Calendar, Bell, MessageSquare, Package, User, Star, Phone, MessageCircle } from "react-feather"

const MapsViewUser = () => {
  const [selectedProvider, setSelectedProvider] = useState(null)

  // Sample provider data
  const providers = [
    {
      id: 1,
      name: "Kitty Woo Ham, NP",
      title: "Family Nurse Practitioner",
      rating: 4.87,
      reviews: 199,
      position: { top: "50%", left: "50%" },
      image: baby,
    },
    {
      id: 2,
      name: "Dr. Michael Smith",
      title: "Cardiologist",
      rating: 4.92,
      reviews: 156,
      position: { top: "30%", left: "70%" },
      image: Michael,
    },
    {
      id: 3,
      name: "Dr. Sarah Johnson",
      title: "Pediatrician",
      rating: 4.75,
      reviews: 210,
      position: { top: "40%", left: "30%" },
      image: Sarah,
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      title: "Dermatologist",
      rating: 4.65,
      reviews: 178,
      position: { top: "60%", left: "40%" },
      image: Wilson,
    },
    {
      id: 5,
      name: "Dr. Robert Davis",
      title: "Orthopedic Surgeon",
      rating: 4.89,
      reviews: 145,
      position: { top: "70%", left: "60%" },
      image: Robert,
    },
  ]

  const handleProviderClick = (provider) => {
    setSelectedProvider(provider)
  }

  return (
    <div className="MapsViewUser">
      {/* Static Map Background */}
      <div className="MapsViewUser-map-background">
        {/* You can replace this with an actual map image */}
        <img src="/placeholder.svg?height=1000&width=1500" alt="Map" className="MapsViewUser-map-image" />

        {/* User Location Marker */}
        <div className="MapsViewUser-user-marker">
          <div className="MapsViewUser-marker-pin"></div>
          <div className="MapsViewUser-marker-label">You</div>
        </div>

        {/* Provider Markers */}
        {providers.map((provider) => (
          <div
            key={provider.id}
            className="MapsViewUser-provider-marker"
            style={{ top: provider.position.top, left: provider.position.left }}
            onClick={() => handleProviderClick(provider)}
          >
            <img src={provider.image || "/placeholder.svg"} alt={provider.name} className="MapsViewUser-marker-image" />
          </div>
        ))}
      </div>

      {/* Sidebar Navigation */}
      <div className="MapsViewUser-sidebar">
        <div className="MapsViewUser-sidebar-item MapsViewUser-active">
          <Home size={24} />
        </div>
        <div className="MapsViewUser-sidebar-item">
          <Calendar size={24} />
        </div>
        <div className="MapsViewUser-sidebar-item">
          <Bell size={24} />
        </div>
        <div className="MapsViewUser-sidebar-item">
          <MessageSquare size={24} />
        </div>
        <div className="MapsViewUser-sidebar-item">
          <Package size={24} />
        </div>
        <div className="MapsViewUser-sidebar-item">
          <User size={24} />
        </div>
      </div>

      {/* Provider Info Card */}
      <div className="MapsViewUser-provider-card">
        <div className="MapsViewUser-provider-info">
          <img src={kitty || "/placeholder.svg"} alt="Provider" className="MapsViewUser-provider-image" />
          <div className="MapsViewUser-provider-details">
            <h2 className="MapsViewUser-provider-name">Kitty Woo Ham, NP</h2>
            <p className="MapsViewUser-provider-title">Family Nurse Practitioner</p>
            <div className="MapsViewUser-provider-rating">
              <Star size={16} className="MapsViewUser-star-icon" />
              <span className="MapsViewUser-rating-score">4.87</span>
              <span className="MapsViewUser-rating-count">(199 patients rating)</span>
            </div>
          </div>
        </div>
        <div className="MapsViewUser-provider-actions">
          <button className="MapsViewUser-action-button MapsViewUser-chat-button">
            <MessageCircle size={24} />
          </button>
          <button className="MapsViewUser-action-button MapsViewUser-call-button">
            <Phone size={24} />
          </button>
        </div>
      </div>

      {/* Provider Carousel */}
      <div className="MapsViewUser-provider-carousel">
        {providers.map((provider) => (
          <div
            key={provider.id}
            className={`MapsViewUser-carousel-item ${selectedProvider?.id === provider.id ? "MapsViewUser-selected" : ""}`}
            onClick={() => handleProviderClick(provider)}
          >
            <img
              src={provider.image || "/placeholder.svg"}
              alt={provider.name}
              className="MapsViewUser-carousel-image"
            />
            <div className="MapsViewUser-online-indicator"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MapsViewUser
