export default function LearningExperience() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Learning Experience
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The learning environment is structured into two complementary tracks:
          Designed Experiences and Core Experiences.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Designed Experiences */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-indigo-600 mb-2">
            A. Designed Experiences
          </h3>
          <p className="text-gray-500 mb-6 italic">Learner-Centered</p>
          <p className="text-gray-600 mb-6">
            These experiences are highly personalized and focused on application
            and exploration, driven by learner interest and Navigator guidance.
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Projects</h4>
              <p className="text-gray-600">
                Deep, hands-on learning tasks that can be{" "}
                <strong>Individual</strong>,{" "}
                <strong>Community-driven</strong> (addressing real community
                needs), or <strong>Peer-driven</strong> (collaborative
                problem-solving).
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2">Internships</h4>
              <p className="text-gray-600">
                Authentic work experiences that are either{" "}
                <strong>Digital</strong> (remote, project-based) or{" "}
                <strong>On-site</strong> (traditional placements).
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2">
                Post-secondary Learning
              </h4>
              <p className="text-gray-600">
                Opportunities for advanced learning, including{" "}
                <strong>External on college campuses</strong> or taking{" "}
                <strong>Stackable, credentialed courses</strong> that grant high
                school credit for real-world experience.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2">
                Personalized Learning
              </h4>
              <p className="text-gray-600">
                Highly individualized learning pathways, which are{" "}
                <strong>Self-directed</strong>, managed by a{" "}
                <strong>Navigator (AI or human)</strong> who provides guidance,
                and accessible <strong>On-demand</strong> for specific skill
                acquisition.
              </p>
            </div>
          </div>
        </div>

        {/* Core Experiences */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-indigo-600 mb-2">
            B. Core Experiences
          </h3>
          <p className="text-gray-500 mb-6 italic">Required</p>
          <p className="text-gray-600 mb-6">
            These are mandatory, foundational activities designed to build
            community, belonging, and core literacies.
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Lifelab</h4>
              <p className="text-gray-600">
                A consistent, required advisory period focused on{" "}
                <strong>community-building</strong>, <strong>connection</strong>
                , and the development of self-awareness and social-emotional
                skills.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2">Seminar</h4>
              <p className="text-gray-600">
                Structured <strong>group learning</strong> sessions focused on
                acquiring and discussing the required{" "}
                <strong>Core Literacies and Knowledge</strong>.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2">
                Community Activities
              </h4>
              <p className="text-gray-600">
                Required participation in extracurricular activities vital for
                belonging and social growth, such as{" "}
                <strong>sports, clubs, and performance groups</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
