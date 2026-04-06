import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import ApplicationForm from "./pages/ApplicationForm";
import ApplicationReceived from "./pages/ApplicationReceived";
import Dashboard from "./pages/Dashboard";
import MyLearning from "./pages/MyLearning";
import ModuleDetail from "./pages/ModuleDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/create" element={<SignupCreate />} />
        <Route path="/verify-email" element={<EmailVerification />} />
        <Route path="/application" element={<ApplicationForm />} />
        <Route path="/application/success" element={<ApplicationReceived />} />
        <Route path="/application/success/link/:token" element={<ApplicationReceived />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/forgot-password/sent" element={<ForgotPasswordSent />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/onboarding/profile" element={<SetProfile />} />
        <Route path="/onboarding/team" element={<JoinTeam />} />
        <Route path="/onboarding/learn" element={<LearnPreview />} />
        <Route path="/onboarding/complete" element={<OnboardingComplete />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/learning" element={<MyLearning />} />
        <Route path="/learning/module" element={<ModuleDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
