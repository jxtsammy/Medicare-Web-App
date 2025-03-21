import "./medicare.css";
import { FaSearch, FaUserMd, FaHeart, FaMapMarkerAlt, FaStar, FaVideo, FaHome, FaMap, FaBell, FaCubes, FaCalendar, FaUser } from "react-icons/fa";
import Homepage from './src/Patients Flow/Homepage/Home'

const providers = [
  {
    name: "Alysia Barker, FNP-C",
    specialty: "Family Nurse",
    rating: 4.97,
    reviews: 118,
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Kitty Woo Ham",
    specialty: "Dentist",
    rating: 4.97,
    reviews: 118,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Damian Irabor",
    specialty: "Doctor",
    rating: 4.97,
    reviews: 118,
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const handleHome = () =>{
  <Homepage />
}

const Medicare = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">MC <span>Medicare</span></div>
        <button className="logout-btn">Logout</button>
      </header>

      {/* Title */}
      <h2 className="title">Book local doctors who are always available to help you</h2>

      {/* Search Bar */}
      <div className="search-container">
        <div className="search-bar">
          <div className="search-group">
            <div className="search-section">
              <FaUserMd className="icon" />
              <input type="text" placeholder="Name of doctor, specialist" />
            </div>
            <span className="divider">|</span>
            <div className="search-section">
              <FaHeart className="icon" />
              <input type="text" placeholder="Condition, illness, procedure" />
            </div>
          </div>
          <span className="divider">|</span>
          <div className="search-section">
            <FaMapMarkerAlt className="icon" />
            <input type="text" placeholder="City, state, or zip code" />
          </div>
          <button className="search-btn">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Suggested Providers */}
      <div className="providers">
        <h3>Suggested Providers</h3>
        {providers.map((provider, index) => (
          <div key={index} className="provider-card">
            <img src={provider.image} alt={provider.name} className="provider-img" />
            <div className="provider-info">
              <h4>{provider.name}</h4>
              <p>{provider.specialty}</p>
              <div className="rating">
                <FaStar className="star-icon" /> {provider.rating} - {provider.reviews} reviews
              </div>
              <div className="video-call">
                <FaVideo className="video-icon" /> Real-time Video Call
              </div>
              <p className="recommendation">New patient appointment - Highly Recommended</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Bar */}
      <div className="navbar">
        <div className="nav-item active"><FaHome /><span>Home</span></div>
        <div className="nav-item" onClick={handleHome}><FaMap /></div>
        <div className="nav-item"><FaBell /></div>
        <div className="nav-item"><FaCubes /></div>
        <div className="nav-item"><FaCalendar /></div>
        <div className="nav-item"><FaUser /></div>
      </div>
    </div>
  );
};

export default Medicare;
