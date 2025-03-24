"use client"

import { useState, useRef } from "react"
import { Edit} from "lucide-react"
import cover from '../../assets/Medimock.png'
import "./EditProfile.css"
import { useNavigate } from "react-router-dom";


export default function EditProviderProfile() {
  // State for storing selected images
  const [coverImage, setCoverImage] = useState(cover)
  const [profileImage, setProfileImage] = useState("https://randomuser.me/api/portraits/women/44.jpg")
  const navigate = useNavigate();


  // Refs for file inputs
  const coverInputRef = useRef(null)
  const profileInputRef = useRef(null)

  // Handle cover image edit button click
  const handleCoverEditClick = () => {
    if (coverInputRef.current) {
      coverInputRef.current.click()
    }
  }

  const handleSaveChanges = (e) => {
    e.preventDefault();

    const updatedProfile = {
      fullName: document.getElementById("fullName").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      phoneNumber: document.getElementById("phoneNumber").value,
      speciality: document.getElementById("speciality").value,
      location: document.getElementById("location").value,
      bio: document.getElementById("bio").value,
      profileImage,
      coverImage,
    };

    navigate("/profile", { state: updatedProfile });
  };


  // Handle profile image edit button click
  const handleProfileEditClick = () => {
    if (profileInputRef.current) {
      profileInputRef.current.click()
    }
  }

  // Handle cover image file selection
  const handleCoverImageChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setCoverImage(imageUrl)
    }
  }

  // Handle profile image file selection
  const handleProfileImageChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setProfileImage(imageUrl)
    }
  }

  return (
    <div className="Edit-Provider-container">
      {/* Header */}
      <header className="Edit-Provider-header">
        <div className="Edit-Provider-logo">
          <div className="Edit-Provider-logo-icon">MC</div>
          <div className="Edit-Provider-logo-text">
            <h1>Medicare</h1>
            <span>for Providers</span>
          </div>
        </div>

        <div className="Edit-Provider-user">
          <div className="Edit-Provider-user-info">
            <h3>Kitty Woo Ham</h3>
            <p>Family Nurse Practitioner</p>
          </div>
          <div className="Edit-Provider-user-avatar">
            <img src={profileImage || "/placeholder.svg"} alt="User avatar" />
          </div>
        </div>
      </header>

      {/* Main Form */}
      <div className="Edit-Provider-form-container">
        <div className="Edit-Provider-form-card">
          <div className="Edit-Provider-section">
            <h2 className="Edit-Provider-section-title">Profile Bio</h2>
            <p className="Edit-Provider-section-subtitle">
              Your Profile Will Be Displayed Publicly So Becareful What You Share
            </p>
          </div>

          <div className="Edit-Provider-section">
            <h3 className="Edit-Provider-subsection-title">Profile Picture & Cover</h3>
            <div className="Edit-Provider-media-section">
              <div className="Edit-Provider-cover-image">
                <img src={coverImage || "/placeholder.svg"} alt="Cover" />
                <button
                  type="button"
                  className="Edit-Provider-edit-button Edit-Provider-edit-cover"
                  onClick={handleCoverEditClick}
                >
                  <Edit size={36}/>
                </button>
                {/* Hidden file input for cover image */}
                <input
                  type="file"
                  ref={coverInputRef}
                  className="Edit-Provider-hidden-input"
                  accept="image/*"
                  onChange={handleCoverImageChange}
                />
              </div>
              <div className="Edit-Provider-profile-image">
                <img src={profileImage || "/placeholder.svg"} alt="Profile" />

                {/* Hidden file input for profile image */}
                <input
                  type="file"
                  ref={profileInputRef}
                  className="Edit-Provider-hidden-input"
                  accept="image/*"
                  onChange={handleProfileImageChange}
                />
              </div>

              <button
                  type="button"
                  className="Edit-Provider-edit-button Edit-Provider-edit-profile"
                  onClick={handleProfileEditClick}
                >
                  <Edit size={20} />
                </button>
            </div>
          </div>

          <form className="Edit-Provider-form">
            <div className="Edit-Provider-form-group">
              <label htmlFor="fullName" className="Edit-Provider-label">
                Full Name
              </label>
              <input type="text" id="fullName" className="Edit-Provider-input" defaultValue="Kitty Woo Ham" />
            </div>

            <div className="Edit-Provider-form-group">
              <label htmlFor="email" className="Edit-Provider-label">
                Email
              </label>
              <input type="email" id="email" className="Edit-Provider-input" defaultValue="kittywooham@gmail.com" />
            </div>

            <div className="Edit-Provider-form-group">
              <label htmlFor="password" className="Edit-Provider-label">
                Password
              </label>
              <input type="password" id="password" className="Edit-Provider-input" defaultValue="********" />
            </div>

            <div className="Edit-Provider-form-group">
              <label htmlFor="phoneNumber" className="Edit-Provider-label">
                Phone Number
              </label>
              <input type="tel" id="phoneNumber" className="Edit-Provider-input" defaultValue="+233 257256751" />
            </div>

            <div className="Edit-Provider-form-group">
              <label htmlFor="speciality" className="Edit-Provider-label">
                Speciality
              </label>
              <input
                type="text"
                id="speciality"
                className="Edit-Provider-input"
                defaultValue="Family Nurse Practitioner"
              />
            </div>

            <div className="Edit-Provider-form-group">
              <label htmlFor="location" className="Edit-Provider-label">
                Location
              </label>
              <input type="text" id="location" className="Edit-Provider-input" defaultValue="Semarang, Indonesia" />
            </div>

            <div className="Edit-Provider-form-group">
              <label htmlFor="bio" className="Edit-Provider-label">
                Bio
              </label>
              <textarea
                id="bio"
                className="Edit-Provider-textarea"
                rows={6}
                defaultValue=""
              ></textarea>
            </div>

            <div className="Edit-Provider-form-actions">
              <button type="submit" className="Edit-Provider-submit-button" onClick={handleSaveChanges}>
                Save Changes
              </button>
              <button type="button" className="Edit-Provider-cancel-button" onClick={() => window.history.back()}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
