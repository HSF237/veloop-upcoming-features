import React from "react";
import UpcomingFeaturesSection from "./components/UpcomingFeatures/UpcomingFeaturesSection.jsx";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      {/* Topbar Fintech Header */}
      <header className="app-topbar">
        <div className="brand">
          <span className="brand-mark">V</span>
          <div className="brand-text">
            <span className="brand-name">VELOOP</span>
            <span className="brand-sub">REWARDS</span>
          </div>
        </div>

        <nav className="app-nav">
          <span className="nav-item">Dashboard</span>
          <span className="nav-item">Earn</span>
          <span className="nav-item nav-active">Roadmap</span>
          <span className="nav-item">Leaderboard</span>
        </nav>

        <div className="user-profile-badge">
          <span className="xp-pill">⚡ 2,450 XP</span>
          <div className="avatar-circle">H</div>
          <span className="user-name">Hasan</span>
        </div>
      </header>

      {/* Main Section */}
      <main>
        <UpcomingFeaturesSection />
      </main>

      {/* Dashboard Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <span className="footer-brand">VELOOP Rewards Ecosystem</span>
          <span className="footer-dot">•</span>
          <span>Task 10 — Upcoming Features Section Redesign</span>
          <span className="footer-dot">•</span>
          <span>Frontend Internship Submission</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
