export default function LifeLog() {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
          LifeLog: Your Life Plan Dashboard
        </h2>
        <p className="text-lg text-gray-700">
          Track your goals, map your future, and stay connected to the vision of
          who you’re becoming.
        </p>

        <p className="text-gray-700 mt-4">
          This is an interactive demo. Click on each tab of the dashboard.
        </p>
        <p className="mt-4">
          <em>
            Note: In order to build this quickly and effectively, we will stitch
            together existing technologies such as{" "}
            <a
              href="https://futre.me/"
              className="text-blue-600 hover:underline"
            >
              futre.me
            </a>{" "}
            wherever possible.
          </em>
        </p>
      </div>
      <iframe
        src="https://claude.site/public/artifacts/d19d42fe-3138-4393-9997-88ea45c481cc/embed"
        title="Claude Artifact"
        className="w-full h-[2500px] border-0"
        allow="clipboard-write"
        allowFullScreen
      />
    </div>
  );
}
