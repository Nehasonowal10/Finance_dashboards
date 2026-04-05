import { useStore } from "../store/useStore";

function Insights() {
  const { transactions } = useStore();

  let totalIncome = 0;
  let totalExpense = 0;
  let categoryMap = {};

  transactions.forEach((tx) => {
    if (tx.type === "Income") {
      totalIncome += tx.amount;
    } else {
      totalExpense += tx.amount;
      categoryMap[tx.category] =
        (categoryMap[tx.category] || 0) + tx.amount;
    }
  });

  const highestCategory = Object.keys(categoryMap).reduce(
    (a, b) => (categoryMap[a] > categoryMap[b] ? a : b),
    "None"
  );

  return (
    <div className="bg-white/70 backdrop-blur-lg p-5 rounded-xl shadow mt-6 dark:bg-gray-800/70">
      <h2 className="text-lg font-semibold mb-4">Insights</h2>

      <div className="space-y-2">
        <p> Total Income: ₹{totalIncome}</p>
        <p> Total Expenses: ₹{totalExpense}</p>
        <p> Highest Spending Category: {highestCategory}</p>

        <p className="mt-3 text-gray-600">
          {totalExpense > totalIncome
            ? "You are spending more than you earn."
            : "Your finances are balanced."}
        </p>
      </div>
    </div>
  );
}

export default Insights;