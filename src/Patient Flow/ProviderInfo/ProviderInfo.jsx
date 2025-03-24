import { useState, useRef, useEffect } from 'react';
import { Star, Clock, Calendar, Shield, Search, ChevronDown, MessageCircle, Phone } from 'lucide-react';
import './ProviderInfo.css';
import { useLocation} from "react-router-dom";

function App() {
  const [activeTab, setActiveTab] = useState('highlights');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const location = useLocation();
  const doctor = location.state?.doctor;

  // Form state
  const [patientType, setPatientType] = useState('new'); // 'new' or 'returning'
  const [formData, setFormData] = useState({
    fullName: '',
    dateIntended: '',
    phoneNumber: '',
    condition: '',
    age: ''
  });

  const [reviews, setReviews] = useState([
    {
      id: 1,
      text: "Kitty was amazing! Thorough, receptive of my needs and mindful about my health concerns. I definitely recommend.",
      rating: 5,
      date: "June 13, 2022",
      author: "Sahid Samuel",
      verified: true
    },
    {
      id: 2,
      text: "Kitty is so thorough and makes you feel at ease. I can trust her to always look out for whatever treatment is best for me.",
      rating: 5,
      date: "November 13, 2022",
      author: "Sahid Samuel",
      verified: true
    },
    {
      id: 3,
      text: "She was very easy to talk to, very attentive and knowledgeable. She made me feel comfortable. I definitely recommend her!",
      rating: 5,
      date: "November 13, 2022",
      author: "Jerry Antalan",
      verified: true
    }
  ]);

  const highlightsRef = useRef(null);
  const aboutRef = useRef(null);
  const reviewsRef = useRef(null);

  // Use effect to check if URL has a hash and scroll to the corresponding section
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Remove the # character
      const section = hash.substring(1);
      let ref;
      switch(section) {
        case 'highlights':
          ref = highlightsRef;
          setActiveTab('highlights');
          break;
        case 'about':
          ref = aboutRef;
          setActiveTab('about');
          break;
        case 'reviews':
          ref = reviewsRef;
          setActiveTab('reviews');
          break;
        default:
          ref = null;
      }

      if (ref && ref.current) {
        // Add a small delay to ensure DOM is fully rendered
        setTimeout(() => {
          ref.current.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);

    // Update URL hash without causing page reload
    window.history.pushState(null, null, `#${tab}`);

    let ref;
    switch(tab) {
      case 'highlights':
        ref = highlightsRef;
        break;
      case 'about':
        ref = aboutRef;
        break;
      case 'reviews':
        ref = reviewsRef;
        break;
      default:
        ref = null;
    }

    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStarClick = (index) => {
    setRating(index);
  };

  const handleStarHover = (index) => {
    setHoverRating(index);
  };

  const handleStarLeave = () => {
    setHoverRating(0);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    if (rating === 0 || !reviewText.trim()) {
      alert('Please add a star rating and review text');
      return;
    }

    const now = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const formattedDate = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;

    const newReview = {
      id: reviews.length + 1,
      text: reviewText,
      rating: rating,
      date: formattedDate,
      author: "You",
      verified: true,
      time: now.toLocaleTimeString()
    };

    setReviews([newReview, ...reviews]);
    setRating(0);
    setReviewText('');
  };

  // Handle patient type selection
  const handlePatientTypeChange = (type) => {
    setPatientType(type);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle appointment form submission
  const handleAppointmentSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.fullName || !formData.dateIntended || !formData.phoneNumber) {
      alert('Please fill in all required fields');
      return;
    }

    // In a real app, you would send this data to your backend
    console.log('Appointment booked:', {
      patientType,
      ...formData,
      doctor: doctor.name
    });

    // Show confirmation
    alert(`Appointment booked with ${doctor.name} for ${formData.dateIntended}`);

    // Reset form
    setFormData({
      fullName: '',
      dateIntended: '',
      phoneNumber: '',
      condition: '',
      age: ''
    });

    // Optionally navigate to a confirmation page
    // navigate('/appointment-confirmation');
  };

  return (
    <div className="doctor-profile-app">
      <header className="doctor-profile-header">
        <div className="doctor-profile-header-container">
          <img
            src={doctor.image || "/placeholder.svg"}
            alt={doctor.name}
            className="doctor-profile-avatar-small"
          />
          <div className="doctor-profile-header-info">
            <h1 className="doctor-profile-name-title">{doctor.name}, {doctor.credentials}</h1>
            <div className="doctor-profile-rating-wrapper">
              <Star className="doctor-profile-star-icon doctor-profile-star-filled" size={18} />
              <span className="doctor-profile-rating-number">{doctor.rating}</span>
              <span className="doctor-profile-rating-count">{doctor.reviews} patients rating</span>
            </div>
          </div>
          <button className="doctor-profile-availability-button">View availability</button>
        </div>
      </header>

      <main className="doctor-profile-main-content">
        <div className="doctor-profile-left-column">
          <div className="doctor-profile-details-section">
            <img
              src={doctor.image || "/placeholder.svg"}
              alt={doctor.name}
              className="doctor-profile-avatar-large"
            />
            <div className="doctor-profile-details-info">
              <h2 className="doctor-profile-details-name">{doctor.name}, {doctor.credentials}</h2>
              <p className="doctor-profile-details-specialty">{doctor.specialty}</p>
              <p className="doctor-profile-details-location">{doctor.location}</p>
              <div className="doctor-profile-details-rating">
                <Star className="doctor-profile-star-icon doctor-profile-star-filled" size={18} />
                <span className="doctor-profile-rating-number">{doctor.rating}</span>
                <span className="doctor-profile-rating-count">{doctor.reviews} patients rating</span>
              </div>
            </div>
            <div className="doctor-profile-contact-icons">
              <div className="doctor-profile-contact-icon-container">
                <MessageCircle className="doctor-profile-message-icon" />
              </div>
              <div className="doctor-profile-contact-icon-container">
                <Phone className="doctor-profile-phone-icon" />
              </div>
            </div>
          </div>

          <div className="doctor-profile-testimonial-box">
            <div className="doctor-profile-testimonial-rating-section">
              <h2 className="doctor-profile-testimonial-score">4.87</h2>
              <div className="doctor-profile-testimonial-stars">
                <Star className="doctor-profile-star-icon doctor-profile-star-filled" size={18} />
                <Star className="doctor-profile-star-icon doctor-profile-star-filled" size={18} />
                <Star className="doctor-profile-star-icon doctor-profile-star-filled" size={18} />
                <Star className="doctor-profile-star-icon doctor-profile-star-filled" size={18} />
                <Star className="doctor-profile-star-icon doctor-profile-star-filled" size={18} />
              </div>
            </div>
            <div className="doctor-profile-testimonial-content">
              <p className="doctor-profile-testimonial-text">{doctor.bio}</p>
              <p className="doctor-profile-testimonial-author">Medicare Inc. <span className="doctor-profile-testimonial-date">January 3, 2023</span></p>
            </div>
          </div>

          <div className="doctor-profile-navigation-tabs">
            <button
              className={activeTab === 'highlights' ? 'doctor-profile-tab-button doctor-profile-tab-active' : 'doctor-profile-tab-button'}
              onClick={() => handleTabClick('highlights')}
            >
              Highlights
            </button>
            <button
              className={activeTab === 'about' ? 'doctor-profile-tab-button doctor-profile-tab-active' : 'doctor-profile-tab-button'}
              onClick={() => handleTabClick('about')}
            >
              About
            </button>
            <button
              className={activeTab === 'reviews' ? 'doctor-profile-tab-button doctor-profile-tab-active' : 'doctor-profile-tab-button'}
              onClick={() => handleTabClick('reviews')}
            >
              Reviews
            </button>
          </div>

          <div ref={highlightsRef} className="doctor-profile-section" id="doctor-profile-highlights">
            <h2 className="doctor-profile-section-title">Highlights</h2>
            <div className="doctor-profile-highlight-item">
              <div className="doctor-profile-highlight-icon-container">
                <Star size={24} className="doctor-profile-highlight-icon doctor-profile-highlight-star" />
              </div>
              <div className="doctor-profile-highlight-content">
                <h3 className="doctor-profile-highlight-title">Highly Recommended</h3>
                <p className="doctor-profile-highlight-description">93% of patients gave this doctor 5 stars</p>
              </div>
            </div>
            <div className="doctor-profile-highlight-item">
              <div className="doctor-profile-highlight-icon-container">
                <Clock size={24} className="doctor-profile-highlight-icon doctor-profile-highlight-clock" />
              </div>
              <div className="doctor-profile-highlight-content">
                <h3 className="doctor-profile-highlight-title">Excellent wait time</h3>
                <p className="doctor-profile-highlight-description">97% of patients waited less than 30 minutes</p>
              </div>
            </div>
            <div className="doctor-profile-highlight-item">
              <div className="doctor-profile-highlight-icon-container">
                <Calendar size={24} className="doctor-profile-highlight-icon doctor-profile-highlight-calendar" />
              </div>
              <div className="doctor-profile-highlight-content">
                <h3 className="doctor-profile-highlight-title">New patients appointment</h3>
                <p className="doctor-profile-highlight-description">Appointments available for new patients on Medicare</p>
              </div>
            </div>
          </div>

          <div ref={aboutRef} className="doctor-profile-section" id="doctor-profile-about">
            <h2 className="doctor-profile-section-title">About</h2>
            <p className="doctor-profile-about-paragraph">{doctor.about}</p>
          </div>

          <div ref={reviewsRef} className="doctor-profile-section" id="doctor-profile-reviews">
            <h2 className="doctor-profile-section-title">Patients Reviews</h2>
            <p className="doctor-profile-reviews-subtitle">All reviews have been submitted by patients after seeing this provider</p>

            <div className="doctor-profile-reviews-notice">
              <Shield size={24} className="doctor-profile-shield-icon" />
              <p className="doctor-profile-reviews-notice-text">Your trust is our top concern, so providers cant pay to alter or remove reviews. We also dont publish reviews that contain any private patient health information.</p>
            </div>

            <div className="doctor-profile-reviews-header">
              <h3 className="doctor-profile-reviews-count">199 reviews</h3>
              <div className="doctor-profile-reviews-filter">
                <div className="doctor-profile-dropdown-container">
                  <button className="doctor-profile-dropdown-button">
                    Most relevant <ChevronDown size={16} />
                  </button>
                </div>
                <div className="doctor-profile-search-container">
                  <Search size={16} className="doctor-profile-search-icon" />
                  <input type="text" placeholder="Search" className="doctor-profile-search-input" />
                </div>
              </div>
            </div>

            <div className="doctor-profile-reviews-list">
              {reviews.map(review => (
                <div key={review.id} className="doctor-profile-review-item">
                  <div className="doctor-profile-review-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < review.rating ? "doctor-profile-star-icon doctor-profile-star-filled" : "doctor-profile-star-icon"}
                      />
                    ))}
                  </div>
                  <p className="doctor-profile-review-text">{review.text}</p>
                  <p className="doctor-profile-review-meta">
                    {review.date} {review.time && `at ${review.time}`} • {review.author} •
                    {review.verified && <span className="doctor-profile-review-verified">Verified Patient</span>}
                  </p>
                </div>
              ))}
            </div>

            <button className="doctor-profile-see-more-button">See More</button>

            <div className="doctor-profile-add-review-section">
              <h3 className="doctor-profile-add-review-title">Add your reviews</h3>
              <form onSubmit={handleReviewSubmit} className="doctor-profile-review-form">
                <div className="doctor-profile-add-rating-container">
                  <p className="doctor-profile-add-rating-label">Add star rating:</p>
                  <div className="doctor-profile-star-rating-selector">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={24}
                        className={(i < rating || i < hoverRating) ? "doctor-profile-star-icon doctor-profile-star-filled doctor-profile-star-clickable" : "doctor-profile-star-icon doctor-profile-star-clickable"}
                        onClick={() => handleStarClick(i + 1)}
                        onMouseEnter={() => handleStarHover(i + 1)}
                        onMouseLeave={handleStarLeave}
                      />
                    ))}
                  </div>
                </div>
                <textarea
                  placeholder="add your review here"
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  className="doctor-profile-review-textarea"
                ></textarea>
                <button type="submit" className="doctor-profile-submit-review-button">Submit</button>
              </form>
            </div>
          </div>
        </div>

        <div className="doctor-profile-appointment-form">
          <div className="doctor-profile-appointment-header">
            <h2 className="doctor-profile-appointment-title">Book an appointment for free</h2>
            <p className="doctor-profile-appointment-subtitle">All appointments expire 1 week after scheduling</p>
          </div>

          <div className="doctor-profile-patient-type-selector">
            <button
              type="button"
              className={`doctor-profile-patient-type-button ${patientType === 'new' ? 'doctor-profile-patient-type-active' : ''}`}
              onClick={() => handlePatientTypeChange('new')}
            >
              New patient
            </button>
            <button
              type="button"
              className={`doctor-profile-patient-type-button ${patientType === 'returning' ? 'doctor-profile-patient-type-active' : ''}`}
              onClick={() => handlePatientTypeChange('returning')}
            >
              Returning Patient
            </button>
          </div>

          <form className="doctor-profile-booking-form" onSubmit={handleAppointmentSubmit}>
            <div className="doctor-profile-form-group">
              <label className="doctor-profile-form-label">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="doctor-profile-form-input"
                required
              />
            </div>

            <div className="doctor-profile-form-group">
              <label className="doctor-profile-form-label">Date Intended</label>
              <input
                type="date"
                name="dateIntended"
                value={formData.dateIntended}
                onChange={handleInputChange}
                className="doctor-profile-form-input"
                required
              />
            </div>

            <div className="doctor-profile-form-group">
              <label className="doctor-profile-form-label">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="doctor-profile-form-input"
                required
              />
            </div>

            <div className="doctor-profile-form-row">
              <div className="doctor-profile-form-group doctor-profile-form-group-half">
                <label className="doctor-profile-form-label">Condition</label>
                <input
                  type="text"
                  name="condition"
                  value={formData.condition}
                  onChange={handleInputChange}
                  className="doctor-profile-form-input"
                />
              </div>
              <div className="doctor-profile-form-group doctor-profile-form-group-half">
                <label className="doctor-profile-form-label">Age</label>
                <input
                  type="text"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="doctor-profile-form-input"
                />
              </div>
            </div>

            <button type="submit" className="doctor-profile-book-button">Book</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;