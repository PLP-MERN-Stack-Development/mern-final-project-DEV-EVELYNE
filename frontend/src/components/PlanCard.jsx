export default function PlanCard({ plan }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-blue-600 mb-3">
        {plan.idea || "Untitled Plan"}
      </h3>
      <p className="text-gray-700 text-sm whitespace-pre-line">
        {plan.content?.slice(0, 200) || "No details available..."}
      </p>
      <div className="mt-3 text-right">
        <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
          View More
        </button>
      </div>
    </div>
  );
}
