import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SignupCreate from "./pages/SignupCreate";
import ForgotPassword from "./pages/ForgotPassword";
import ForgotPasswordSent from "./pages/ForgotPasswordSent";
import ResetPassword from "./pages/ResetPassword";
import EmailVerification from "./pages/EmailVerification";
import Welcome from "./pages/Welcome";
import SetProfile from "./pages/SetProfile";
import JoinTeam from "./pages/JoinTeam";
import LearnPreview from "./pages/LearnPreview";
import OnboardingComplete from "./pages/OnboardingComplete";
import ApplicationForm from "./pages/ApplicationForm";
import ApplicationReceived from "./pages/ApplicationReceived";
import WatchCourse from "./pages/WatchCourse";
import CourseDetails from "./pages/CourseDetails";
import MyProgress from './pages/Progress';
import MyProgressNew from './pages/progressPhase2';
import Dashboard from "./pages/Dashboard";
import MyLearning from "./pages/MyLearning";
import Assignments from "./pages/Assignments";
import SubmittedAssignments from "./pages/SubmittedAssignments";
import UserPersonaAssignment from "./pages/UserPersonaAssignment";
import Resources from "./pages/Resources";
import Community from "./pages/Community";
import TeamDirectory from "./pages/TeamDirectory";
import WorkBoard from "./pages/WorkBoard";
import MyWorkBoard from "./pages/MyWorkBoard";
import ModuleDetail from "./pages/ModuleDetail";
import Phase2overview from "./pages/phase2overview";
import CreateDiscussion from "./pages/CreateDiscussion";
import DiscussionDetail from "./pages/DiscussionDetail";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import SubmitDeliverable from "./pages/SubmitDeliverable";
import ProfileDetails from "./pages/ProfileDetails";
import Certifications from "./pages/Certifications";
import AccountSecurity from "./pages/AccountSecurity";
import AdminLanding from "./pages/Admin/AdminLanding";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import MentorManagement from "./pages/Admin/MentorManagement";
import InternManagement from "./pages/Admin/InternManagement";
import CohortManagement from "./pages/Admin/CohortManagement";
import AdminAnalytics from "./pages/Admin/AdminAnalytics";
import AddMentor from "./pages/Admin/AddMentor";
import MentorActivate from "./pages/MentorActivate";
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
        <Route path="/application" element={<ApplicationForm />} />
        <Route path="/application/success" element={<ApplicationReceived />} />
        <Route path="/application/success/link/:token" element={<ApplicationReceived />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/forgot-password/sent" element={<ForgotPasswordSent />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/mentor/activate" element={<MentorActivate />} />
        <Route path="/mentor/setup" element={<MentorProfileSetup />} />
        <Route path="/onboarding/profile" element={<SetProfile />} />
        <Route path="/onboarding/team" element={<JoinTeam />} />
        <Route path="/onboarding/learn" element={<LearnPreview />} />
        <Route path="/onboarding/complete" element={<OnboardingComplete />} />
        <Route path="/watch-course" element={<WatchCourse />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/progress" element={<MyProgress />} />
        <Route path="/progressNew" element={<MyProgressNew />} />
        <Route path="/overview" element={<Phase2overview />} />
        <Route
          path="/course/:courseId/module/:moduleId"
          element={<WatchCourse />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mylearning" element={<MyLearning />} />
        <Route path="/mylearning/module" element={<ModuleDetail />} />
        <Route path="/learning" element={<MyLearning />} />
        <Route path="/learning/module" element={<ModuleDetail />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/assignments/submitted" element={<SubmittedAssignments />} />
        <Route path="/assignments/user-persona" element={<UserPersonaAssignment />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/create" element={<CreateDiscussion />} />
        <Route path="/community/discussion/:id" element={<DiscussionDetail />} />
        <Route path="/team" element={<TeamDirectory />} />
        <Route path="/work-board" element={<WorkBoard />} />
        <Route path="/my-work-board" element={<MyWorkBoard />} />
        <Route path="/submit-deliverable" element={<SubmitDeliverable />} />
        <Route path="/profile-details" element={<ProfileDetails />} />
        <Route path="/certifications" element={<Certifications />} />
        
        {/* Added Missing Routes */}
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/account-security" element={<AccountSecurity />} />
        <Route path="/notifications" element={<Notifications />} />
        
        {/* Admin / Control Room Route */}
        <Route path="/control-room" element={<AdminLanding />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/control-room/dashboard" element={<AdminDashboard />} />
        <Route path="/control-room/mentors" element={<MentorManagement />} />
        <Route path="/control-room/mentors/add" element={<AddMentor />} />
        <Route path="/control-room/interns" element={<InternManagement />} />
        <Route path="/control-room/cohorts" element={<CohortManagement />} />
        <Route path="/control-room/analytics" element={<AdminAnalytics />} />
        
        {/* Catch-all fallback Route to redirect 404s and prevent blank page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
