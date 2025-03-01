import { useState, React } from "react";
import LandingPage from "./components/LandingPage";
import StudentDashboard from "./components/StudentDashboard";
import ProfileProgressPage from "./components/ProfileProgressPage";
import LeaderboardBadgeShowcase from "./components/LeaderboardBadgeShowcase";
import TeacherDashboard from "./components/TeacherDashboard";
import Login from "./components/Login";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Login/>

    </div>
  );
}

export default App;
