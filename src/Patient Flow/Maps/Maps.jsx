import { useState } from 'react';
import './Maps.css';
import baby from '../../assets/baby.png';
import Michael from '../../assets/Michael.png';
import Sarah from '../../assets/Sarah.png';
import Wilson from '../../assets/Wilson.png';
import Robert from '../../assets/Robert.png';
import Ellis from '../../assets/Ellis.png';
import People from '../../assets/People.png';
import kitty from '../../assets/kitty-woo.png';
import {
  Home, Calendar, Bell, MessageSquare, Package, User, ShoppingBag, MapPin
} from 'react-feather';

const Maps = () => {
  const [selectedProvider, setSelectedProvider] = useState(null);

  // Sample provider data
  const providers = [
    {
      id: 1,
      name: "Dr. Emily Chen",
      position: { top: '25%', left: '75%' },
      image: baby
    },
    {
      id: 2,
      name: "Dr. Michael Smith",
      position: { top: '45%', left: '40%' },
      image: Michael
    },
    {
      id: 3,
      name: "Dr. Sarah Johnson",
      position: { top: '60%', left: '80%' },
      image: Sarah
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      position: { top: '35%', left: '55%' },
      image: Wilson
    },
    {
      id: 5,
      name: "Dr. Robert Davis",
      position: { top: '55%', left: '30%' },
      image: Robert
    },
    {
      id: 6,
      name: "Dr. Lisa Brown",
      position: { top: '70%', left: '60%' },
      image: Ellis
    },
    {
      id: 7,
      name: "Dr. David Miller",
      position: { top: '40%', left: '20%' },
      image: People
    }
  ];

  // Special location markers
  const specialLocations = [
    {
      id: 1,
      type: "pharmacy",
      position: { top: '60%', left: '60%' },
      color: "#9c27b0" // purple
    },
    {
      id: 2,
      type: "hospital",
      position: { top: '75%', left: '85%' },
      color: "#e91e63" // pink
    },
    {
      id: 3,
      type: "clinic",
      position: { top: '30%', left: '65%' },
      color: "#f44336" // red
    }
  ];

  const handleProviderClick = (provider) => {
    setSelectedProvider(provider);
  };

  return (
    <div className="maps-container">
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

        {/* Special Location Markers */}
        {specialLocations.map(location => (
          <div
            key={location.id}
            className="special-marker"
            style={{
              top: location.position.top,
              left: location.position.left,
              backgroundColor: location.color
            }}
          >
            {location.type === "pharmacy" && <ShoppingBag size={16} color="#fff" />}
            {location.type === "hospital" && <MapPin size={16} color="#fff" />}
            {location.type === "clinic" && <User size={16} color="#fff" />}
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

export default Maps;