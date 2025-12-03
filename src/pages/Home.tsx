export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            We prepare you for life—with real opportunities, real skills, and
            real community.
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our purpose is to launch every young person into opportunity by
            preparing them for life and careers of the future. We do this
            through real-world learning, practical skills, caring mentorship,
            and meaningful choices that build agency, adaptability, belonging,
            and lifelong confidence—so they can contribute to their communities
            and shape a better future for all.
          </p>
          <p>TODO: everything below is placeholder content...</p>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Innovation First
            </h3>
            <p className="text-gray-600">
              State-of-the-art facilities and technology-enhanced learning
              environments that inspire creativity and exploration.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Personalized Learning
            </h3>
            <p className="text-gray-600">
              Adaptive curriculum tailored to each student's unique learning
              style, pace, and interests for optimal growth.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Global Citizenship
            </h3>
            <p className="text-gray-600">
              Preparing students to be thoughtful, engaged citizens in an
              interconnected world through diverse perspectives.
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
    </>
  );
}
