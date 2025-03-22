"use client"

import { useState } from "react"
import { FaArrowLeft, FaPhone, FaVideo, FaPaperclip, FaPaperPlane } from "react-icons/fa"
import "./MediChats.css"
import Chat from "./assets/chatPerson.png"
import Sarah from "./assets/Sarah.png"
import Robert from "./assets/Robert.png"
import Ellis from "./assets/Ellis.png"
import Michael from "./assets/Michael.png"
import Greg from "./assets/Greg.png"
import Wilson from "./assets/Wilson.png"
const MediChats = () => {
  const [message, setMessage] = useState("")
  const [activeChat, setActiveChat] = useState("Florencio Dorrance")

  const contacts = [
    {
      id: 1,
      name: "Elmer Laverty",
      lastMessage: "Haha oh man 🔥",
      time: "12m",
      avatar:  Sarah,
      unread: false,
    },
    {
      id: 2,
      name: "Florencio Dorrance",
      lastMessage: "woohoooo",
      time: "24m",
      avatar: Chat,
      unread: false,
      online: true,
    },
    {
      id: 3,
      name: "Lavern Laboy",
      lastMessage: "Haha that's terrifying 😀",
      time: "1h",
      avatar: Robert,
      unread: false,
    },
    {
      id: 4,
      name: "Titus Kitamura",
      lastMessage: "omg, this is amazing",
      time: "5h",
      avatar: Michael,
      unread: false,
    },
    {
      id: 5,
      name: "Geoffrey Mott",
      lastMessage: "aww 😊",
      time: "2d",
      avatar: Ellis,
      unread: false,
    },
    {
      id: 6,
      name: "Alfonzo Schuessler",
      lastMessage: "perfect!",
      time: "1m",
      avatar: Greg,
      unread: false,
    },
  ]

  // Updated messages array to include messages from different contacts
  const messages = [
    // Florencio Dorrance messages
    {
      id: 1,
      sender: "Florencio Dorrance",
      text: "omg, this is amazing",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "Florencio Dorrance",
      text: "perfect! ✅",
      time: "10:31 AM",
    },
    {
      id: 3,
      sender: "You",
      text: "How are you?",
      time: "10:35 AM",
      isUser: true,
    },
    {
      id: 4,
      sender: "Florencio Dorrance",
      text: "I'll be there in 2 mins ⏰",
      time: "10:41 AM",
    },
    {
      id: 5,
      sender: "You",
      text: "woohoooo",
      time: "10:45 AM",
      isUser: true,
    },
  ]

  // Create a mapping of messages for each contact
  const messagesByContact = {
    "Florencio Dorrance": messages,
    "Elmer Laverty": [
      {
        id: 1,
        sender: "Elmer Laverty",
        text: "Hey there!",
        time: "9:30 AM",
      },
      {
        id: 2,
        sender: "You",
        text: "Hi Elmer, how are you doing?",
        time: "9:35 AM",
        isUser: true,
      },
      {
        id: 3,
        sender: "Elmer Laverty",
        text: "Doing great, thanks for asking!",
        time: "9:40 AM",
      },
      {
        id: 4,
        sender: "You",
        text: "Haha oh man 🔥",
        time: "9:45 AM",
        isUser: true,
      },
    ],
    "Lavern Laboy": [
      {
        id: 1,
        sender: "Lavern Laboy",
        text: "Did you see that new movie?",
        time: "8:30 AM",
      },
      {
        id: 2,
        sender: "You",
        text: "Yes, it was so scary!",
        time: "8:35 AM",
        isUser: true,
      },
      {
        id: 3,
        sender: "Lavern Laboy",
        text: "I know right? The ending was unexpected.",
        time: "8:40 AM",
      },
      {
        id: 4,
        sender: "You",
        text: "Haha that's terrifying 😀",
        time: "8:45 AM",
        isUser: true,
      },
    ],
    "Titus Kitamura": [
      {
        id: 1,
        sender: "Titus Kitamura",
        text: "Check out this new app I found",
        time: "7:30 AM",
      },
      {
        id: 2,
        sender: "You",
        text: "What does it do?",
        time: "7:35 AM",
        isUser: true,
      },
      {
        id: 3,
        sender: "Titus Kitamura",
        text: "It helps you track your fitness goals",
        time: "7:40 AM",
      },
      {
        id: 4,
        sender: "Titus Kitamura",
        text: "omg, this is amazing",
        time: "7:45 AM",
      },
    ],
    "Geoffrey Mott": [
      {
        id: 1,
        sender: "Geoffrey Mott",
        text: "Happy birthday!",
        time: "6:30 AM",
      },
      {
        id: 2,
        sender: "You",
        text: "Thank you so much!",
        time: "6:35 AM",
        isUser: true,
      },
      {
        id: 3,
        sender: "Geoffrey Mott",
        text: "Did you get my gift?",
        time: "6:40 AM",
      },
      {
        id: 4,
        sender: "Geoffrey Mott",
        text: "aww 😊",
        time: "6:45 AM",
      },
    ],
    "Alfonzo Schuessler": [
      {
        id: 1,
        sender: "Alfonzo Schuessler",
        text: "How's the project coming along?",
        time: "5:30 AM",
      },
      {
        id: 2,
        sender: "You",
        text: "Just finished the final touches",
        time: "5:35 AM",
        isUser: true,
      },
      {
        id: 3,
        sender: "Alfonzo Schuessler",
        text: "Great job!",
        time: "5:40 AM",
      },
      {
        id: 4,
        sender: "Alfonzo Schuessler",
        text: "perfect!",
        time: "5:45 AM",
      },
    ],
  }

  // Function to get the correct avatar for a message
  const getMessageAvatar = (msg) => {
    if (msg.isUser) {
      // For user messages, use a default avatar
      return "/placeholder.svg?height=50&width=50"
    } else {
      // For contact messages, find the contact and use their avatar
      const contact = contacts.find((c) => c.name === msg.sender)
      return contact ? contact.avatar : "/placeholder.svg?height=50&width=50"
    }
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (message.trim() !== "") {
      // In a real app, you would add the message to the messages array
      // and potentially send it to a backend
      setMessage("")
    }
  }

  const activeContact = contacts.find((contact) => contact.name === activeChat)

  return (
    <div className="medichats-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <button className="back-button">
            <FaArrowLeft />
          </button>
          <h1 className="app-title">MediChats</h1>
          <span className="notification-badge">12</span>
        </div>

        <div className="search-container">
          <input type="text" placeholder="Search messages" className="search-input" />
        </div>

        <div className="contacts-list">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className={`contact-item ${activeChat === contact.name ? "active" : ""}`}
              onClick={() => setActiveChat(contact.name)}
            >
              <div className="contact-avatar">
                <img src={contact.avatar || "/placeholder.svg?height=50&width=50"} alt={contact.name} />
                {contact.online && <span className="online-indicator"></span>}
              </div>
              <div className="contact-info">
                <div className="contact-name">{contact.name}</div>
                <div className="contact-last-message">{contact.lastMessage}</div>
              </div>
              <div className="contact-time">{contact.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="chat-area">
        <div className="chat-header">
          <div className="chat-contact">
            <div className="contact-avatar">
              <img src={activeContact?.avatar || "/placeholder.svg?height=50&width=50"} alt={activeContact?.name} />
              {activeContact?.online && <span className="online-indicator"></span>}
            </div>
            <div className="contact-info">
              <div className="contact-name">{activeContact?.name}</div>
              {activeContact?.online && <div className="contact-status">Online</div>}
            </div>
          </div>
          <div className="chat-actions">
            <button className="action-button phone">
              <FaPhone />
            </button>
            <button className="action-button video">
              <FaVideo />
            </button>
          </div>
        </div>

        <div className="messages-container">
          {messagesByContact[activeChat]?.map((msg) => (
            <div key={msg.id} className={`message ${msg.isUser ? "user-message" : "contact-message"}`}>
              {!msg.isUser && (
                <div className="message-avatar">
                  <img src={getMessageAvatar(msg) || "/placeholder.svg"} alt={msg.sender} />
                </div>
              )}
              <div className="message-bubble">
                <div className="message-text">{msg.text}</div>
              </div>
              {msg.isUser && (
                <div className="message-avatar">
                  <img src= {Wilson} alt="You" />
                </div>
              )}
            </div>
          ))}
        </div>

        <form className="message-input-container" onSubmit={handleSendMessage}>
          <button type="button" className="attachment-button">
            <FaPaperclip />
          </button>
          <input
            type="text"
            placeholder="Type a message"
            className="message-input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className="send-button">
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  )
}

export default MediChats

