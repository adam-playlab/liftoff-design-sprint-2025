export default function Assessments() {
  const assessmentPrinciples = [
    {
      title: "Authentic",
      description: "Directly related to real-world tasks and challenges.",
    },
    {
      title: "Real-time",
      description:
        "Feedback and evaluation are continuous and immediate, not delayed until the end of a unit or term.",
    },
    {
      title: "Mastery-based",
      description:
        "Progress is measured by demonstrated competency in a skill, not merely by time spent or grades received.",
    },
    {
      title: "Connected to literacies and knowledge",
      description:
        "Evaluation directly measures the application of defined outcomes.",
    },
    {
      title: "Embedded",
      description:
        "Assessment is seamlessly integrated into the learning experience itself (e.g., project submission is the assessment).",
    },
    {
      title: "Experiential",
      description:
        "Relies heavily on observation and demonstration within real-world or simulated contexts.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Assessment and Evaluation
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our assessment system is built on authenticity and continuous
          improvement, moving away from traditional standardized tests.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          The Assessment system is:
        </h3>
        <ul className="space-y-4">
          {assessmentPrinciples.map((principle) => (
            <li key={principle.title} className="flex items-start">
              <span className="text-indigo-600 mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-gray-900">
                  {principle.title}:
                </span>{" "}
                <span className="text-gray-600">{principle.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
