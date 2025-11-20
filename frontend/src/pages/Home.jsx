import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold text-blue-700 mb-4">
        Welcome to BizPlan AI 🚀
      </h1>
      <p className="text-gray-700 max-w-xl mx-auto mb-6">
        Generate professional business plans for any idea or sector, anywhere in
        the world — powered by AI.
      </p>
      <Link
        to="/generate"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Start Generating
      </Link>
    </section>
  );
}
