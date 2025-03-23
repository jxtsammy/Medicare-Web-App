"use client"

import { useState, useEffect } from "react"
import "./PatientVideoCall.css"
import medicareLogoSrc from "../../assets/Medicare-logo.png"
import kitty from "../../assets/kitty-woo.png"
import video from "../../assets/21.png"
import doc from "../../assets/doc.png"
import { Mic, MicOff, Video, VideoOff, Phone, MoreVertical, Monitor, Bell } from "react-feather"

const PatientVideoCall = () => {
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)
  const [callTime, setCallTime] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCallTime((prevTime) => prevTime + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const toggleMute = () => setIsMuted(!isMuted)
  const toggleVideo = () => setIsVideoOff(!isVideoOff)
  const endCall = () => alert("Call ended")

  return (
    <div className="PatientVideoCall-container">
      {/* Header */}
      <header className="PatientVideoCall-header">
        <div className="PatientVideoCall-logo">
          <img
            src={medicareLogoSrc || "/placeholder.svg"}
            alt="Medicare Logo"
            className="PatientVideoCall-medicare-logo"
          />
        </div>

        <div className="PatientVideoCall-user-info">
          <div className="PatientVideoCall-notification">
            <Bell size={20} />
          </div>
          <div className="PatientVideoCall-provider-info">
            <img src={kitty || "/placeholder.svg"} alt="Provider" className="PatientVideoCall-provider-avatar" />
            <div className="PatientVideoCall-provider-details">
              <div className="PatientVideoCall-provider-name">Kitty Woo Ham</div>
              <div className="PatientVideoCall-provider-title">Family Nurse Practitioner</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Video Area */}
      <main className="PatientVideoCall-video-area">
        {/* Provider Video (Main) */}
        <div className="PatientVideoCall-main-video">
          <img src={doc || "/placeholder.svg"} alt="Provider Video" className="PatientVideoCall-provider-video" />
        </div>

        {/* Patient Video (PIP) */}
        <div className="PatientVideoCall-patient-video-container">
          <img src={video || "/placeholder.svg"} alt="Patient Video" className="PatientVideoCall-patient-video" />
        </div>

        {/* Call Controls */}
        <div className="PatientVideoCall-call-controls">
          <button
            className={`PatientVideoCall-control-button ${isMuted ? "PatientVideoCall-active" : ""}`}
            onClick={toggleMute}
          >
            {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
          </button>

          <button
            className={`PatientVideoCall-control-button ${isVideoOff ? "PatientVideoCall-active" : ""}`}
            onClick={toggleVideo}
          >
            {isVideoOff ? <VideoOff size={24} /> : <Video size={24} />}
          </button>

          <button className="PatientVideoCall-control-button">
            <Monitor size={24} />
          </button>

          <button className="PatientVideoCall-control-button">
            <MoreVertical size={24} />
          </button>

          <button className="PatientVideoCall-control-button PatientVideoCall-end-call" onClick={endCall}>
            <Phone size={24} />
          </button>
        </div>

        {/* Call Timer */}
        <div className="PatientVideoCall-call-timer">{formatTime(callTime)}</div>
      </main>
    </div>
  )
}

export default PatientVideoCall
