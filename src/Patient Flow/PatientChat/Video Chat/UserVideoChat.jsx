import { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Video, VideoOff, Monitor, MoreVertical, PhoneOff } from 'lucide-react';
import './UserVideoChat.css';

// Medicare logo image
import medicareLogo from '../../../assets/Medimock-removebg-preview.png';

function VideoCallWithFeeds() {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [callTime, setCallTime] = useState(0);
  const timerRef = useRef(null);
  const myVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  // Start timer when component mounts (assuming call is already connected)
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCallTime(prevTime => prevTime + 1);
    }, 1000);

    // In a real app, you would set up WebRTC here
    // For this demo, we'll simulate video feeds with static images

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  // Format time as mm:ss
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
    // In a real app, you would mute the audio track here
  };

  const handleVideoToggle = () => {
    setIsVideoEnabled(!isVideoEnabled);
    // In a real app, you would enable/disable the video track here
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
    <div className="video-call-with-feeds-container">
      <div className="video-call-with-feeds-header">
        <img src={medicareLogo || "/placeholder.svg"} alt="Medicare" className="video-call-with-feeds-logo" />
        <div className="video-call-with-feeds-timer">
          {formatTime(callTime)}
        </div>
      </div>

      <div className="video-call-with-feeds-content">
        {/* Main video (remote participant) */}
        <div className="video-call-with-feeds-main-video">
          <img
            src="https://i.pravatar.cc/800?img=47"
            alt="Remote participant"
            className="video-call-with-feeds-remote-video"
            ref={remoteVideoRef}
          />
        </div>

        {/* My video (local participant) */}
        <div className={`video-call-with-feeds-my-video ${!isVideoEnabled ? 'video-call-with-feeds-video-disabled' : ''}`}>
          {isVideoEnabled ? (
            <img
              src="https://i.pravatar.cc/300?img=12"
              alt="You"
              className="video-call-with-feeds-local-video"
              ref={myVideoRef}
            />
          ) : (
            <div className="video-call-with-feeds-video-off-placeholder">
              <Video size={40} />
            </div>
          )}
        </div>
      </div>

      <div className="video-call-with-feeds-controls">
        <button
          className={`video-call-with-feeds-control-button ${isMuted ? 'video-call-with-feeds-control-active' : ''}`}
          onClick={handleMuteToggle}
          aria-label={isMuted ? "Unmute microphone" : "Mute microphone"}
        >
          {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
        </button>

        <button
          className={`video-call-with-feeds-control-button ${!isVideoEnabled ? 'video-call-with-feeds-control-active' : ''}`}
          onClick={handleVideoToggle}
          aria-label={isVideoEnabled ? "Turn off camera" : "Turn on camera"}
        >
          {isVideoEnabled ? <Video size={24} /> : <VideoOff size={24} />}
        </button>

        <button
          className="video-call-with-feeds-control-button"
          onClick={handleShareScreen}
          aria-label="Share screen"
        >
          <Monitor size={24} />
        </button>

        <button
          className="video-call-with-feeds-control-button video-call-with-feeds-more-button"
          aria-label="More options"
        >
          <MoreVertical size={24} />
        </button>

        <button
          className="video-call-with-feeds-control-button video-call-with-feeds-end-button"
          onClick={handleEndCall}
          aria-label="End call"
        >
          <PhoneOff size={24} />
        </button>
      </div>
    </div>
  );
}

export default VideoCallWithFeeds;