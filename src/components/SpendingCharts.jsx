import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Food", value: 400 },
  { name: "Rent", value: 1000 },
  { name: "Shopping", value: 600 },
  { name: "Bills", value: 300 },
];

const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444"];

function SpendingChart() {
  return (
   <div className="bg-white/70 backdrop-blur-lg p-5 rounded-xl shadow mt-6 dark:bg-gray-800/70">
      <h2 className="text-lg font-semibold mb-4">Spending Breakdown</h2>

      <div className="w-full h-64">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={80}
              label
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SpendingChart;