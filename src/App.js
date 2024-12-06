import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import BottomNavBar from "./components/BottomNavBar";
import Home from "./components/pages/HomePage";
import Groups from "./components/pages/GroupsPage";
import Leaderboard from "./components/pages/LeaderBoardPage";
// import AdminPage from "./components/pages/AdminPage";
import WalletPage from "./components/pages/WalletPage";
import DiscoveryPage from "./components/pages/DiscoveryPage";

const App = () => {
  const userLevel = 1;
  const userScore = 1000;

  return (
    <Router>
      <div style={{ paddingBottom: "60px" }}> {/* Adjust padding to avoid overlap with BottomNavBar */}
        <Routes>
          {/* Redirect from the root URL to /home */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route
            path="/home"
            element={<Home userLevel={userLevel} userScore={userScore} />}
          />
          <Route path="/group" element={<Groups />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/discovery" element={<DiscoveryPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          {/* Add more routes as needed */}
        </Routes>
        <BottomNavBar />
      </div>
    </Router>
  );
};

export default App;
