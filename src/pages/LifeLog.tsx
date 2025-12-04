export default function LifeLog() {
  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 64px)" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
          Your Life Plan Dashboard
        </h2>
        <p className="text-lg text-gray-700">
          Track your goals, map your future, and stay connected to the vision of
          who you’re becoming.
        </p>
        <p className="text-gray-700 mt-4">
          This is an interactive demo. Click on each tab of the dashboard:
        </p>
      </div>
      <iframe
        src="https://claude.site/public/artifacts/d19d42fe-3138-4393-9997-88ea45c481cc/embed"
        title="Claude Artifact"
        className="flex-1 w-full border-0"
        allow="clipboard-write"
        allowFullScreen
      />
    </div>
  );
}
