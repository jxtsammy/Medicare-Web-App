import  { useState, useEffect, useRef } from 'react';
import './Chat.css';
import {
  FaHome,
  FaCommentDots,
  FaCalendarAlt,
  FaUsers,
  FaCog,
  FaHeadset,
  FaBell,
  FaChevronDown,
  FaPaperclip,
  FaPaperPlane,
  FaPhone
} from 'react-icons/fa';

function App() {
  const [message, setMessage] = useState('');
  const [chatList, setChatList] = useState([
    {
      id: 1,
      name: 'Elmer Laverty',
      lastMessage: 'Haha oh man 🔥',
      time: '12m',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      online: false
    },
    {
      id: 2,
      name: 'Florencio Dorrance',
      lastMessage: 'woohooo',
      time: '24m',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      online: true,
      active: true
    },
    {
      id: 3,
      name: 'Lavern Laboy',
      lastMessage: 'Haha that\'s terrifying 😂',
      time: '1h',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
      online: false
    },
    {
      id: 4,
      name: 'Titus Kitamura',
      lastMessage: 'omg, this is amazing',
      time: '5h',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      online: false
    },
    {
      id: 5,
      name: 'Geoffrey Mott',
      lastMessage: 'aww 😊',
      time: '2d',
      avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
      online: false
    },
    {
      id: 6,
      name: 'Alfonzo Schuessler',
      lastMessage: 'perfect!',
      time: '1m',
      avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
      online: false
    }
  ]);

  // Initial messages
  const initialMessages = [
    {
      id: 1,
      sender: 'them',
      text: 'omg, this is amazing',
      time: '10:30 AM'
    },
    {
      id: 2,
      sender: 'them',
      text: 'perfect! ✅',
      time: '10:31 AM'
    },
    {
      id: 3,
      sender: 'them',
      text: 'Wow, this is really epic',
      time: '10:32 AM'
    },
    {
      id: 4,
      sender: 'you',
      text: 'How are you?',
      time: '10:33 AM'
    },
    {
      id: 5,
      sender: 'them',
      text: 'just ideas for next time',
      time: '10:34 AM'
    },
    {
      id: 6,
      sender: 'them',
      text: 'I\'ll be there in 2 mins ⏰',
      time: '10:35 AM'
    },
    {
      id: 7,
      sender: 'you',
      text: 'woohooo',
      time: '10:36 AM'
    },
    {
      id: 8,
      sender: 'you',
      text: 'Haha oh man',
      time: '10:37 AM'
    },
    {
      id: 9,
      sender: 'you',
      text: 'Haha that\'s terrifying 😂',
      time: '10:38 AM'
    },
    {
      id: 10,
      sender: 'them',
      text: 'aww',
      time: '10:39 AM'
    },
    {
      id: 11,
      sender: 'them',
      text: 'omg, this is amazing',
      time: '10:40 AM'
    },
    {
      id: 12,
      sender: 'them',
      text: 'woohooo 🔥',
      time: '10:41 AM'
    }
  ];

  const [activeChat, setActiveChat] = useState({
    id: 2,
    name: 'Florencio Dorrance',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    online: true,
    messages: initialMessages
  });

  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeChat.messages]);

  // Format current time
  const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    return `${hours}:${minutes} ${ampm}`;
  };

  // Send a new message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        id: activeChat.messages.length + 1,
        sender: 'you',
        text: message,
        time: getCurrentTime()
      };

      // Update active chat with new message
      const updatedMessages = [...activeChat.messages, newMessage];
      setActiveChat({
        ...activeChat,
        messages: updatedMessages
      });

      // Update chat list with latest message
      const updatedChatList = chatList.map(chat => {
        if (chat.id === activeChat.id) {
          return {
            ...chat,
            lastMessage: message,
            time: 'now'
          };
        }
        return chat;
      });
      setChatList(updatedChatList);

      // Clear input
      setMessage('');

      // Simulate response after a delay
      setTimeout(() => {
        simulateResponse();
      }, 1000 + Math.random() * 2000);
    }
  };

  // Simulate receiving a response
  const simulateResponse = () => {
    const responses = [
      'That sounds great!',
      'I agree with you',
      'Let me think about that',
      'Interesting point',
      'Can we discuss this later?',
      'Perfect! ✅',
      'Wow, that\'s amazing',
      'I\'ll be there soon',
      'Thanks for letting me know',
      'Haha 😂',
      'Awesome!',
      'I appreciate that'
    ];

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    const responseMessage = {
      id: activeChat.messages.length + 1,
      sender: 'them',
      text: randomResponse,
      time: getCurrentTime()
    };

    // Update active chat with response
    const updatedMessages = [...activeChat.messages, responseMessage];
    setActiveChat({
      ...activeChat,
      messages: updatedMessages
    });

    // Update chat list
    const updatedChatList = chatList.map(chat => {
      if (chat.id === activeChat.id) {
        return {
          ...chat,
          lastMessage: randomResponse,
          time: 'now'
        };
      }
      return chat;
    });
    setChatList(updatedChatList);
  };

  // Change active chat
  const handleChatSelect = (chatId) => {
    // Find the selected chat
    const selectedChat = chatList.find(chat => chat.id === chatId);

    if (selectedChat && chatId !== activeChat.id) {
      // Update active status in chat list
      const updatedChatList = chatList.map(chat => ({
        ...chat,
        active: chat.id === chatId
      }));
      setChatList(updatedChatList);

      // Set the new active chat
      setActiveChat({
        ...selectedChat,
        messages: initialMessages // In a real app, you would fetch messages for this chat
      });
    }
  };

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <nav className="sidebar-nav">
            <ul>
              <li>
                <a href="#"><FaHome /> <span className="nav-text">Overview</span></a>
              </li>
              <li className="active">
                <a href="#"><FaCommentDots /> <span className="nav-text">Messages</span></a>
              </li>
              <li>
                <a href="#"><FaCalendarAlt /> <span className="nav-text">Appointments</span></a>
              </li>
              <li>
                <a href="#"><FaUsers /> <span className="nav-text">Patients</span></a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="sidebar-bottom">
          <nav className="sidebar-nav">
            <ul>
              <li>
                <a href="#"><FaCog /> <span className="nav-text">Settings</span></a>
              </li>
              <li>
                <a href="#"><FaHeadset /> <span className="nav-text">Support</span></a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <div className="logo-container">
            <div className="logo-circle">
              <span className="logo-text">MC</span>
            </div>
            <h1 className="logo-title">Medicare <span className="for-providers">for Providers</span></h1>
          </div>
          <div className="user-profile">
            <div className="notification">
              <FaBell />
              <span className="notification-badge">2</span>
            </div>
            <div className="user-info">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="user-avatar" />
              <div className="user-details">
                <h3 className="user-name">Kitty Woo Ham</h3>
                <p className="user-role">Family Nurse Practitioner</p>
              </div>
            </div>
          </div>
        </header>

        {/* Chat Interface */}
        <div className="chat-container">
          {/* Chat List */}
          <div className="chat-list-container">
            <div className="chat-list-header">
              <h2 className="chat-title">Chats <FaChevronDown/></h2>
              <span className="chat-count">12</span>
            </div>

            <div className="chat-search">
              <input
                type="text"
                placeholder="Search messages"
                className="search-input"
              />
            </div>

            <div className="chat-list">
              {chatList.map(chat => (
                <div
                  key={chat.id}
                  className={`chat-item ${chat.active ? 'active' : ''}`}
                  onClick={() => handleChatSelect(chat.id)}
                >
                  <div className="chat-avatar-container">
                    <img
                      src={chat.avatar || "/placeholder.svg"}
                      alt={chat.name}
                      className="chat-avatar"
                    />
                    {chat.online && <span className="online-indicator"></span>}
                  </div>
                  <div className="chat-info">
                    <div className="chat-header">
                      <h3 className="chat-name">{chat.name}</h3>
                      <span className="chat-time">{chat.time}</span>
                    </div>
                    <p className="chat-last-message">{chat.lastMessage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Messages */}
          <div className="chat-messages-container">
            <div className="chat-messages-header">
              <div className="chat-contact">
                <img
                  src={activeChat.avatar || "/placeholder.svg"}
                  alt={activeChat.name}
                  className="contact-avatar"
                />
                <div className="contact-info">
                  <h3 className="contact-name">{activeChat.name}</h3>
                  {activeChat.online && <span className="contact-status">Online</span>}
                </div>
              </div>
              <button className="call-btn">
                <FaPhone style={{ color: "black" }}/>
              </button>
            </div>

            <div className="messages-container">
              {activeChat.messages.map(msg => (
                <div
                  key={msg.id}
                  className={`message ${msg.sender === 'you' ? 'sent' : 'received'}`}
                >
                  {msg.sender === 'them' && (
                    <img
                      src={activeChat.avatar || "/placeholder.svg"}
                      alt={activeChat.name}
                      className="message-avatar"
                    />
                  )}
                  <div className="message-bubble">
                    <p className="message-text">{msg.text}</p>
                  </div>
                  {msg.sender === 'you' && (
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="You"
                      className="message-avatar"
                    />
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form className="message-input-container" onSubmit={handleSendMessage}>
              <button type="button" className="attachment-btn">
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
                className="send-btn"
                disabled={!message.trim()}
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;