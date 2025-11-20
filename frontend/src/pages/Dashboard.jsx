import { usePlans } from "../context/PlanContext";
import PlanCard from "../components/PlanCard";

export default function Dashboard() {
  const { plans } = usePlans();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Your Business Plans</h1>

      {plans.length === 0 ? (
        <p className="text-gray-600">No business plans yet. Generate one!</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <PlanCard key={i} plan={plan} />
          ))}
        </div>
      )}
    </div>
  );
}
