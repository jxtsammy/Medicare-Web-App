import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProviderLogin from "./Provider Flow/Provider Login/ProviderLogin";
import ProviderRegister from "./Provider Flow/Provider Register/ProviderRegister";
import ProviderDashboard from "./Provider Flow/Provider Dashboard/Dashboard";
import Appointment from "./Provider Flow/Appointments/Appointment";
import Chat from "./Provider Flow/Provider Chat/Chat";
import Profile from "./Provider Flow/Profile Settings/Profile-settings";
import ProfileBio from "./Provider Flow/Edit Profile/EditProfile";
import LandingPage from "./Landing Page/LandingPage"
import PatientLogin from "./Patient Flow/Patient Login/PatientLogin"
import PatientRegister from "./Patient Flow/Patient Register/PatientRegister"
import PatientDashboard from "./Patient Flow/Patient Dashboard/PatientDashboard"
import AiChat from "./Patient Flow/AI Chat/Ai";
import ProviderInfo from './Patient Flow/ProviderInfo/ProviderInfo'
import PatientChats from './Patient Flow/PatientChat/PatientChats'
import PatientVoiceCall from './Patient Flow/PatientChat/Chat Voice/VoiceCall'
import UserVideoChat from './Patient Flow/PatientChat/Video Chat/UserVideoChat'
import Maps from './Patient Flow/User Maps/Maps'
import UserProfile from './Patient Flow/User Settings/UserSettings'
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/provider-login" element={<ProviderLogin />} />
        <Route path="/provider-register" element={<ProviderRegister />} />
        <Route path="/provider-dashboard" element={<ProviderDashboard />} />
        <Route path="/appointments" element={<Appointment />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<ProfileBio />} />
        <Route path="/patient-login" element={<PatientLogin />} />
        <Route path="/patient-register" element={<PatientRegister />} />
        <Route path="/patient-dasboard" element={<PatientDashboard />} />
        <Route path="/medi-ai" element={<AiChat />} />
        <Route path="/provider-overview" element={<ProviderInfo />} />
        <Route path="/user-chats" element={<PatientChats />} />
        <Route path="/user-voice-call" element={<PatientVoiceCall />} />
        <Route path="/user-video-call" element={<UserVideoChat />} />
        <Route path="/map" element={<Maps />} />
        <Route path="/user-settings" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
