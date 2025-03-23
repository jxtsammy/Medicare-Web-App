"use client"

import { useState, useRef, useEffect } from "react"
import "./AiChat.css"
import people from "../../assets/People.png"
import Avatar from "../../assets/Avatar.png"

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
)

const BookIcon = () => (
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
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
)

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
)

const CalendarIcon = () => (
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
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
    <line x1="16" x2="16" y1="2" y2="6"></line>
    <line x1="8" x2="8" y1="2" y2="6"></line>
    <line x1="3" x2="21" y1="10" y2="10"></line>
  </svg>
)

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
)

const VerifiedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="#4CAF50"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
)

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
)

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
)

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
)

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
)

function AiChat() {
  const [message, setMessage] = useState("")
  const [imageAttachment, setImageAttachment] = useState(null)
  const [isTyping, setIsTyping] = useState(false)
  const fileInputRef = useRef(null)
  const messagesEndRef = useRef(null)

  // Sample chat data
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: "user",
      text: "Good question. How about just discussing it?",
      time: "Today 11:55",
    },
    {
      id: 2,
      sender: "ai",
      text: "Of course. Thank you so much for taking your time.",
      time: "Today 11:56",
      hasAudio: true,
    },
    {
      id: 3,
      sender: "user",
      text: "Yes of course. Are there problems with your job?",
      time: "Today 11:53",
    },
    {
      id: 4,
      sender: "ai",
      text: "Morning Eten Hunt, I have a question about my job!",
      time: "Today 11:52",
    },
  ])

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [chatMessages])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (message.trim() || imageAttachment) {
      // Create a new message object
      const newMessage = {
        id: Date.now(),
        sender: "user",
        text: message.trim() ? message : "",
        time: getCurrentTime(),
        image: imageAttachment ? imageAttachment.url : null,
      }

      // Add the new message to the chat
      setChatMessages([...chatMessages, newMessage])

      // Clear the input and attachment
      setMessage("")
      setImageAttachment(null)

      // Clear file input
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }

      // Show typing indicator
      setIsTyping(true)

      // Simulate AI response
      setTimeout(() => {
        setIsTyping(false)

        // Generate appropriate response based on message content
        let responseText = ""

        if (imageAttachment) {
          responseText = getImageResponse()
        } else if (message.toLowerCase().includes("hello") || message.toLowerCase().includes("hi")) {
          responseText = "Hello! How can I assist you today?"
        } else if (message.toLowerCase().includes("help")) {
          responseText = "I'd be happy to help. What do you need assistance with?"
        } else if (message.toLowerCase().includes("thank")) {
          responseText = "You're welcome! Is there anything else you need?"
        } else if (message.toLowerCase().includes("?")) {
          responseText = getQuestionResponse()
        } else {
          responseText = getGenericResponse()
        }

        const aiResponse = {
          id: Date.now() + 1,
          sender: "ai",
          text: responseText,
          time: getCurrentTime(),
        }

        setChatMessages((prev) => [...prev, aiResponse])
      }, 1500)
    }
  }

  const getImageResponse = () => {
    const imageResponses = [
      "Thanks for sharing this image with me!",
      "I can see the image you sent. What would you like to know about it?",
      "I received your image. How can I help with this?",
      "Thanks for the visual! Is there something specific about this image you want to discuss?",
      "I got your image. What would you like me to do with it?",
    ]
    return imageResponses[Math.floor(Math.random() * imageResponses.length)]
  }

  const getQuestionResponse = () => {
    const questionResponses = [
      "That's a great question. Let me think about that for a moment...",
      "I understand your question. Here's what I think:",
      "Thanks for asking. From my perspective, I would say:",
      "That's something I can help with. Here's my response:",
      "Interesting question! I would approach it this way:",
    ]
    return questionResponses[Math.floor(Math.random() * questionResponses.length)]
  }

  const getGenericResponse = () => {
    const genericResponses = [
      "I understand what you're saying. Can you tell me more?",
      "That's interesting. How can I help you with this?",
      "I see. What would you like to know about this topic?",
      "Thanks for sharing that. Is there anything specific you'd like to discuss?",
      "I appreciate your message. How would you like to proceed?",
      "I follow what you're saying. What else would you like to explore?",
      "That makes sense. Is there a particular aspect you'd like to focus on?",
    ]
    return genericResponses[Math.floor(Math.random() * genericResponses.length)]
  }

  const getCurrentTime = () => {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes().toString().padStart(2, "0")
    return `Today ${hours}:${minutes}`
  }

  const handleImageClick = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file)
      setImageAttachment({
        file,
        name: file.name,
        type: file.type,
        size: file.size,
        url: imageUrl,
      })
      console.log("Image selected:", file.name)
    }
  }

  const removeAttachment = () => {
    setImageAttachment(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " B"
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB"
    else return (bytes / 1048576).toFixed(1) + " MB"
  }

  return (
    <div className="ai-chat-container">
      <div className="sidebar">
        <div className="sidebar-icons">
          <div className="sidebar-icon active">
            <HomeIcon />
          </div>
          <div className="sidebar-icon">
            <BookIcon />
          </div>
          <div className="sidebar-icon">
            <BellIcon />
          </div>
          <div className="sidebar-icon">
            <CalendarIcon />
          </div>
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

          <div className="user-info">
            <div className="notification-badge">8</div>
            <div className="user-name">Abednego</div>
            <div className="user-verified">
              Verified User <VerifiedIcon />
            </div>
            <div className="user-avatar">
              <img src={Avatar || "/placeholder.svg"} alt="User" />
            </div>
          </div>
        </div>

        <div className="chat-messages">
          {chatMessages.map((msg) => (
            <div key={msg.id} className={`message-container ${msg.sender === "ai" ? "ai-message" : "user-message"}`}>
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
  )
}

export default AiChat
