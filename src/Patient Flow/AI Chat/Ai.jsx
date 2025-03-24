"use client";

import { useState, useRef, useEffect } from "react";
import "./AiChat.css";
import people from "../../assets/People.png";
import Avatar from "../../assets/Avatar.png";
import {Map, User, MessageSquare} from 'lucide-react';
import { Link } from "react-router";
import axios from "axios";


// Icons as React components
const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);


const BellIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
  </svg>
);


const SendIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m22 2-7 20-4-9-9-4Z"></path>
    <path d="M22 2 11 13"></path>
  </svg>
);

const GridIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="7" height="7" x="3" y="3" rx="1"></rect>
    <rect width="7" height="7" x="14" y="3" rx="1"></rect>
    <rect width="7" height="7" x="14" y="14" rx="1"></rect>
    <rect width="7" height="7" x="3" y="14" rx="1"></rect>
  </svg>
);

const ImageIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
    <circle cx="9" cy="9" r="2"></circle>
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18"></path>
    <path d="m6 6 12 12"></path>
  </svg>
);

const AudioWaveform = () => (
  <div className="audio-waveform">
    {Array(20)
      .fill()
      .map((_, i) => (
        <div
          key={i}
          className="waveform-bar"
          style={{
            height: `${Math.random() * 15 + 5}px`,
            animationDelay: `${i * 0.05}s`,
          }}
        ></div>
      ))}
  </div>
);

function AiChat() {
  const [message, setMessage] = useState("");
  const [imageAttachment, setImageAttachment] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Sample chat data
  const [chatMessages, setChatMessages] = useState([]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (message.trim() || imageAttachment) {
      const newMessage = {
        id: Date.now(),
        sender: "user",
        text: message.trim() ? message : "",
        time: getCurrentTime(),
        image: imageAttachment ? imageAttachment.url : null,
      };

      setChatMessages((prev) => [...prev, newMessage]);
      setMessage("");
      setImageAttachment(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      setIsTyping(true);

      try {
        const response = await axios.post(
          "https://openrouter.ai/api/v1/chat/completions",
          {
            model: "deepseek/deepseek-r1:free", // Try a different model if needed
            messages: [{ role: "user", content: newMessage.text }],
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer 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`
            },
          }
        );

        console.log("API Response:", response.data); // Debugging step

        if (response.data.choices && response.data.choices.length > 0) {
          const aiResponseText = response.data.choices[0]?.message?.content || "No response received.";

          const aiResponse = {
            id: Date.now() + 1,
            sender: "ai",
            text: aiResponseText,
            time: getCurrentTime(),
          };

          setChatMessages((prev) => [...prev, aiResponse]);
        } else {
          console.error("No valid response from AI.");
        }
      } catch (error) {
        console.error("Error fetching AI response:", error);
      } finally {
        setIsTyping(false);
      }
    }
  };


  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `Today ${hours}:${minutes}`;
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        alert("File size must be less than 5MB.");
        return;
      }
      const imageUrl = URL.createObjectURL(file);
      setImageAttachment({
        file,
        name: file.name,
        type: file.type,
        size: file.size,
        url: imageUrl,
      });
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const removeAttachment = () => {
    setImageAttachment(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " B";
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    else return (bytes / 1048576).toFixed(1) + " MB";
  };

  return (
    <div className="ai-chat-container">
      <div className="sidebar">
        <div className="sidebar-icons">
          <Link to="/patient-dasboard">
            <div className="sidebar-icon active">
              <HomeIcon />
            </div>
          </Link>
          <Link to="/user-chats">
          <div className="sidebar-icon">
            <MessageSquare />
          </div>
          </Link>
          <Link>
          <div className="sidebar-icon">
            <BellIcon />
          </div>
          </Link>
          <Link to="/user-settings">
          <div className="sidebar-icon">
            <User />
          </div>
          </Link>
          <Link to="/map">
          <div className="sidebar-icon">
            <Map />
          </div>
          </Link>
        </div>
        <div className="user-avatar-small">
          <img src={Avatar || "/placeholder.svg"} alt="User" />
        </div>
      </div>

      <div className="chat-main">
        <div className="chat-header">
          <div className="ai-info">
            <div className="grid-icon">
              <GridIcon />
            </div>
            <div className="ai-avatar">
              <img src={people || "/placeholder.svg"} alt="AI" />
            </div>
            <div className="ai-details">
              <div className="ai-name">Medi AI</div>
              <div className="ai-status">
                <span className="status-dot"></span>
                <span className="status-text">Online</span>
              </div>
            </div>
          </div>
        </div>

        <div className="chat-messages">
          {chatMessages.map((msg) => (
            <div
              key={msg.id}
              className={`message-container ${msg.sender === "ai" ? "ai-message" : "user-message"}`}
            >
              <div className="message-bubble">
                {msg.text && <div className="message-text">{msg.text}</div>}
                {msg.hasAudio && <AudioWaveform />}
                {msg.image && (
                  <div className="message-image">
                    <img src={msg.image || "/placeholder.svg"} alt="Attachment" />
                  </div>
                )}
              </div>
              <div className="message-time">{msg.time}</div>
            </div>
          ))}

          {isTyping && (
            <div className="message-container ai-message">
              <div className="message-bubble typing-bubble">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {imageAttachment && (
          <div className="attachment-preview">
            <div className="image-preview">
              <img src={imageAttachment.url || "/placeholder.svg"} alt="Attachment preview" />
            </div>
            <div className="attachment-info">
              <div className="attachment-name">{imageAttachment.name}</div>
              <div className="attachment-size">{formatFileSize(imageAttachment.size)}</div>
            </div>
            <button className="remove-attachment" onClick={removeAttachment}>
              <CloseIcon />
            </button>
          </div>
        )}

        <div className="chat-input-container">
          <div className="attachment-button" onClick={handleImageClick}>
            <ImageIcon />
          </div>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleFileChange}
          />
          <form onSubmit={handleSendMessage} className="chat-form">
            <input
              type="text"
              placeholder="Type your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="chat-input"
            />
            <button
              type="submit"
              className={`send-button ${message.trim() || imageAttachment ? "active" : ""}`}
              disabled={!message.trim() && !imageAttachment}
            >
              <SendIcon />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AiChat;