import { useState } from "react";

const LandingPage = () => {
  const [loadingLearn, setLoadingLearn] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-bold">React Learning</h1>
          <p className="text-sm mt-1">
            Learning React step by step with real practice
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Learn React by Building 🚀</h2>
        <p className="text-gray-600 mb-6">
          A beginner-friendly React learning journey focused on logic, practice,
          and real-world examples.
        </p>

        <a
          href="https://reactlearing.vercel.app/"
          target="_blank"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          View Live Demo
        </a>
      </section>

      {/* What You Learn */}
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 text-center">
            What You Will Learn
          </h3>

          {loadingLearn ? (
            <div className="text-center">
              <button
                onClick={() => setLoadingLearn(false)}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Show Learning Topics
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border rounded">
                <h4 className="font-semibold mb-2">JSX & Components</h4>
                <p className="text-sm text-gray-600">
                  Learn JSX syntax and build reusable components.
                </p>
              </div>

              <div className="p-6 border rounded">
                <h4 className="font-semibold mb-2">State & Logic</h4>
                <p className="text-sm text-gray-600">
                  Understand useState, isLoading, roles, and conditions.
                </p>
              </div>

              <div className="p-6 border rounded">
                <h4 className="font-semibold mb-2">Conditional Rendering</h4>
                <p className="text-sm text-gray-600">
                  Master &&, ternary, if statements, and role-based UI.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Community Section */}
      <section className="py-12 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Open Learning for the Tech Community
        </h3>
        <p className="text-gray-600 max-w-xl mx-auto">
          This project is built to support beginners and the local tech
          community in Wales & the UK who want to learn React through clear
          examples and practice.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-5xl mx-auto px-4 text-center text-sm">
          <p>
            © {new Date().getFullYear()} React Learning • Built by{" "}
            <span className="font-semibold">Viththiyakaran</span>
          </p>
          <p className="mt-1">React Learner | Aspiring Frontend Developer</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
