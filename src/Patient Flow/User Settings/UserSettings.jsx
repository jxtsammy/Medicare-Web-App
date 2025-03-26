"use client"

import { useState, useRef } from "react"
import { Bell, Camera, Trash2, Save } from "lucide-react"
import "./UserSettings.css"
import logo from '../../assets/Medimock-removebg-preview.png'
import profile from '../../assets/Medimock-removebg-preview.png'
import { useNavigate } from 'react-router-dom';

export default function UserProfile() {
  const [userData, setUserData] = useState({
    fullName: "Sallo Samuel",
    phoneNumber: "",
    email: "SalloSamuel@gmail.com",
    address: "Not provided",
    sex: "Male",
    genderInfo: "",
    dateOfBirth: "24th November, 2005",
    password: "••••••••",
    nationalId: "Not provided",
  })

  const [editingField, setEditingField] = useState(null)
  const [tempValue, setTempValue] = useState("")
  const fileInputRef = useRef(null)
  const [profileImage, setProfileImage] = useState("/placeholder.svg?height=100&width=100")
  const navigate = useNavigate();

  const handleDeleteAccount = () => {
  navigate('/');
};

  const handleEdit = (field, value) => {
    setEditingField(field)
    setTempValue(value)
  }

  const handleSave = (field) => {
    setUserData({
      ...userData,
      [field]: tempValue,
    })
    setEditingField(null)
  }

  const handleCancel = () => {
    setEditingField(null)
  }

  const handleChange = (e) => {
    setTempValue(e.target.value)
  }

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result) {
          setProfileImage(e.target.result)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSaveAll = (field) => {
    setUserData({
      ...userData,
      [field]: tempValue,
    })
    setEditingField(null)

    // Save all changes to the server
    console.log("Saving all changes:", userData)
    alert("Changes saved successfully!")
  }

  const renderField = (label, field, type = "text") => {
    const value = userData[field]
    const isEditing = editingField === field

    return (
      <div className="field-container">
        <div className="field-label-container">
          <h3 className="field-label">{label}</h3>
          {isEditing ? (
            <div className="edit-actions">
              <button className="save-button" onClick={() => handleSave(field)}>
                Save
              </button>
              <button className="cancel-button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          ) : (
            <button className="edit-button" onClick={() => handleEdit(field, value)}>
              {value ? "Edit" : "Add"}
            </button>
          )}
        </div>

        {isEditing ? (
          type === "select" ? (
            <select className="field-input" value={tempValue} onChange={handleChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-binary">Non-binary</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          ) : type === "textarea" ? (
            <textarea className="field-input field-textarea" value={tempValue} onChange={handleChange} />
          ) : (
            <input className="field-input" type={type} value={tempValue} onChange={handleChange} />
          )
        ) : (
          <div className="field-value">
            {field === "phoneNumber" && !value ? (
              <p className="field-description">
                Adding and verifying your phone number makes booking faster and allows you to turn on two-step
                verification.
              </p>
            ) : field === "email" ? (
              <>
                <p>{value}</p>
                <p className="field-description">To secure your email, please verify your email address.</p>
              </>
            ) : (
              <p>{value || `No ${label.toLowerCase()} provided`}</p>
            )}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={logo} alt="logo" className="Medi-logo"/>
        <div className="left-group">
        <div className="notification-container">
          <button className="notification-button">
            <Bell size={24} />
          </button>
        </div>
        <div className="user-badge">
          <div className="user-info">
            <span className="user-name">{userData.fullName.split(" ")[0]}</span>
            <span className="user-status">Verified User ✓</span>
          </div>
          <div className="avatar-container">
            <img src={profileImage || profile} alt="Profile" className="avatar-image" />
            <button className="avatar-edit-button" onClick={handleImageClick}>
              <Camera size={16} />
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              className="hidden-input"
            />
          </div>
        </div>
        </div>
      </div>

      <div className="profile-summary">
        <div className="profile-info-row">
          <div className="profile-image-container">
            <img src={profileImage || profile} alt="Profile" className="profile-image" />
            <button className="profile-image-edit" onClick={handleImageClick}>
              <Camera size={16} />
            </button>
          </div>
          <div className="profile-details">
            <h2 className="profile-name">{userData.fullName}</h2>
            <p className="profile-contact">{userData.phoneNumber || "No phone number"}</p>
            <p className="profile-email">{userData.email}</p>
          </div>
        </div>
      </div>

      <div className="profile-content">
        <h1 className="section-title">Personal Information</h1>

        {renderField("Full Name", "fullName")}
        {renderField("Phone Number", "phoneNumber", "tel")}
        {renderField("Email Address", "email", "email")}
        {renderField("Password", "password", "password")}
        {renderField("National ID", "nationalId")}
        {renderField("Address", "address", "textarea")}
        {renderField("Sex", "sex", "select")}
        {renderField("More sex and gender info", "genderInfo", "textarea")}
        {renderField("Date of Birth", "dateOfBirth", "date")}

        <div className="profile-actions">
          <button className="delete-button" onClick={handleDeleteAccount}>
            <Trash2 size={16} />
            Delete Account
          </button>
          <button className="save-all-button" onClick={handleSaveAll}>
            <Save size={16} />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}
