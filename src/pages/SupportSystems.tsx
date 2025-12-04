export default function SupportSystems() {
  const roles = [
    {
      title: "Navigators",
      description: "who help students set goals and make sense of experiences",
    },
    {
      title: "Mentors",
      description: "who build social capital",
    },
    {
      title: "Coaches",
      description: "who develop thinking, resilience, reflection, and identity",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          A New Role for Adults: Navigators, Mentors, Coaches
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Adults shift from content deliverers to:
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <ul className="space-y-4">
          {roles.map((role) => (
            <li key={role.title} className="flex items-start">
              <span className="text-indigo-600 mr-3 mt-1">•</span>
              <div>
                <span className="font-bold text-gray-900">{role.title}</span>{" "}
                <span className="text-gray-600">{role.description}</span>
              </div>
            </li>
          ))}
        </ul>

        <p className="text-gray-700 mt-8 text-lg border-t pt-6">
          Technology delivers foundational knowledge; humans drive meaning
          making.
        </p>
      </div>
    </section>
  );
}
