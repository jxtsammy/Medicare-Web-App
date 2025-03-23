"use client"
import kitty from '../../assets/kitty-woo.png';
import calendar from '../../assets/calendar.png';
import celebrate from '../../assets/celebrate.png';
import time from '../../assets/time.png';
import { useState} from "react"
import {
  FaStar,
  FaStarHalf,
  FaCommentDots,
  FaPhoneAlt,
  FaShieldAlt,
  FaSearch
} from "react-icons/fa"
import "./DoctorOverview.css"

const DoctorOverview = () => {
  const [activeTab, setActiveTab] = useState("highlights")
  const [patientType, setPatientType] = useState("new")
  const [userRating, setUserRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [userReview, setUserReview] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [visibleReviews, setVisibleReviews] = useState(3)
  const [sortOption, setSortOption] = useState("most-relevant")
  const [bookingForm, setBookingForm] = useState({
    fullName: "",
    dateIntended: "",
    phoneNumber: "",
    condition: "",
    additionalInfo: ""
  })
  const [formErrors, setFormErrors] = useState({})
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [reviewSubmitSuccess, setReviewSubmitSuccess] = useState(false)

  // Sample reviews data - now using state so we can add to it
  const [reviews, setReviews] = useState([
    {
      id: 1,
      rating: 5,
      text: "Kitty was amazing! Thorough, receptive of my needs and mindful about my health concerns. I definitely recommend.",
      date: "June 13, 2022",
      reviewer: "Saito Samuel",
      verified: true
    },
    {
      id: 2,
      rating: 5,
      text: "Kitty is so thorough and makes you feel at ease. I can trust her to always look out for whatever treatment is best for me.",
      date: "November 13, 2022",
      reviewer: "Saito Samuel",
      verified: true
    },
    {
      id: 3,
      rating: 5,
      text: "She was very easy to talk to, very attentive and knowledgeable. She made me feel comfortable. I definitely recommend her!",
      date: "November 13, 2022",
      reviewer: "Jerry Antoku",
      verified: true
    },
    {
      id: 4,
      rating: 4,
      text: "Great experience overall. Very knowledgeable and took time to explain everything.",
      date: "December 5, 2022",
      reviewer: "Maria Johnson",
      verified: true
    },
    {
      id: 5,
      rating: 5,
      text: "Excellent care and attention to detail. Highly recommend Dr. Kitty!",
      date: "January 20, 2023",
      reviewer: "Robert Chen",
      verified: true
    },
    {
      id: 6,
      rating: 5,
      text: "Dr. Kitty is the best! She really listens and provides thoughtful care.",
      date: "February 8, 2023",
      reviewer: "Lisa Thompson",
      verified: true
    }
  ]);

  // Filter and sort reviews based on search term and sort option
  const filteredReviews = reviews
    .filter(review =>
      review.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.reviewer.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "most-recent") {
        return new Date(b.date) - new Date(a.date);
      } else if (sortOption === "highest-rating") {
        return b.rating - a.rating;
      } else if (sortOption === "lowest-rating") {
        return a.rating - b.rating;
      }
      // Default: most-relevant (no specific sort)
      return 0;
    });

  const displayedReviews = filteredReviews.slice(0, visibleReviews);

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="star-icon" />)
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalf key="half-star" className="star-icon" />)
    }

    return stars
  }

  const handleRatingClick = (rating) => {
    setUserRating(rating);
  }

  const handleRatingHover = (rating) => {
    setHoverRating(rating);
  }

  const handleRatingLeave = () => {
    setHoverRating(0);
  }

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (userRating === 0) {
      alert("Please select a star rating before submitting your review.");
      return;
    }

    if (userReview.trim() === "") {
      alert("Please write a review before submitting.");
      return;
    }

    // Format today's date as Month Day, Year
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);

    // Create the new review
    const newReview = {
      id: reviews.length + 1,
      rating: userRating,
      text: userReview,
      date: formattedDate,
      reviewer: "You", // In a real app, this would be the logged-in user's name
      verified: true,
      isNew: true // Flag to highlight the new review
    };

    // Add the new review to the beginning of the reviews array
    setReviews([newReview, ...reviews]);

    // Show success message
    setReviewSubmitSuccess(true);

    // Make sure the new review is visible by setting the active tab to reviews
    setActiveTab("reviews");

    // Ensure we're showing enough reviews to see the new one
    setVisibleReviews(Math.max(visibleReviews, 1));

    // Reset form after 2 seconds
    setTimeout(() => {
      setUserRating(0);
      setUserReview("");
      setReviewSubmitSuccess(false);
    }, 2000);
  }

  const handleSeeMore = () => {
    setVisibleReviews(prev => prev + 3);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingForm({
      ...bookingForm,
      [name]: value
    });

    // Clear error for this field when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ""
      });
    }
  }

  const validateForm = () => {
    const errors = {};

    if (!bookingForm.fullName.trim()) {
      errors.fullName = "Full name is required";
    }

    if (!bookingForm.dateIntended.trim()) {
      errors.dateIntended = "Date is required";
    } else if (!/^\d{2}\/\d{2}\/\d{2}$/.test(bookingForm.dateIntended)) {
      errors.dateIntended = "Date must be in dd/mm/yy format";
    }

    if (!bookingForm.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(bookingForm.phoneNumber.replace(/\D/g, ''))) {
      errors.phoneNumber = "Please enter a valid 10-digit phone number";
    }

    if (!bookingForm.condition.trim()) {
      errors.condition = "Condition is required";
    }

    return errors;
  }

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // In a real app, you would send this to your backend
    console.log("Booking submitted:", bookingForm);

    // Show success message
    setSubmitSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setBookingForm({
        fullName: "",
        dateIntended: "",
        phoneNumber: "",
        condition: "",
        additionalInfo: ""
      });
      setSubmitSuccess(false);
    }, 3000);
  }

  return (
    <div className="doctor-overview">
      {/* Header */}
      <div className="doctor-header">
        <div className="doctor-info">
          <img src={kitty || "/placeholder.svg"} alt="Dr. Kitty Woo Ham" className="doctor-avatar" />
          <div>
            <h1>Kitty Woo Ham, NP</h1>
            <div className="rating-container">
              {renderStars(4.87)}
              <span className="rating-text">4.87 (199 patients rating)</span>
            </div>
          </div>
        </div>
        <button className="availability-btn">View availability</button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="left-column">
          {/* Doctor Profile */}
          <div className="doctor-profile">
            <img src={kitty || "/placeholder.svg"} alt="Dr. Kitty Woo Ham" className="doctor-avatar-large" />
            <div className="doctor-details">
              <h2>Kitty Woo Ham, NP</h2>
              <p>Family Nurse Practitioner</p>
              <div className="rating-container">
                {renderStars(4.87)}
                <span className="rating-text">4.87 (199 patients rating)</span>
              </div>
            </div>
            <div className="communication-icons">
              <div className="icon-circle">
                <FaCommentDots />
              </div>
              <div className="icon-circle">
                <FaPhoneAlt />
              </div>
            </div>
          </div>

          {/* Featured Review */}
          <div className="featured-review">
            <div className="review-rating">
              <h2>4.87</h2>
              <div className="stars">{renderStars(5)}</div>
            </div>
            <div className="review-content">
              <p className="review-text">
                "Kitty really listens to you. Her prices are fully transparent on her website which is very appreciated.
                After our first session she put a plan together and sent it to me. It was really comforting to hear her
                say she has worked with so many people with my issue (hives) and successfully helped them achieve the
                health and wellness goals she set for them. I'm very hopeful."
              </p>
              <div className="review-author">
                <span>Rosanne H.</span>
                <span className="review-date">January 3, 2023</span>
              </div>
              <a href="#" className="see-all-link" onClick={(e) => {
                e.preventDefault();
                setActiveTab("reviews");
                document.querySelector('.patients-reviews').scrollIntoView({ behavior: 'smooth' });
              }}>
                See all reviews
              </a>
            </div>
          </div>

          {/* Tabs */}
          <div className="tabs">
            <button
              className={`tab ${activeTab === "highlights" ? "active" : ""}`}
              onClick={() => setActiveTab("highlights")}
            >
              Highlights
            </button>
            <button className={`tab ${activeTab === "about" ? "active" : ""}`} onClick={() => setActiveTab("about")}>
              About
            </button>
            <button
              className={`tab ${activeTab === "reviews" ? "active" : ""}`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
          </div>

          {/* Highlights Section */}
          {activeTab === "highlights" && (
            <div className="highlights-section">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <img src={celebrate || "/placeholder.svg"} alt="Highly Recommended" className="highlight-img" />
                </div>
                <div className="highlight-text">
                  <h3>Highly Recommended</h3>
                  <p>93% of patients gave this doctor 5 stars</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <img src={time || "/placeholder.svg"} alt="Excellent Wait Time" className="highlight-img" />
                </div>
                <div className="highlight-text">
                  <h3>Excellent wait time</h3>
                  <p>97% of patients waited less than 30 minutes</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <img src={calendar || "/placeholder.svg"} alt="Excellent Wait Time" className="highlight-img" />
                </div>
                <div className="highlight-text">
                  <h3>New patients appointment</h3>
                  <p>Appointments available for new patients on Medicare</p>
                </div>
              </div>
            </div>
          )}

          {/* About Section */}
          {activeTab === "about" && (
            <div className="about-section">
              <h3>About Dr. Kitty Woo Ham</h3>
              <p>
                Dr. Kitty Woo Ham is a board-certified Family Nurse Practitioner with over 10 years of experience in primary care.
                She specializes in preventive care, chronic disease management, and holistic health approaches.
              </p>
              <div className="about-details">
                <div className="about-item">
                  <h4>Education</h4>
                  <ul>
                    <li>Master of Science in Nursing, University of California</li>
                    <li>Bachelor of Science in Nursing, Stanford University</li>
                  </ul>
                </div>
                <div className="about-item">
                  <h4>Specialties</h4>
                  <ul>
                    <li>Primary Care</li>
                    <li>Preventive Medicine</li>
                    <li>Chronic Disease Management</li>
                    <li>Women's Health</li>
                  </ul>
                </div>
                <div className="about-item">
                  <h4>Languages</h4>
                  <ul>
                    <li>English</li>
                    <li>Mandarin</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Patient Reviews Section */}
          <div className={`patients-reviews ${activeTab === "reviews" ? "active-section" : ""}`}>
            <h2>Patients Reviews</h2>
            <p>All reviews have been submitted by patients after seeing this provider</p>

            <div className="trust-banner">
              <FaShieldAlt className="shield-icon" />
              <p>
                Your trust is our top concern, so providers can't pay to alter or remove reviews. We also don't publish
                reviews that contain any private patient health information. <a href="#">Learn more here</a>
              </p>
            </div>

            <div className="reviews-header">
              <h3>{filteredReviews.length} reviews</h3>
              <div className="reviews-actions">
                <select
                  className="sort-dropdown"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="most-relevant">Most relevant</option>
                  <option value="most-recent">Most recent</option>
                  <option value="highest-rating">Highest rating</option>
                  <option value="lowest-rating">Lowest rating</option>
                </select>
                <div className="search-container">
                  <input
                    type="text"
                    placeholder="Search"
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <FaSearch className="search-icon" />
                </div>
              </div>
            </div>

            <div className="reviews-list">
              {displayedReviews.length > 0 ? (
                displayedReviews.map(review => (
                  <div className={`review-item ${review.isNew ? 'new-review' : ''}`} key={review.id}>
                    <div className="review-stars">{renderStars(review.rating)}</div>
                    <p className="review-text">{review.text}</p>
                    <div className="review-meta">
                      <span>{review.date}</span>
                      <span className="reviewer">{review.reviewer}</span>
                      {review.verified && <span className="verified">Verified Patient</span>}
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-reviews">No reviews match your search criteria.</p>
              )}

              {visibleReviews < filteredReviews.length && (
                <button className="see-more-btn" onClick={handleSeeMore}>See More</button>
              )}
            </div>

            <div className="add-review">
              <h3>Add your review</h3>
              {reviewSubmitSuccess ? (
                <div className="review-success">
                  <h4>Thank you for your review!</h4>
                  <p>Your review has been added successfully.</p>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit}>
                  <div className="add-rating">
                    <span>Add star rating:</span>
                    <div className="rating-stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                          key={`rating-${star}`}
                          className={`rating-star ${(hoverRating || userRating) >= star ? 'active' : ''}`}
                          onClick={() => handleRatingClick(star)}
                          onMouseEnter={() => handleRatingHover(star)}
                          onMouseLeave={handleRatingLeave}
                        />
                      ))}
                    </div>
                  </div>
                  <textarea
                    placeholder="Add your review here"
                    className="review-textarea"
                    value={userReview}
                    onChange={(e) => setUserReview(e.target.value)}
                  ></textarea>
                  <button type="submit" className="submit-review-btn">Submit</button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="right-column">
          <div className="booking-card">
            <h2>Book an appointment for free</h2>
            <p>All appointments expire 1 week after scheduling</p>

            <div className="patient-type-selector">
              <button
                className={`patient-btn ${patientType === "new" ? "active" : ""}`}
                onClick={() => setPatientType("new")}
              >
                New patient
              </button>
              <button
                className={`patient-btn ${patientType === "returning" ? "active" : ""}`}
                onClick={() => setPatientType("returning")}
              >
                Returning Patient
              </button>
            </div>

            {submitSuccess ? (
              <div className="booking-success">
                <h3>Booking Successful!</h3>
                <p>Thank you for booking an appointment with Dr. Kitty Woo Ham.</p>
                <p>We will contact you shortly to confirm your appointment.</p>
              </div>
            ) : (
              <form className="booking-form" onSubmit={handleBookingSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    className={`form-control ${formErrors.fullName ? 'error' : ''}`}
                    name="fullName"
                    value={bookingForm.fullName}
                    onChange={handleInputChange}
                  />
                  {formErrors.fullName && <span className="error-message">{formErrors.fullName}</span>}
                </div>

                <div className="form-group">
                  <label>Date Intended</label>
                  <input
                    type="text"
                    placeholder="dd/mm/yy"
                    className={`form-control ${formErrors.dateIntended ? 'error' : ''}`}
                    name="dateIntended"
                    value={bookingForm.dateIntended}
                    onChange={handleInputChange}
                  />
                  {formErrors.dateIntended && <span className="error-message">{formErrors.dateIntended}</span>}
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    className={`form-control ${formErrors.phoneNumber ? 'error' : ''}`}
                    name="phoneNumber"
                    value={bookingForm.phoneNumber}
                    onChange={handleInputChange}
                  />
                  {formErrors.phoneNumber && <span className="error-message">{formErrors.phoneNumber}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group half">
                    <label>Condition</label>
                    <input
                      type="text"
                      className={`form-control ${formErrors.condition ? 'error' : ''}`}
                      name="condition"
                      value={bookingForm.condition}
                      onChange={handleInputChange}
                    />
                    {formErrors.condition && <span className="error-message">{formErrors.condition}</span>}
                  </div>
                  <div className="form-group half">
                    <label>Additional Info (Optional)</label>
                    <input
                      type="text"
                      className="form-control"
                      name="additionalInfo"
                      value={bookingForm.additionalInfo}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <button type="submit" className="book-btn">
                  Book
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorOverview