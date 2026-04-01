import { Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import Dashboard from "./pages/Dashboard/Dashboard";
import WatchCourse from "./pages/WatchCourse/WatchCourse";

function App() {
  return (
    <div className="min-h-screen bg-gray-50/50 font-sans pb-10">
      {/* TopNav stays outside the Routes so it shows on EVERY page! */}
      <TopNav />

      {/* This is the Traffic Cop that switches the pages */}
      <Routes>
        {/* If the URL is exactly "/", show the Dashboard */}
        <Route path="/" element={<Dashboard />} />

        {/* If the URL is "/course", show the Watch Course page */}
        <Route path="/my-learning" element={<WatchCourse />} />
      </Routes>
    </div>
  );
}

export default App;
