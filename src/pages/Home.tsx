export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <h1 className="text-6xl sm:text-7xl font-black mb-4 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            LifeLab
          </h1>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            We prepare you for life—with real opportunities,
            <br /> real skills, and real community.
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our purpose is to launch every young person into opportunity by
            preparing them for life and careers of the future. We do this
            through real-world learning, practical skills, caring mentorship,
            and meaningful choices that build agency, adaptability, belonging,
            and lifelong confidence—so they can contribute to their communities
            and shape a better future for all.
          </p>
        </div>
      </section>

      <div className="flex justify-center">
        <video
          src={`${import.meta.env.BASE_URL}videos/lifelab.mp4`}
          className="rounded-xl shadow-lg max-w-[800px] w-full"
          controls
          autoPlay
          muted
          loop
        />
      </div>

      <div className="mt-12 flex justify-center">
        <img
          src={`${import.meta.env.BASE_URL}images/img1.png`}
          className="rounded-xl shadow-lg max-w-[800px] w-full"
        />
      </div>

      <div className="mt-12 flex justify-center">
        <img
          src={`${import.meta.env.BASE_URL}images/img2.png`}
          className="rounded-xl shadow-lg max-w-[800px] w-full"
        />
      </div>
    </>
  );
}
