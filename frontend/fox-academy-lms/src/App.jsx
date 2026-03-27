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
      </Routes>
    </Router>
  );
}

export default App;
