export default function Technology() {
  const navigatorFeatures = [
    {
      title: "Matches",
      description:
        "literacies/knowledge/skills to relevant learning experiences.",
    },
    {
      title: "Learning recommendations",
      description: "Makes personalized learning recommendations.",
    },
    {
      title: "Reflection",
      description:
        "Actively encourages reflection on performance and progress.",
    },
    {
      title: "Short-term evaluation",
      description: "Provides short-term evaluation on core skills.",
    },
    {
      title: "Learning and Employment Record",
      description: "Stores the Learning and Employment Record in the Life Log.",
    },
  ];

  const lifeLogCollects = [
    {
      title: "Reflections on self",
      description: "documenting growth and self-awareness.",
    },
    {
      title: "Proficiency",
      description: "on defined literacies, skills, and knowledge.",
    },
    {
      title: "Experiences completed",
      description: "including projects and internships.",
    },
    {
      title: "Plan for the future",
      description: "a continuously updated career and education roadmap.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Technology
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The intelligent systems that power personalized learning journeys and
          comprehensive achievement tracking.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Life Navigator */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Life Navigator
          </h3>
          <p className="text-gray-600 mb-6">
            The Navigator is the intelligent guidance system (AI or
            human-assisted) that manages the personalized learning journey:
          </p>
          <ul className="space-y-4">
            {navigatorFeatures.map((feature) => (
              <li key={feature.title} className="flex items-start">
                <span className="text-indigo-600 mr-3 mt-1">•</span>
                <div>
                  <span className="font-bold text-gray-900">
                    {feature.title}:
                  </span>{" "}
                  <span className="text-gray-600">{feature.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Life Log */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Life Log</h3>
          <p className="text-gray-600 mb-6">
            The Life Log is a secure, digital wallet platform that collects all
            evidence of a learner's development and achievement. It functions as
            a comprehensive, shareable digital transcript.
          </p>
          <h4 className="font-semibold text-gray-900 mb-4">
            The platform collects:
          </h4>
          <ul className="space-y-4 mb-6">
            {lifeLogCollects.map((item) => (
              <li key={item.title} className="flex items-start">
                <span className="text-indigo-600 mr-3 mt-1">•</span>
                <div>
                  <span className="font-bold text-gray-900">{item.title}</span>{" "}
                  <span className="text-gray-600">({item.description})</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="border-t pt-6 space-y-3">
            <p className="text-gray-600">
              Learners can use the platform to{" "}
              <span className="font-semibold">
                share their verified achievements
              </span>{" "}
              with employers and higher education institutions.
            </p>
            <p className="text-gray-600">
              Additionally, higher education and employers can{" "}
              <span className="font-semibold">
                search for students who opt to publicly display their LifeLog
              </span>
              , connecting talent directly with opportunity.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <img
          src={`${
            import.meta.env.BASE_URL
          }images/the-future-of-learning-diagram.png`}
          alt="The Future of Learning diagram"
          className="rounded-xl shadow-lg max-w-[800px] w-full"
        />
      </div>
    </section>
  );
}
