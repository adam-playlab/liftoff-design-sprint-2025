import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">The School of the Future</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Programs</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Admissions</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Welcome to Tomorrow's Learning
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Where innovation meets education. Empowering students with cutting-edge technology,
            personalized learning, and the skills to thrive in an ever-changing world.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
              Explore Programs
            </button>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition">
              Schedule a Visit
            </button>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation First</h3>
            <p className="text-gray-600">
              State-of-the-art facilities and technology-enhanced learning environments
              that inspire creativity and exploration.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalized Learning</h3>
            <p className="text-gray-600">
              Adaptive curriculum tailored to each student's unique learning style,
              pace, and interests for optimal growth.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Citizenship</h3>
            <p className="text-gray-600">
              Preparing students to be thoughtful, engaged citizens in an interconnected
              world through diverse perspectives.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-indigo-600 py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-indigo-100">College Acceptance</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15:1</div>
              <div className="text-indigo-100">Student-Teacher Ratio</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-indigo-100">Programs & Courses</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25</div>
              <div className="text-indigo-100">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 The School of the Future. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
