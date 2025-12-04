export default function SupportSystems() {
  const pillars = [
    {
      title: "The AI Coach",
      role: "Intelligent Guidance",
      description:
        "Manages the personalized learning journey, matching skills to experiences.",
      accentColor: "border-blue-500",
      items: [
        {
          label: "Smart Matching",
          text: "Aligns literacies & skills to learning experiences.",
        },
        {
          label: "Recommendations",
          text: "Suggests personalized pathways.",
        },
        {
          label: "Active Reflection",
          text: "Encourages pause & progress analysis.",
        },
        {
          label: "Evaluation",
          text: "Provides short-term feedback on core skills.",
        },
        {
          label: "The LifeLog",
          text: "Stores the Learning & Employment Record.",
        },
      ],
    },
    {
      title: "The Navigator",
      role: "Wisdom & Accountability",
      description:
        "An educator serving as a source of wisdom, facilitating the LifeLab environment.",
      accentColor: "border-orange-500",
      items: [
        {
          label: "Culture Creator",
          text: "Cultivates safety, reflection, and connection.",
        },
        {
          label: "Connection Builder",
          text: "Weaves experiences into a life plan.",
        },
        {
          label: "Habit Elevator",
          text: "Identifies & amplifies strong learning behaviors.",
        },
        {
          label: "Warm Demander",
          text: "Pushes for rigor while treating failure as fuel.",
        },
      ],
    },
    {
      title: "Peer Cohort",
      role: "Relational Wisdom",
      description:
        "A small group making meaning together, building skills that last a lifetime.",
      accentColor: "border-purple-500",
      items: [
        {
          label: "The Mirror",
          text: "Reflects strengths & blind spots.",
        },
        {
          label: "Sense-Making",
          text: "Refines emerging ideas through dialogue.",
        },
        {
          label: "Collaboration",
          text: "Develops perspective-taking & feedback skills.",
        },
        {
          label: "Belonging",
          text: "Anchors growth in deep social connection.",
        },
        {
          label: "Mutual Accountability",
          text: "Holds peers to their commitments.",
        },
      ],
    },
    {
      title: "The Community",
      role: "Extended Ecosystem",
      description:
        "Local businesses & neighbors making real-world learning possible.",
      accentColor: "border-green-500",
      items: [
        {
          label: "Opportunity Provider",
          text: "Offers authentic internships & projects.",
        },
        {
          label: "Reality Check",
          text: "Grounds learning in actual industry standards.",
        },
        {
          label: "Network Builder",
          text: "Expands social capital & opens doors.",
        },
        {
          label: "Authentic Audience",
          text: "Receives work that matters.",
        },
        {
          label: "Future Partners",
          text: "Builds early relationships with talent.",
        },
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-5 py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">
          The Learning Ecosystem
        </h2>
        <p className="text-xl text-gray-500 max-w-xl mx-auto">
          Four pillars supporting the student journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 ${pillar.accentColor}`}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-1">
              {pillar.title}
            </h3>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              {pillar.role}
            </span>
            <p className="italic text-gray-600 mb-5 leading-relaxed">
              {pillar.description}
            </p>
            <ul className="space-y-3">
              {pillar.items.map((item) => (
                <li
                  key={item.label}
                  className="relative pl-5 text-sm text-gray-600 leading-relaxed"
                >
                  <span className="absolute left-0 text-gray-300 font-bold">
                    •
                  </span>
                  <strong className="text-gray-900">{item.label}:</strong>{" "}
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
