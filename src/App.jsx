import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Provider Flow/Provider Login/ProviderLogin";
import Register from "./Provider Flow/Provider Register/ProviderRegister";
import Dashboard from "./Provider Flow/Provider Dashboard/Dashboard";
import Appointment from "./Provider Flow/Appointments/Appointment";
import Chat from "./Provider Flow/Provider Chat/Chat";
import Profile from "./Provider Flow/Profile Settings/Profile-settings";
import ProfileBio from "./Provider Flow/Edit Profile/EditProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointments" element={<Appointment />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<ProfileBio />} />
      </Routes>
    </Router>
  );
}

export default App;
