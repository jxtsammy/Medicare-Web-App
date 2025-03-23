import React, { useState } from 'react';
import './PatientVoiceCall.css';
import medicare from "./assets/medicare-logo.png"
import kitty from "./assets/kitty-woo.png"
import Ellipse from "./assets/Ellipse.png"

// Icons as React components
const MuteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
    <line x1="12" y1="19" x2="12" y2="22"></line>
  </svg>
);

const VideoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 8-6 4 6 4V8Z"></path>
    <rect width="14" height="12" x="2" y="6" rx="2" ry="2"></rect>
  </svg>
);

const ScreenShareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="14" x="3" y="5" rx="2"></rect>
    <line x1="12" x2="12" y1="19" y2="22"></line>
  </svg>
);

const MoreIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="12" cy="5" r="1"></circle>
    <circle cx="12" cy="19" r="1"></circle>
  </svg>
);

const EndCallIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 2v4"></path>
    <path d="M8 2v4"></path>
    <path d="M15.5 13a5 5 0 0 1-9 0"></path>
    <path d="M22 19h-2a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1Z"></path>
    <path d="M10.5 19H9a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1Z"></path>
  </svg>
);

const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
  </svg>
);

const MedicareIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#009879" />
    <text x="20" y="25" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">MC</text>
  </svg>
);

function PatientVoiceCall() {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);

  const toggleMute = () => setIsMuted(!isMuted);
  const toggleVideo = () => setIsVideoOff(!isVideoOff);
  const toggleScreenShare = () => setIsScreenSharing(!isScreenSharing);
  
  return (
    <div className="patient-call-container">
      <header className="call-header">
        <div className="logo-container">
          <img src={medicare} className='medicare-logo'/>
        </div>
        <div className="user-info">
          <div className="notification">
            <BellIcon />
            <span className="notification-badge">3</span>
          </div>
          <div className="provider-info">
            <img 
              src={kitty} 
              alt="Provider" 
              className="provider-avatar" 
            />
            <div className="provider-details">
              <div className="provider-name">Kitty Woo Ham</div>
              <div className="provider-role">Family Nurse Practitioner</div>
            </div>
          </div>
        </div>
      </header>

      <main className="call-content">
        <div className="patient-avatar-container">
          <img 
            src={Ellipse}
            alt="Patient" 
            className="patient-avatar" 
          />
        </div>
      </main>

      <footer className="call-controls">
        <div className="controls-container">
          <button 
            className={`control-button ${isMuted ? 'active' : ''}`} 
            onClick={toggleMute}
          >
            <MuteIcon />
          </button>
          <button 
            className={`control-button ${isVideoOff ? 'active' : ''}`} 
            onClick={toggleVideo}
          >
            <VideoIcon />
          </button>
          <button 
            className={`control-button ${isScreenSharing ? 'active' : ''}`} 
            onClick={toggleScreenShare}
          >
            <ScreenShareIcon />
          </button>
          <button className="control-button">
            <MoreIcon />
          </button>
          <button className="control-button end-call">
            <EndCallIcon />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default PatientVoiceCall;