export default function Community() {
  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 64px)" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <p className="text-xl text-gray-700">
          Here's a demo of our community portal where students can ...
        </p>
      </div>
      <iframe
        src="https://claude.site/public/artifacts/d556136b-6a77-4a29-a78a-c4c7eb4db678/embed"
        title="Claude Artifact"
        className="flex-1 w-full"
        frameBorder="0"
        allow="clipboard-write"
        allowFullScreen
      ></iframe>
    </div>
  );
}
