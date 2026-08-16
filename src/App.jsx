import UpcomingFeaturesSection from "./components/UpcomingFeatures/UpcomingFeaturesSection.jsx";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <header className="app-topbar">
        <div className="brand">
          <span className="brand-mark">V</span>
          <span className="brand-name">VELOOP Rewards</span>
        </div>
        <span className="brand-tag">Home Dashboard Preview</span>
      </header>

      <main>
        <UpcomingFeaturesSection />
      </main>

      <footer className="app-footer">
        Task 10 — Upcoming Features Section Redesign · Frontend Development
        Internship Task
      </footer>
    </div>
  );
}

export default App;
