export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center">
          <h1 className="text-6xl sm:text-7xl font-black mb-8 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            LifeLab
          </h1>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            We prepare learners for life—with real opportunities,
            <br />
            real skills, and real community.
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We launch every young person into opportunity by preparing them for
            life and careers of the future. We help students navigate a rapidly
            changing world, contribute to their communities and shape a better
            future for all.
          </p>
          <div className="max-w-2xl mx-auto text-left mt-8 mb-10">
            <p className="text-lg font-semibold text-gray-800 mb-4">
              We promise every learner:
            </p>
            <ul className="text-gray-600 space-y-2 list-disc list-inside">
              <li>A life plan they own, co-designed with mentors</li>
              <li>
                Real experience before they enter the workforce or higher
                education
              </li>
              <li>Skills that endure even as the world shifts</li>
              <li>
                Belonging and purpose grounded in identity, community, and
                contribution
              </li>
              <li>
                Confidence and resilience to learn, adapt, and thrive—no matter
                what the future holds
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mb-12 flex justify-center">
        <img
          src={`${import.meta.env.BASE_URL}images/home-page.png`}
          className="rounded-xl shadow-lg max-w-[1000px] w-full"
        />
      </div>

      <div className="flex justify-center">
        <video
          src={`${import.meta.env.BASE_URL}videos/lifelab.mp4`}
          className="rounded-xl shadow-lg max-w-[1000px] w-full"
          controls
          autoPlay
          playsInline
          muted
          loop
        />
      </div>

      <div className="mt-12 flex justify-center">
        <div className="flex gap-4 max-w-[1000px] w-full px-4">
          <img
            src={`${import.meta.env.BASE_URL}images/img1.png`}
            className="rounded-xl shadow-lg w-1/2"
          />
          <img
            src={`${import.meta.env.BASE_URL}images/img2.png`}
            className="rounded-xl shadow-lg w-1/2"
          />
        </div>
      </div>
    </>
  );
}
