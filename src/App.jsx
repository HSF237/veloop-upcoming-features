import React from "react";
import UpcomingFeaturesSection from "./components/UpcomingFeatures/UpcomingFeaturesSection.jsx";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <header className="app-topbar">
        <div className="brand">
          <img src="/veloop-logo.png" alt="VELOOP Logo" className="brand-logo" />
          <span className="brand-name">VELOOP Rewards</span>
        </div>
      </header>

      <main>
        <UpcomingFeaturesSection />
      </main>

      <footer className="app-footer">
        Task 10 — Upcoming Features Section · VELOOP Rewards
      </footer>
    </div>
  );
}

export default App;
