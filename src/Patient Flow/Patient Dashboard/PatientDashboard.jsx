import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bell, Home, MessageSquare, Map, Package, User, Search, Star, Video, Heart, MapPin } from 'lucide-react';
import './PatientDashboard.css';
import logo from "../../assets/Medimock-removebg-preview.png";

const MedicareDoctors = () => {
  const navigate = useNavigate();

  // Sample doctors data
  const doctors = [
    {
        id: 1,
        name: "Alysia Barker",
        credentials: "FNP-C",
        specialty: "Family Nurse",
        rating: 4.97,
        reviews: 118,
        image: "https://i.pravatar.cc/150?img=1",
        videoCall: true,
        newPatient: true,
        recommended: true,
        location: "New York",
        condition: "Preventive Medicine",
        bio: "Dedicated family nurse practitioner with over 10 years of experience in preventive care and chronic disease management.",
        about: "I believe in building strong relationships with my patients to provide personalized care that promotes long-term health and well-being."
    },
    {
        id: 2,
        name: "Kitty Woo Ham",
        credentials: "DDS",
        specialty: "Dentist",
        rating: 4.97,
        reviews: 118,
        image: "https://i.pravatar.cc/150?img=5",
        videoCall: true,
        newPatient: true,
        recommended: true,
        location: "Los Angeles",
        condition: "Cosmetic Dentistry",
        bio: "Passionate about enhancing smiles with cutting-edge cosmetic dentistry techniques and personalized patient care.",
        about: "My goal is to help every patient achieve a confident, beautiful smile while maintaining optimal dental health."
    },
    {
        id: 3,
        name: "Damian Irabor",
        credentials: "MD",
        specialty: "General Practitioner",
        rating: 4.97,
        reviews: 118,
        image: "https://i.pravatar.cc/150?img=2",
        videoCall: true,
        newPatient: true,
        recommended: true,
        location: "Chicago",
        condition: "Internal Medicine",
        bio: "Experienced general practitioner focused on holistic health solutions and preventive medicine for all age groups.",
        about: "I take a patient-first approach, ensuring that everyone receives comprehensive care tailored to their unique needs."
    },
    {
        id: 4,
        name: "George James",
        credentials: "MD",
        specialty: "Cardiologist",
        rating: 4.90,
        reviews: 102,
        image: "https://i.pravatar.cc/150?img=10",
        videoCall: true,
        newPatient: true,
        recommended: true,
        location: "San Francisco",
        condition: "Heart Disease",
        bio: "Expert cardiologist dedicated to heart disease prevention, diagnosis, and treatment with a patient-centered approach.",
        about: "I am committed to improving heart health through early intervention, lifestyle modifications, and advanced treatments."
    },
    {
        id: 5,
        name: "Sophia Martins",
        credentials: "DO",
        specialty: "Pediatrician",
        rating: 4.95,
        reviews: 102,
        image: "https://i.pravatar.cc/150?img=12",
        videoCall: true,
        newPatient: true,
        recommended: true,
        location: "Houston",
        condition: "Child Healthcare",
        bio: "Caring pediatrician specializing in early childhood development, vaccinations, and child healthcare.",
        about: "I strive to create a welcoming and supportive environment where children feel comfortable and parents feel reassured."
    },
    {
        id: 6,
        name: "Carlos Bennett",
        credentials: "MD",
        specialty: "Orthopedic Surgeon",
        rating: 4.89,
        reviews: 150,
        image: "https://i.pravatar.cc/150?img=15",
        videoCall: false,
        newPatient: true,
        recommended: false,
        location: "Miami",
        condition: "Sports Injuries",
        bio: "Highly skilled orthopedic surgeon with a focus on sports-related injuries and rehabilitation.",
        about: "Helping athletes and active individuals recover quickly and safely is my top priority, ensuring they return to peak performance."
    }
];

  // State for search filters
  const [searchName, setSearchName] = useState('');
  const [searchCondition, setSearchCondition] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  // Filter doctors based on search input
  const filteredDoctors = doctors.filter(doctor =>
    (searchName === '' || doctor.name.toLowerCase().includes(searchName.toLowerCase())) &&
    (searchCondition === '' || doctor.condition.toLowerCase().includes(searchCondition.toLowerCase())) &&
    (searchLocation === '' || doctor.location.toLowerCase().includes(searchLocation.toLowerCase()))
  );

  const handleDoctorClick = (doctor) => {
    navigate('/provider-overview', { state: { doctor } });
  };

  return (
    <div className="medicare-doctors-container">
      {/* Header */}
      <header className="medicare-doctors-header">
        <div className="medicare-doctors-logo-container">
          <img src={logo} alt="medicare-logo" className="medi-logo"/>
        </div>
        <Link to="/">
        <div className="medicare-doctors-header-actions">
          <button className="medicare-doctors-logout-button">Logout</button>
        </div>
        </Link>
      </header>

      {/* Main content */}
      <main className="medicare-doctors-main">
        <h1 className="medicare-doctors-heading">Book local doctors who are always available to help you</h1>

        {/* Search Section */}
        <div className="medicare-doctors-search-container">
          <div className="medicare-doctors-search-input-group">
            <User size={20} className="medicare-doctors-search-icon" />
            <input
              type="text"
              className="medicare-doctors-search-input"
              placeholder="Name of doctor, specialist"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>
          <div className="medicare-doctors-search-divider"></div>
          <div className="medicare-doctors-search-input-group">
            <Heart size={20} className="medicare-doctors-search-icon" />
            <input
              type="text"
              className="medicare-doctors-search-input"
              placeholder="Condition, illness, procedure"
              value={searchCondition}
              onChange={(e) => setSearchCondition(e.target.value)}
            />
          </div>
          <div className="medicare-doctors-search-divider"></div>
          <div className="medicare-doctors-search-input-group">
            <MapPin size={20} className="medicare-doctors-search-icon" />
            <input
              type="text"
              className="medicare-doctors-search-input"
              placeholder="City, state, or zip code"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            />
          </div>
          <button className="medicare-doctors-search-button" ><Search size={20} /></button>
        </div>

        {/* Doctors list */}
        <section className="medicare-doctors-list-section">
          <h2 className="medicare-doctors-list-title">Suggested Providers</h2>

          <div className="medicare-doctors-list">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map(doctor => (
                <div key={doctor.id} className="medicare-doctors-list-item" onClick={() => handleDoctorClick(doctor)}>
                  <div className="medicare-doctors-doctor-image-container">
                    <img src={doctor.image} alt={doctor.name} className="medicare-doctors-doctor-image" />
                    <div className="medicare-doctors-chat-icon">
                      <MessageSquare size={20} />
                    </div>
                  </div>
                  <div className="medicare-doctors-doctor-info">
                    <h3 className="medicare-doctors-doctor-name">{doctor.name}, {doctor.credentials}</h3>
                    <p className="medicare-doctors-doctor-specialty">{doctor.specialty}</p>
                    <div className="medicare-doctors-doctor-rating">
                      <Star size={16} className="medicare-doctors-star-icon" />
                      <span>{doctor.rating} - {doctor.reviews} reviews</span>
                    </div>
                    <div className="medicare-doctors-doctor-video">
                      <Video size={16} />
                      <span>Real-time Video Call</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="medicare-no-results">No doctors found matching your search.</p>
            )}
          </div>
        </section>
      </main>

      {/* Bottom navigation */}
      <nav className="medicare-doctors-bottom-nav">
        <Link><button className="medicare-doctors-nav-button medicare-doctors-nav-active"><Home size={24} /><span>Home</span></button></Link>
        <Link to="/user-chats"><button className="medicare-doctors-nav-button"><MessageSquare size={24} /></button></Link>
        <Link to="/map"><button className="medicare-doctors-nav-button"><Map size={24} /></button></Link>
        <Link to="#"><button className="medicare-doctors-nav-button"><Bell size={24} /></button></Link>
        <Link to="/medi-ai"><button className="medicare-doctors-nav-button"><Package size={24} /></button></Link>
        <Link to="/user-settings">
        <button className="medicare-doctors-nav-button"><User size={24} /></button>
        </Link>
      </nav>
    </div>
  );
};

export default MedicareDoctors;
