import { useState } from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Outcomes from "./pages/Outcomes";
import LearningExperience from "./pages/LearningExperience";
import Assessments from "./pages/Assessments";
import Technology from "./pages/Technology";
import About from "./pages/About";
import LifeLog from "./pages/LifeLog";
import Community from "./pages/Community";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <HashRouter>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Navigation */}
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold text-indigo-600">
                  Life Lab
                </Link>
              </div>
              {/* Mobile menu button */}
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
              {/* Desktop navigation */}
              <div className="hidden md:flex space-x-8">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-indigo-600 font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/outcomes"
                  className="text-gray-700 hover:text-indigo-600 font-medium"
                >
                  Outcomes
                </Link>
                <Link
                  to="/learning-experience"
                  className="text-gray-700 hover:text-indigo-600 font-medium"
                >
                  Learning Experience
                </Link>
                <Link
                  to="/assessments"
                  className="text-gray-700 hover:text-indigo-600 font-medium"
                >
                  Assessments
                </Link>
                <Link
                  to="/technology"
                  className="text-gray-700 hover:text-indigo-600 font-medium"
                >
                  Technology
                </Link>
                <Link
                  to="/life-log"
                  className="text-gray-700 hover:text-indigo-600 font-medium"
                >
                  Life Log
                </Link>
                <Link
                  to="/community"
                  className="text-gray-700 hover:text-indigo-600 font-medium"
                >
                  Community
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-indigo-600 font-medium"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200">
              <div className="px-4 py-2 space-y-1">
                <Link
                  to="/"
                  className="block py-2 text-gray-700 hover:text-indigo-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/outcomes"
                  className="block py-2 text-gray-700 hover:text-indigo-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Outcomes
                </Link>
                <Link
                  to="/learning-experience"
                  className="block py-2 text-gray-700 hover:text-indigo-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Learning Experience
                </Link>
                <Link
                  to="/assessments"
                  className="block py-2 text-gray-700 hover:text-indigo-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Assessments
                </Link>
                <Link
                  to="/technology"
                  className="block py-2 text-gray-700 hover:text-indigo-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Technology
                </Link>
                <Link
                  to="/life-log"
                  className="block py-2 text-gray-700 hover:text-indigo-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Life Log
                </Link>
                <Link
                  to="/community"
                  className="block py-2 text-gray-700 hover:text-indigo-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Community
                </Link>
                <Link
                  to="/about"
                  className="block py-2 text-gray-700 hover:text-indigo-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
              </div>
            </div>
          )}
        </nav>

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
              &copy; 2025 Life Lab. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
