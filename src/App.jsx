import Medicare from "./PatientFlow/Medicare.jsx"
import Signup from "./PatientFlow/Signup.jsx"
import Homeps from "./PatientFlow/Homeps.jsx"
import RegisterPatient from "./PatientFlow/RegisterPatient/RegisterPatient.jsx"
import PatientLogin from "./PatientFlow/PatientLogin/PatientLogin.jsx"
import Dashboard from "./PatientFlow/DoctorOverview/Dashboard.jsx"
import DoctorOverview from "./PatientFlow/DoctorOverview.jsx"
import VideoCall from "./PatientFlow/VideoCall.jsx"
import MediChats from "./PatientFlow/MediChats.jsx"
import AiChat from "./PatientFlow/AiChat.jsx"
import LoginSettings from "./PatientFlow/LoginSettings/LoginSettings.jsx"
import Notifications from './PatientFlow/DoctorOverview/Notifications/Notifications.jsx';
import PatientVideoCall from './PatientFlow/DoctorOverview/PatientVideoCall/PatientVideoCall.jsx';
import PersonalInfo from './PatientFlow/PersonalInfo/PersonalInfo.jsx';
import MapsViewUser from './PatientFlow/MapsViewUser/MapsViewUser.jsx';
import Maps from './PatientFlow/Maps/Maps.jsx';
import LandingPage from "./PatientFlow/HomePage/LandingPage.jsx"
function App() {
  return (
    <div>
      <RegisterPatient/>
      <PatientLogin/>
      <DoctorOverview/>
      <PatientVideoCall/>
      <LoginSettings/>
      <Notifications/>
      <PersonalInfo/>
      <MapsViewUser/>
      <Maps/>
      <LandingPage/>
      
    </div>
  );
}

export default App;
