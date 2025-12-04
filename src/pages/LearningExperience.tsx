export default function LearningExperience() {
  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 64px)" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Learning Experience
        </h2>
        <p className="text-gray-700">
          The learning environment is structured into two complementary tracks:
          Designed Experiences and Core Experiences.
        </p>
      </div>
      <iframe
        src="https://visual-definition-guide--nate163.replit.app/"
        title="Visual Definition Guide"
        className="flex-1 w-full border-0"
        allowFullScreen
      />
    </div>
  );
}
