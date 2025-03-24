import { useState, useRef, useEffect } from 'react';
import { Home, Search, Phone, Video, Paperclip, Send } from 'lucide-react';
import './PatientChats.css';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const initialChats = [
  {
    id: 1,
    name: 'Elmer Laverty',
    avatar: 'https://i.pravatar.cc/150?img=1',
    lastMessage: 'Haha oh man 🔥',
    time: '12m',
    messages: [
      { id: 1, text: 'Hey there!', sender: 'them', time: '11:30 AM' },
      { id: 2, text: 'How are you doing today?', sender: 'them', time: '11:31 AM' },
      { id: 3, text: 'I\'m good, thanks!', sender: 'you', time: '11:32 AM' },
      { id: 4, text: 'Haha oh man 🔥', sender: 'you', time: '11:35 AM' },
    ]
  },
  {
    id: 2,
    name: 'Florencio Dorrance',
    avatar: 'https://i.pravatar.cc/150?img=2',
    lastMessage: 'woohoooo',
    time: '24m',
    online: true,
    messages: [
      { id: 1, text: 'omg, this is amazing', sender: 'them', time: '10:30 AM' },
      { id: 2, text: 'perfect! ✅', sender: 'them', time: '10:31 AM' },
      { id: 3, text: 'Wow, this is really epic', sender: 'them', time: '10:32 AM' },
      { id: 4, text: 'How are you?', sender: 'you', time: '10:40 AM' },
      { id: 5, text: 'just ideas for next time', sender: 'them', time: '10:45 AM' },
      { id: 6, text: 'I\'ll be there in 2 mins ⏰', sender: 'them', time: '10:46 AM' },
      { id: 7, text: 'woohoooo', sender: 'you', time: '10:50 AM' },
      { id: 8, text: 'Haha oh man', sender: 'you', time: '10:51 AM' },
      { id: 9, text: 'Haha that\'s terrifying 😅', sender: 'you', time: '10:52 AM' },
      { id: 10, text: 'aww', sender: 'them', time: '11:00 AM' },
      { id: 11, text: 'omg, this is amazing', sender: 'them', time: '11:01 AM' },
      { id: 12, text: 'woohoooo 🔥', sender: 'them', time: '11:02 AM' },
    ]
  },
  {
    id: 3,
    name: 'Lavern Laboy',
    avatar: 'https://i.pravatar.cc/150?img=3',
    lastMessage: 'Haha that\'s terrifying 😅',
    time: '1h',
    messages: [
      { id: 1, text: 'Hello!', sender: 'them', time: '9:30 AM' },
      { id: 2, text: 'Did you see that scary movie?', sender: 'them', time: '9:31 AM' },
      { id: 3, text: 'Yes! It was so scary!', sender: 'you', time: '9:32 AM' },
      { id: 4, text: 'Haha that\'s terrifying 😅', sender: 'you', time: '9:35 AM' },
    ]
  },
  {
    id: 4,
    name: 'Titus Kitamura',
    avatar: 'https://i.pravatar.cc/150?img=4',
    lastMessage: 'omg, this is amazing',
    time: '5h',
    messages: [
      { id: 1, text: 'Check out this new app', sender: 'them', time: '8:30 AM' },
      { id: 2, text: 'It\'s really cool', sender: 'them', time: '8:31 AM' },
      { id: 3, text: 'omg, this is amazing', sender: 'you', time: '8:35 AM' },
    ]
  },
  {
    id: 5,
    name: 'Geoffrey Mott',
    avatar: 'https://i.pravatar.cc/150?img=5',
    lastMessage: 'aww 😊',
    time: '2d',
    messages: [
      { id: 1, text: 'Did you see the puppy?', sender: 'them', time: 'Yesterday' },
      { id: 2, text: 'It\'s so cute!', sender: 'them', time: 'Yesterday' },
      { id: 3, text: 'aww 😊', sender: 'you', time: 'Yesterday' },
    ]
  },
  {
    id: 6,
    name: 'Alfonzo Schuessler',
    avatar: 'https://i.pravatar.cc/150?img=6',
    lastMessage: 'perfect!',
    time: '1m',
    messages: [
      { id: 1, text: 'How\'s the project going?', sender: 'them', time: '11:58 AM' },
      { id: 2, text: 'Just finished it!', sender: 'you', time: '11:59 AM' },
      { id: 3, text: 'perfect!', sender: 'you', time: '12:00 PM' },
    ]
  }
];

function ChatApp() {
  const [chats, setChats] = useState(initialChats);
  const [activeChat, setActiveChat] = useState(initialChats[1]); // Default to Florencio
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const messageEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const navigate = useNavigate();

  const handleVoiceCall = () => {
  navigate('/user-voice-call', { state: { avatar: activeChat.avatar } });
};

const handleVideoCall = () => {
  navigate('/user-video-call', { state: { avatar: activeChat.avatar } });
};

  // Filter chats based on search query
  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Scroll to bottom of messages when messages change
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeChat.messages]);

  const handleChatSelect = (chat) => {
    setActiveChat(chat);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    const newMessage = {
      id: activeChat.messages.length + 1,
      text: message,
      sender: 'you',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // Update the active chat with the new message
    const updatedChat = {
      ...activeChat,
      messages: [...activeChat.messages, newMessage],
      lastMessage: message,
      time: 'now'
    };

    // Update the chats array with the updated chat
    const updatedChats = chats.map(chat =>
      chat.id === activeChat.id ? updatedChat : chat
    );

    setChats(updatedChats);
    setActiveChat(updatedChat);
    setMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  const handleAttachmentClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // In a real app, you would upload the file to a server
    // For this demo, we'll just add a message with the file name
    const newMessage = {
      id: activeChat.messages.length + 1,
      text: `[Image: ${file.name}]`,
      sender: 'you',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // Update the active chat with the new message
    const updatedChat = {
      ...activeChat,
      messages: [...activeChat.messages, newMessage],
      lastMessage: `[Image: ${file.name}]`,
      time: 'now'
    };

    // Update the chats array with the updated chat
    const updatedChats = chats.map(chat =>
      chat.id === activeChat.id ? updatedChat : chat
    );

    setChats(updatedChats);
    setActiveChat(updatedChat);

    // Reset the file input
    e.target.value = null;
  };

  return (
    <div className="chat-app-container">
      <div className="chat-app-sidebar">
        <div className="chat-app-sidebar-header">
          <Link to="/patient-dasboard">
            <button className="chat-app-back-button">
              <Home size={30} />
            </button>
          </Link>
          <h1 className="chat-app-title">MediChats</h1>
        </div>

        <div className="chat-app-search-container">
          <Search size={16} className="chat-app-search-icon" />
          <input
            type="text"
            className="chat-app-search-input"
            placeholder="Search messages"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="chat-app-chat-list">
          {filteredChats.map(chat => (
            <div
              key={chat.id}
              className={`chat-app-chat-item ${activeChat.id === chat.id ? 'chat-app-chat-active' : ''}`}
              onClick={() => handleChatSelect(chat)}
            >
              <div className="chat-app-avatar-container">
                <img src={chat.avatar || "/placeholder.svg"} alt={chat.name} className="chat-app-avatar" />
                {chat.online && <span className="chat-app-online-indicator"></span>}
              </div>
              <div className="chat-app-chat-info">
                <div className="chat-app-chat-header">
                  <h3 className="chat-app-chat-name">{chat.name}</h3>
                  <span className="chat-app-chat-time">{chat.time}</span>
                </div>
                <p className="chat-app-chat-preview">{chat.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="chat-app-main">
        <div className="chat-app-main-header">
          <div className="chat-app-user-info">
            <img src={activeChat.avatar || "/placeholder.svg"} alt={activeChat.name} className="chat-app-avatar" />
            <div>
              <h2 className="chat-app-user-name">{activeChat.name}</h2>
              {activeChat.online && <p className="chat-app-user-status">
                <span className="chat-app-status-dot"></span> Online
              </p>}
            </div>
          </div>
          <div className="chat-app-actions">
            <button className="chat-app-action-button chat-app-call-button" onClick={handleVoiceCall}>
              <Phone size={20} />
            </button>
            <Link to="/user-video-call">
            <button className="chat-app-action-button chat-app-video-button" onClick={handleVideoCall}>
              <Video size={20} />
            </button>
            </Link>
          </div>
        </div>

        <div className="chat-app-messages">
          {activeChat.messages.map(msg => (
            <div
              key={msg.id}
              className={`chat-app-message ${msg.sender === 'you' ? 'chat-app-message-sent' : 'chat-app-message-received'}`}
            >
              {msg.sender === 'them' && (
                <img src={activeChat.avatar || "/placeholder.svg"} alt={activeChat.name} className="chat-app-message-avatar" />
              )}
              <div className="chat-app-message-content">
                <p className="chat-app-message-text">{msg.text}</p>
                <span className="chat-app-message-time">{msg.time}</span>
              </div>
              {msg.sender === 'you' && (
                <img src="https://i.pravatar.cc/150?img=7" alt="You" className="chat-app-message-avatar" />
              )}
            </div>
          ))}
          <div ref={messageEndRef} />
        </div>

        <form className="chat-app-input-area" onSubmit={handleSendMessage}>
          <button
            type="button"
            className="chat-app-attachment-button"
            onClick={handleAttachmentClick}
          >
            <Paperclip size={20} />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
            accept="image/*"
          />
          <input
            type="text"
            className="chat-app-message-input"
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            type="submit"
            className="chat-app-send-button"
            disabled={!message.trim()}
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatApp;