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

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Learning Outcomes
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our model organizes learning around three major outcome areas,
          ensuring holistic development that is relevant to the individual and
          the community.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">
                Outcome Area
              </th>
              <th className="px-6 py-4 text-left font-semibold">Description</th>
              <th className="px-6 py-4 text-left font-semibold">Focus</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {outcomes.map((outcome, index) => (
              <tr
                key={outcome.area}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-6 py-4 font-bold text-gray-900">
                  {outcome.area}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {outcome.description}
                </td>
                <td className="px-6 py-4 text-gray-600">{outcome.focus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
