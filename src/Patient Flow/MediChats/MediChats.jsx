"use client"

import { useState, useEffect, useRef } from "react"
import { FaArrowLeft, FaPhone, FaVideo, FaPaperclip, FaPaperPlane, FaSearch, FaTimes } from "react-icons/fa"
import "./MediChats.css"
import Chat from "../../assets/chatPerson.png"
import Sarah from "../../assets/Sarah.png"
import Robert from "../../assets/Robert.png"
import Ellis from "../../assets/Ellis.png"
import Michael from "../../assets/Michael.png"
import Greg from "../../assets/Greg.png"
import Wilson from "../../assets/Wilson.png"

const MediChats = () => {
  const [message, setMessage] = useState("")
  const [activeChat, setActiveChat] = useState("Florencio Dorrance")
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredContacts, setFilteredContacts] = useState([])
  const messagesEndRef = useRef(null)

  // Initial contacts data
  const initialContacts = [
    {
      id: 1,
      name: "Elmer Laverty",
      lastMessage: "Haha oh man 🔥",
      time: "12m",
      avatar: Sarah,
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

  // State for contacts to allow updates
  const [contacts, setContacts] = useState(initialContacts)

  // Initial messages data
  const initialMessagesByContact = {
    "Florencio Dorrance": [
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
    ],
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

  // State for messages to allow updates
  const [messagesByContact, setMessagesByContact] = useState(initialMessagesByContact)

  // Filter contacts based on search term
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredContacts(contacts);
    } else {
      const filtered = contacts.filter(
        contact =>
          contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contact.lastMessage.toLowerCase().includes(searchTerm.toLowerCase()) ||
          // Also search in messages
          messagesByContact[contact.name]?.some(msg =>
            msg.text.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
      setFilteredContacts(filtered);
    }
  }, [searchTerm, contacts, messagesByContact]);

  // Initialize filtered contacts
  useEffect(() => {
    setFilteredContacts(contacts);
  }, [contacts]);

  // Scroll to bottom of messages when they change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messagesByContact, activeChat]);

  // Function to get the correct avatar for a message
  const getMessageAvatar = (msg) => {
    if (msg.isUser) {
      return Wilson;
    } else {
      const contact = contacts.find((c) => c.name === msg.sender);
      return contact ? contact.avatar : "/placeholder.svg?height=50&width=50";
    }
  }

  // Function to format current time
  const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 to 12

    return `${hours}:${minutes} ${ampm}`;
  }

  // Handle sending a new message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      // Create a new message object
      const newMessage = {
        id: Date.now(),
        sender: "You",
        text: message,
        time: getCurrentTime(),
        isUser: true,
      };

      // Update messages for the active chat
      const updatedMessages = {
        ...messagesByContact,
        [activeChat]: [...messagesByContact[activeChat], newMessage],
      };

      // Update the last message and time for the contact
      const updatedContacts = contacts.map(contact => {
        if (contact.name === activeChat) {
          return {
            ...contact,
            lastMessage: message,
            time: "now",
          };
        }
        return contact;
      });

      // Sort contacts to put the active chat at the top
      const sortedContacts = [...updatedContacts].sort((a, b) => {
        if (a.name === activeChat) return -1;
        if (b.name === activeChat) return 1;
        return 0;
      });

      // Update state
      setMessagesByContact(updatedMessages);
      setContacts(sortedContacts);
      setMessage("");

      // Simulate a reply after a random delay (1-3 seconds)
      if (Math.random() > 0.3) { // 70% chance of reply
        const replyDelay = Math.floor(Math.random() * 2000) + 1000;

        setTimeout(() => {
          const replies = [
            "That's interesting!",
            "I see what you mean.",
            "Thanks for letting me know.",
            "Got it! 👍",
            "I'll get back to you on that.",
            "Sounds good!",
            "Hmm, let me think about that.",
            "Perfect! 😊",
            "I appreciate your message.",
            "Let's discuss this further."
          ];

          const randomReply = replies[Math.floor(Math.random() * replies.length)];

          const replyMessage = {
            id: Date.now(),
            sender: activeChat,
            text: randomReply,
            time: getCurrentTime(),
          };

          // Update messages with the reply
          const updatedMessagesWithReply = {
            ...messagesByContact,
            [activeChat]: [...updatedMessages[activeChat], replyMessage],
          };

          // Update the last message for the contact
          const contactsWithReply = contacts.map(contact => {
            if (contact.name === activeChat) {
              return {
                ...contact,
                lastMessage: randomReply,
                time: "now",
              };
            }
            return contact;
          });

          setMessagesByContact(updatedMessagesWithReply);
          setContacts(contactsWithReply);
        }, replyDelay);
      }
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchTerm("");
  };

  const activeContact = contacts.find((contact) => contact.name === activeChat);

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
          <div className="search-input-wrapper">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search messages"
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button className="clear-search" onClick={clearSearch}>
                <FaTimes />
              </button>
            )}
          </div>
          {searchTerm && (
            <div className="search-results-count">
              {filteredContacts.length} {filteredContacts.length === 1 ? 'result' : 'results'} found
            </div>
          )}
        </div>

        <div className="contacts-list">
          {filteredContacts.length > 0 ? (
            filteredContacts.map((contact) => (
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
            ))
          ) : (
            <div className="no-results">No matching contacts or messages found</div>
          )}
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
                <div className="message-time">{msg.time}</div>
              </div>
              {msg.isUser && (
                <div className="message-avatar">
                  <img src={Wilson || "/placeholder.svg"} alt="You" />
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
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
          <button
            type="submit"
            className={`send-button ${message.trim() ? 'active' : ''}`}
            disabled={!message.trim()}
          >
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  )
}

export default MediChats