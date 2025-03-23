import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProviderLogin from "./Provider Flow/Provider Login/ProviderLogin";
import ProviderRegister from "./Provider Flow/Provider Register/ProviderRegister";
import ProviderDashboard from "./Provider Flow/Provider Dashboard/Dashboard";
import Appointment from "./Provider Flow/Appointments/Appointment";
import Chat from "./Provider Flow/Provider Chat/Chat";
import Profile from "./Provider Flow/Profile Settings/Profile-settings";
import ProfileBio from "./Provider Flow/Edit Profile/EditProfile";
import Ai from './Patient Flow/AiChat/AiChat'
import Dashboard from './Patient Flow/Dashboard/Dashboard'
import DoctorOverview from './Patient Flow/DoctorOverview/DoctorOverview'
import HomePage from './Patient Flow/HomePage/LandingPage'
import LoginSettings from './Patient Flow/LoginSettings/LoginSettings'
import Maps from './Patient Flow/Maps/Maps'
import MapsViewUser from './Patient Flow/MapsViewUser/MapsViewUser'
import MediChats from './Patient Flow/MediChats/MediChats'
import Notifications from './Patient Flow/Notifications/Notifications'
import PatientLogin from './Patient Flow/PatientLogin/PatientLogin'
import PatientVideoCall from './Patient Flow/PatientVideoCall/PatientVideoCall'
import PatientVoiceCall from './Patient Flow/PatientVoiceCall/PatientVoiceCall'
import PersonalInfo from './Patient Flow/PersonalInfo/PersonalInfo'
import RegisterPatient from './Patient Flow/RegisterPatient/RegisterPatient'
import Home from './Patient Flow/HomePage/LandingPage'
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/provider-login" element={<ProviderLogin />} />
        <Route path="/register" element={<ProviderRegister />} />
        <Route path="/dashboard" element={<ProviderDashboard />} />
        <Route path="/appointments" element={<Appointment />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<ProfileBio />} />
        <Route path="/ai-chat" element={<Ai />} />
        <Route path="/PatientDashboard" element={ <Dashboard />} />
        <Route path="/DoctorOverview" element={ <DoctorOverview />} />
        <Route path="/Homepage" element={ <HomePage />} />
        <Route path="/LoginSettings" element={ <LoginSettings />} />
        <Route path="/Maps" element={ <Maps />} />
        <Route path="/MapsViewUser" element={ <MapsViewUser />} />
        <Route path="/MediChats" element={ <MediChats />} />
        <Route path="/Notifications" element={ <Notifications />} />
        <Route path="/PatientLogin " element={ <PatientLogin />} />
        <Route path="/PatientVideoCall" element={ <PatientVideoCall />} />
        <Route path="/PatientVoiceCall" element={ <PatientVoiceCall />} />
        <Route path="/PersonalInfo" element={ <PersonalInfo />} />
        <Route path="/RegisterPatient" element={ <RegisterPatient />} />
      </Routes>
    </Router>
  );
}

export default App;
