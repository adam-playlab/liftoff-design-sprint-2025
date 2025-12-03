import { HashRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Navigation */}
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold text-indigo-600">
                  The School of the Future
                </Link>
              </div>
              <div className="hidden md:flex space-x-8">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-indigo-600 font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-indigo-600 font-medium"
                >
                  About
                </Link>
                {/*
                <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Programs</a>
                <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Admissions</a>
                <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Contact</a>
                */}
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 The School of the Future. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
