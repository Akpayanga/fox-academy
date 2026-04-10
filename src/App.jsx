<<<<<<< HEAD
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import ProfileSettings from './components/ProfileSettings/ProfileSettings'
import AccountSecurity from './components/AccountSecurity/AccountSecurity'
import Notifications from './components/Notifications/Notifications'
import Privacy from './components/Privacy/Privacy'
import Appearance from './components/Appearance/Appearance'
import ConnectedApps from './components/ConnectedApps/ConnectedApps'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="page-layout">
        <div className="page-content">
          <div className="settings-header">
            <h1 className="settings-title">Settings</h1>
            <p className="settings-subtitle">Manage your account, preferences, and privacy.</p>
          </div>

          <div className="settings-grid">
            <div className="settings-main">
              <ProfileSettings />
              <AccountSecurity />
              <Notifications />
              <Privacy />
              <Appearance />
              <ConnectedApps />
            </div>
            <aside className="settings-aside">
              <Sidebar />
            </aside>
          </div>
        </div>
      </main>
    </>
  )
}
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SignupCreate from "./pages/SignupCreate";
import ForgotPassword from "./pages/ForgotPassword";
import ForgotPasswordSent from "./pages/ForgotPasswordSent";
import EmailVerification from "./pages/EmailVerification";
import Welcome from "./pages/Welcome";
import SetProfile from "./pages/SetProfile";
import JoinTeam from "./pages/JoinTeam";
import LearnPreview from "./pages/LearnPreview";
import OnboardingComplete from "./pages/OnboardingComplete";
import WatchCourse from "./pages/WatchCourse";
import Progress from "./pages/TeamDirectory";
import WorkBoard from "./pages/WorkBoard";
import MentorManagement from "./pages/MentorManagement";
import EmailPreviewLayout from "./pages/EmailPreviewLayout";
import MentorActivation from "./pages/MentorActivation";
import MentorProfileSetup from "./pages/MentorProfileSetup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/create" element={<SignupCreate />} />
        <Route path="/verify-email" element={<EmailVerification />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/forgot-password/sent" element={<ForgotPasswordSent />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/onboarding/profile" element={<SetProfile />} />
        <Route path="/onboarding/team" element={<JoinTeam />} />
        <Route path="/onboarding/learn" element={<LearnPreview />} />
        <Route path="/onboarding/complete" element={<OnboardingComplete />} />
        <Route path="/watch-course" element={<WatchCourse />} />
        <Route
          path="/course/:courseId/module/:moduleId"
          element={<WatchCourse />}
        />
        <Route path="/team" element={<Progress />} />
        <Route path="/work-board" element={<WorkBoard />} />
        <Route path="/mentors" element={<MentorManagement />} />
        <Route path="email-preview" element={<EmailPreviewLayout />} />
        <Route path="/activate" element={<MentorActivation />} />
        <Route path="/profile-setup" element={<MentorProfileSetup />} />
      </Routes>
    </Router>
  );
}

export default App;
>>>>>>> 6075cf3b8bd892a9ac9a8f6b33458eada61bf131
