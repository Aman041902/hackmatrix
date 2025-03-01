import { useState } from "react";
import LandingPage from "./components/LandingPage";
import StudentDashboard from "./components/StudentDashboard";
import CoursePlaylistPage from "./CoursePlaylistPage";
import ProfileProgressPage from "./components/ProfileProgressPage";
import LeaderboardBadgeShowcase from "./components/LeaderboardBadgeShowcase";
import TeacherDashboard from "./components/TeacherDashboard";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <LandingPage></LandingPage> */}
      {/* <StudentDashboard></StudentDashboard> */}
      {/* <CoursePlaylistPage></CoursePlaylistPage> */}
      {/* <LeaderboardBadgeShowcase></LeaderboardBadgeShowcase> */}
      {/* <TeacherDashboard></TeacherDashboard> */}
      <ProfileProgressPage></ProfileProgressPage>
    </div>
  );
}

export default App;
