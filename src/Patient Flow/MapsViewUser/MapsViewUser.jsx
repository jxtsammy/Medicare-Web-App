import { useState } from 'react';
import './MapsViewUser.css';
import baby from '../../assets/baby.png';
import Michael from '../../assets/Michael.png';
import Sarah from '../../assets/Sarah.png';
import Wilson from '../../assets/Wilson.png';
import Robert from '../../assets/Robert.png';
import kitty from '../../assets/kitty-woo.png';

import {
  Home, Calendar, Bell, MessageSquare, Package, User, Star, Phone, MessageCircle
} from 'react-feather';

const MapsViewUser = () => {
  const [selectedProvider, setSelectedProvider] = useState(null);

  // Sample provider data
  const providers = [
    {
      id: 1,
      name: "Kitty Woo Ham, NP",
      title: "Family Nurse Practitioner",
      rating: 4.87,
      reviews: 199,
      position: { top: '50%', left: '50%' },
      image: baby
    },
    {
      id: 2,
      name: "Dr. Michael Smith",
      title: "Cardiologist",
      rating: 4.92,
      reviews: 156,
      position: { top: '30%', left: '70%' },
      image: Michael
    },
    {
      id: 3,
      name: "Dr. Sarah Johnson",
      title: "Pediatrician",
      rating: 4.75,
      reviews: 210,
      position: { top: '40%', left: '30%' },
      image: Sarah
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      title: "Dermatologist",
      rating: 4.65,
      reviews: 178,
      position: { top: '60%', left: '40%' },
      image: Wilson
    },
    {
      id: 5,
      name: "Dr. Robert Davis",
      title: "Orthopedic Surgeon",
      rating: 4.89,
      reviews: 145,
      position: { top: '70%', left: '60%' },
      image: Robert
    }
  ];

  const handleProviderClick = (provider) => {
    setSelectedProvider(provider);
  };

  return (
    <div className="maps-view-container">
      {/* Static Map Background */}
      <div className="map-background">
        {/* You can replace this with an actual map image */}
        <img
          src="/placeholder.svg?height=1000&width=1500"
          alt="Map"
          className="map-image"
        />

        {/* User Location Marker */}
        <div className="user-marker">
          <div className="marker-pin"></div>
          <div className="marker-label">You</div>
        </div>

        {/* Provider Markers */}
        {providers.map(provider => (
          <div
            key={provider.id}
            className="provider-marker"
            style={{ top: provider.position.top, left: provider.position.left }}
            onClick={() => handleProviderClick(provider)}
          >
            <img
              src={provider.image || "/placeholder.svg"}
              alt={provider.name}
              className="marker-image"
            />
          </div>
        ))}
      </div>

      {/* Sidebar Navigation */}
      <div className="sidebar">
        <div className="sidebar-item active">
          <Home size={24} />
        </div>
        <div className="sidebar-item">
          <Calendar size={24} />
        </div>
        <div className="sidebar-item">
          <Bell size={24} />
        </div>
        <div className="sidebar-item">
          <MessageSquare size={24} />
        </div>
        <div className="sidebar-item">
          <Package size={24} />
        </div>
        <div className="sidebar-item">
          <User size={24} />
        </div>
      </div>

      {/* Provider Info Card */}
      <div className="provider-card">
        <div className="provider-info">
          <img
            src={kitty}
            alt="Provider"
            className="provider-image"
          />
          <div className="provider-details">
            <h2 className="provider-name">Kitty Woo Ham, NP</h2>
            <p className="provider-title">Family Nurse Practitioner</p>
            <div className="provider-rating">
              <Star size={16} className="star-icon" />
              <span className="rating-score">4.87</span>
              <span className="rating-count">(199 patients rating)</span>
            </div>
          </div>
        </div>
        <div className="provider-actions">
          <button className="action-button chat-button">
            <MessageCircle size={24} />
          </button>
          <button className="action-button call-button">
            <Phone size={24} />
          </button>
        </div>
      </div>

      {/* Provider Carousel */}
      <div className="provider-carousel">
        {providers.map(provider => (
          <div
            key={provider.id}
            className={`carousel-item ${selectedProvider?.id === provider.id ? 'selected' : ''}`}
            onClick={() => handleProviderClick(provider)}
          >
            <img
              src={provider.image || "/placeholder.svg"}
              alt={provider.name}
              className="carousel-image"
            />
            <div className="online-indicator"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapsViewUser;