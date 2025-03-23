import { useState, useEffect, useRef } from 'react';
import './Chat.css';
import {
  LayoutGrid,
  MessageSquare,
  Calendar,
  Settings,
  Bell,
  ChevronDown,
  Paperclip,
  Send,
  Phone,
  Video,
  LogOut
} from 'lucide-react';
import logo from '../../assets/Medimock-removebg-preview.png';
import { Link } from 'react-router';

function App() {
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
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
    }
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

  // Filter chats based on search query
  const filteredChats = chatList.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="chat-app">
      {/* Sidebar */}
      <aside className="chat-sidebar">
        <div className="chat-sidebar-top">
          <nav className="chat-sidebar-nav">
            <ul>
              <li>
                <Link to="/dashboard"><LayoutGrid size={24} color="black" /></Link>
              </li>
              <li className="chat-active">
                <Link to="/chat"><MessageSquare size={24} color="black" /></Link>
              </li>
              <li>
                <Link to="/appointments"><Calendar size={24} color="black" /></Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="chat-sidebar-bottom">
          <nav className="chat-sidebar-nav">
            <ul>
              <li>
                <Link to="/profile"><Settings size={24} color="black" /></Link>
              </li>
              <li>
                <Link to="/"><LogOut  size={24} color="black" /></Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="chat-main-content">
        {/* Header */}
        <header className="chat-header">
          <div className="chat-logo-container">
            <img src={logo} alt="medicare" className='chat-logo-img' />
            <h1 className="chat-logo-title"><span className="chat-for-providers">for Providers</span></h1>
          </div>
          <div className="chat-user-profile">
            <div className="chat-notification">
              <Bell size={24} color="black" />
              <span className="chat-notification-badge">2</span>
            </div>
            <div className="chat-user-info">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="chat-user-avatar" />
              <div className="chat-user-details">
                <h3 className="chat-user-name">Kitty Woo Ham</h3>
                <p className="chat-user-role">Family Nurse Practitioner</p>
              </div>
            </div>
          </div>
        </header>

        {/* Chat Interface */}
        <div className="chat-container">
          {/* Chat List */}
          <div className="chat-list-container">
            <div className="chat-list-header">
              <h2 className="chat-title">Chats <ChevronDown size={20} color="black" /></h2>
              <span className="chat-count">12</span>
            </div>

            <div className="chat-search">
              <input
                type="text"
                placeholder="Search chats"
                className="chat-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="chat-list">
              {filteredChats.map(chat => (
                <div
                  key={chat.id}
                  className={`chat-item ${chat.active ? 'chat-active' : ''}`}
                  onClick={() => handleChatSelect(chat.id)}
                >
                  <div className="chat-avatar-container">
                    <img
                      src={chat.avatar || "/placeholder.svg"}
                      alt={chat.name}
                      className="chat-avatar"
                    />
                    {chat.online && <span className="chat-online-indicator"></span>}
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
                  className="chat-contact-avatar"
                />
                <div className="chat-contact-info">
                  <h3 className="chat-contact-name">{activeChat.name}</h3>
                  {activeChat.online && <span className="chat-contact-status">Online</span>}
                </div>
              </div>
              <div className="call-btn">
                <button className="chat-call-btn">
                  <Video size={24} color="black" />
                </button>
                <button className="chat-call-btn">
                  <Phone size={24} color="black" />
                </button>
              </div>
            </div>

            <div className="messages-container">
              {activeChat.messages.map(msg => (
                <div
                  key={msg.id}
                  className={`chat-message ${msg.sender === 'you' ? 'chat-sent' : 'chat-received'}`}
                >
                  {msg.sender === 'them' && (
                    <img
                      src={activeChat.avatar || "/placeholder.svg"}
                      alt={activeChat.name}
                      className="chat-message-avatar"
                    />
                  )}
                  <div className="chat-message-bubble">
                    <p className="chat-message-text">{msg.text}</p>
                  </div>
                  {msg.sender === 'you' && (
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="You"
                      className="chat-message-avatar"
                    />
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form className="chat-message-input-container" onSubmit={handleSendMessage}>
              <button type="button" className="chat-attachment-btn">
                <Paperclip size={24} color="black" />
              </button>
              <input
                type="text"
                placeholder="Type a message"
                className="chat-message-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                type="submit"
                className="chat-send-btn"
                disabled={!message.trim()}
              >
                <Send size={24} color="black" />
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;