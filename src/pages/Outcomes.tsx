export default function Outcomes() {
  const outcomes = [
    {
      area: "Skills and Mindsets",
      description:
        "The essential ways of being and thinking necessary for navigating a complex world and continuously developing oneself.",
      focus:
        "Agency, Adaptability, Confidence, Resilience, Critical Thinking, etc.",
    },
    {
      area: "Literacies and Knowledge",
      description:
        "The necessary understanding and practical knowledge for navigating and contributing to the world.",
      focus: (
        <>
          <strong>Core</strong> (Required foundational knowledge),{" "}
          <strong>Community</strong> (Knowledge important to local and global
          community), <strong>Passion</strong> (Knowledge important to the
          individual learner).
        </>
      ),
    },
    {
      area: "Experiences",
      description:
        "The application of acquired skills and knowledge to authentic, real-world settings.",
      focus: "Projects, Internships, Community Service, Credentialed Learning.",
    },
  ];

  const videos = [
    { src: `${import.meta.env.BASE_URL}images/outcomes/agency.mp4`, title: "Agency" },
    { src: `${import.meta.env.BASE_URL}images/outcomes/purpose.mp4`, title: "Purpose" },
    { src: `${import.meta.env.BASE_URL}images/outcomes/20251203_2115_01kbkmvgdqfn38ds81jq934bjw.mp4`, title: "Video 3" },
    { src: `${import.meta.env.BASE_URL}images/outcomes/20251203_2125_01kbkntpvneg6bf8a32m96vzcc.mp4`, title: "Video 4" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Learning Outcomes
        </h2>
      </div>

      {/* Main Image */}
      <div className="flex justify-center mb-12">
        <img
          src={`${import.meta.env.BASE_URL}images/outcomes/Gemini_Generated_Image_mf985mf985mf985m.png`}
          alt="Learning Outcomes"
          className="max-w-[1000px] w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Videos Grid - 4 across on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {videos.map((video, index) => (
          <div key={index} className="flex flex-col">
            <video
              src={video.src}
              controls
              className="w-full rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
