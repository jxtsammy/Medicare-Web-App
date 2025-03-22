"use client"
import kitty from './assets/kitty-woo.png';
import calendar from './assets/calendar.png';
import celebrate from './assets/celebrate.png';
import time from './assets/time.png';
import { useState } from "react"
import {
  FaStar,
  FaStarHalf,
  FaCommentDots,
  FaPhoneAlt,
  FaShieldAlt,
  FaCalendarAlt,
  FaClock,
  FaThumbsUp,
} from "react-icons/fa"
import "./DoctorOverview.css"

const DoctorOverview = () => {
  const [activeTab, setActiveTab] = useState("highlights")
  const [patientType, setPatientType] = useState("new")

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

  return (
    <div className="doctor-overview">
      {/* Header */}
      <div className="doctor-header">
        <div className="doctor-info">
        <img src={kitty}  alt="Dr. Kitty Woo Ham" className="doctor-avatar" />
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
            <img src={kitty}  alt="Dr. Kitty Woo Ham" className="doctor-avatar-large" />
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
              <a href="#" className="see-all-link">
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
                <img src={celebrate} alt="Highly Recommended" className="highlight-img" />
                </div>
                <div className="highlight-text">
                  <h3>Highly Recommended</h3>
                  <p>93% of patients gave this doctor 5 stars</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                <img src={time} alt="Excellent Wait Time" className="highlight-img" />
                </div>
                <div className="highlight-text">
                  <h3>Excellent wait time</h3>
                  <p>97% of patients waited less than 30 minutes</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                <img src={calendar} alt="Excellent Wait Time" className="highlight-img" />
                </div>
                <div className="highlight-text">
                  <h3>New patients appointment</h3>
                  <p>Appointments available for new patients on Medicare</p>
                </div>
              </div>
            </div>
          )}

          {/* Patient Reviews Section */}
          <div className="patients-reviews">
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
              <h3>199 reviews</h3>
              <div className="reviews-actions">
                <select className="sort-dropdown">
                  <option>Most relevant</option>
                  <option>Most recent</option>
                  <option>Highest rating</option>
                  <option>Lowest rating</option>
                </select>
                <div >
                  <input type="text" placeholder="Search" className="search-input" />
                </div>
              </div>
            </div>

            <div className="reviews-list">
              <div className="review-item">
                <div className="review-stars">{renderStars(5)}</div>
                <p className="review-text">
                  Kitty was amazing! Thorough, receptive of my needs and mindful about my health concerns. I definitely
                  recommend.
                </p>
                <div className="review-meta">
                  <span>June 13, 2022</span>
                  <span className="reviewer">Saito Samuel</span>
                  <span className="verified">Verified Patient</span>
                </div>
              </div>

              <div className="review-item">
                <div className="review-stars">{renderStars(5)}</div>
                <p className="review-text">
                  Kitty is so thorough and makes you feel at ease. I can trust her to always look out for whatever
                  treatment is best for me.
                </p>
                <div className="review-meta">
                  <span>November 13, 2022</span>
                  <span className="reviewer">Saito Samuel</span>
                  <span className="verified">Verified Patient</span>
                </div>
              </div>

              <div className="review-item">
                <div className="review-stars">{renderStars(5)}</div>
                <p className="review-text">
                  She was very easy to talk to, very attentive and knowledgeable. She made me feel comfortable. I
                  definitely recommend her!
                </p>
                <div className="review-meta">
                  <span>November 13, 2022</span>
                  <span className="reviewer">Jerry Antoku</span>
                  <span className="verified">Verified Patient</span>
                </div>
              </div>

              <button className="see-more-btn">See More</button>
            </div>

            <div className="add-review">
              <h3>Add your reviews</h3>
              <div className="add-rating">
                <span>Add star rating:</span>
                <div className="rating-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={`rating-${star}`} className="rating-star" />
                  ))}
                </div>
              </div>
              <textarea placeholder="add your review here" className="review-textarea"></textarea>
              <button className="submit-review-btn">Submit</button>
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

            <form className="booking-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="form-group">
                <label>Date Intended</label>
                <input type="text" placeholder="dd/mm/yy" className="form-control" />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" className="form-control" />
              </div>

              <div className="form-row">
                <div className="form-group half">
                  <label>Condition</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group half">
                  <input type="text" className="form-control" />
                </div>
              </div>

              <button type="submit" className="book-btn">
                Book
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorOverview

