import { useState } from "react";
import { HashRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Outcomes from "./pages/Outcomes";
import LearningExperience from "./pages/LearningExperience";
import Assessments from "./pages/Assessments";
import Technology from "./pages/Technology";
import About from "./pages/About";
import LifeLog from "./pages/LifeLog";
import Community from "./pages/Community";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/outcomes", label: "Outcomes" },
  { to: "/learning-experience", label: "Learning Experience" },
  { to: "/assessments", label: "Assessments" },
  { to: "/technology", label: "Technology" },
  { to: "/life-log", label: "Life Log" },
  { to: "/community", label: "Community" },
  { to: "/about", label: "About" },
];

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              LifeLab
            </Link>
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-1.5 rounded-md font-medium ${
                  isActive(link.to)
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-3 py-2 rounded-md font-medium ${
                  isActive(link.to)
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/outcomes" element={<Outcomes />} />
          <Route path="/learning-experience" element={<LearningExperience />} />
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/about" element={<About />} />
          <Route path="/life-log" element={<LifeLog />} />
          <Route path="/community" element={<Community />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 LifeLab. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
