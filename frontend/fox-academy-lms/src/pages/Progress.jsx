import BookASession from "../components/bookASession";
import CollaborationPhase from "../components/collaborationPhase";
import DashboardNavbar from "../components/DashboardNavbar";
import ProgressDashboard from "../components/ProgressDashboard";

export default function MyProgress() {
  return (
    <>
      <DashboardNavbar />
      <BookASession />
      <ProgressDashboard />
      <CollaborationPhase />
    </>
  );
}
