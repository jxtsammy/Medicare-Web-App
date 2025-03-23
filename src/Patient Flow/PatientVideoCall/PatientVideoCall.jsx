import { useState, useEffect } from 'react';
import './PatientVideoCall.css';
import medicareLogoSrc from '../../assets/Medicare-logo.png';
import kitty from '../../assets/kitty-woo.png';
import video from '../../assets/21.png';
import doc from '../../assets/doc.png';
import {
  Mic, MicOff, Video, VideoOff, Phone,
  MoreVertical, Monitor, Bell
} from 'react-feather';

const PatientVideoCall = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [callTime, setCallTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCallTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleMute = () => setIsMuted(!isMuted);
  const toggleVideo = () => setIsVideoOff(!isVideoOff);
  const endCall = () => alert('Call ended');

  return (
    <div className="video-call-container">
      {/* Header */}
      <header className="call-header">
        <div className="logo">
          <img src={medicareLogoSrc || "/placeholder.svg"} alt="Medicare Logo" className="medicare-logo" />
        </div>

        <div className="user-info">
          <div className="notification">
            <Bell size={20} />
          </div>
          <div className="provider-info">
            <img
              src={kitty}
              alt="Provider"
              className="provider-avatar"
            />
            <div className="provider-details">
              <div className="provider-name">Kitty Woo Ham</div>
              <div className="provider-title">Family Nurse Practitioner</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Video Area */}
      <main className="video-area">
        {/* Provider Video (Main) */}
        <div className="main-video">
          <img
            src= {doc}
            alt="Provider Video"
            className="provider-video"
          />
        </div>

        {/* Patient Video (PIP) */}
        <div className="patient-video-container">
          <img
            src={video}
            alt="Patient Video"
            className="patient-video"
          />
        </div>

        {/* Call Controls */}
        <div className="call-controls">
          <button
            className={`control-button ${isMuted ? 'active' : ''}`}
            onClick={toggleMute}
          >
            {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
          </button>

          <button
            className={`control-button ${isVideoOff ? 'active' : ''}`}
            onClick={toggleVideo}
          >
            {isVideoOff ? <VideoOff size={24} /> : <Video size={24} />}
          </button>

          <button className="control-button">
            <Monitor size={24} />
          </button>

          <button className="control-button">
            <MoreVertical size={24} />
          </button>

          <button className="control-button end-call" onClick={endCall}>
            <Phone size={24} />
          </button>
        </div>

        {/* Call Timer */}
        <div className="call-timer">{formatTime(callTime)}</div>
      </main>
    </div>
  );
};

export default PatientVideoCall;