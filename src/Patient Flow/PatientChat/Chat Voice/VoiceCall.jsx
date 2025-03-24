import { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Monitor, MoreVertical, PhoneOff } from 'lucide-react';
import './Voice.css';
import { useLocation } from 'react-router-dom';

// Medicare logo image
import medicareLogo from '../../../assets/Medimock-removebg-preview.png';

function VideoCall() {
  const [isMuted, setIsMuted] = useState(false);
  const [isCallConnected, setIsCallConnected] = useState(false);
  const [callTime, setCallTime] = useState(0);
  const timerRef = useRef(null);
  const [callStatus, setCallStatus] = useState('Calling...');
  const location = useLocation();
  const avatar = location.state?.avatar || 'default-avatar-url.png'; // Fallback avat

  // Simulate call being picked up after 3 seconds
  useEffect(() => {
    const callTimeout = setTimeout(() => {
      setIsCallConnected(true);
      setCallStatus('Connected');
    }, 3000);

    return () => clearTimeout(callTimeout);
  }, []);

  // Start timer when call is connected
  useEffect(() => {
    if (isCallConnected) {
      timerRef.current = setInterval(() => {
        setCallTime(prevTime => prevTime + 1);
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isCallConnected]);

  // Format time as mm:ss
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  const handleEndCall = () => {
    // In a real app, you would disconnect the call here
    // For this demo, we'll just navigate back
    window.history.back();
  };

  const handleShareScreen = () => {
    // In a real app, you would implement screen sharing functionality
    alert('Screen sharing requested');
  };

  return (
    <div className="video-call-container">
      <div className="video-call-header">
        <img src={medicareLogo || "/placeholder.svg"} alt="Medicare" className="video-call-logo" />
      </div>

      <div className="video-call-content">
        <div className="video-call-avatar-container">
          <img
            src={avatar}
            alt="Caller"
            className="video-call-avatar"
          />
          <div className="video-call-status">
            <p className="video-call-status-text">{callStatus}</p>
            {isCallConnected && (
              <p className="video-call-timer">{formatTime(callTime)}</p>
            )}
          </div>
        </div>
      </div>

      <div className="video-call-controls">
        <button
          className={`video-call-control-button ${isMuted ? 'video-call-control-active' : ''}`}
          onClick={handleMuteToggle}
        >
          {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
        </button>

        <button
          className="video-call-control-button"
          onClick={handleShareScreen}
        >
          <Monitor size={24} />
        </button>

        <button className="video-call-control-button video-call-more-button">
          <MoreVertical size={24} />
        </button>

        <button
          className="video-call-control-button video-call-end-button"
          onClick={handleEndCall}
        >
          <PhoneOff size={24} />
        </button>
      </div>
    </div>
  );
}

export default VideoCall;