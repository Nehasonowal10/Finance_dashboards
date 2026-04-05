function SummaryCards() {
  const data = [
    { title: "Total Balance", amount: "₹50,000" },
    { title: "Income", amount: "₹70,000" },
    { title: "Expenses", amount: "₹20,000" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {data.map((card, index) => (
        <div
          key={index}
          className="bg-white/70 backdrop-blur-lg p-5 rounded-xl shadow hover:shadow-xl transition dark:bg-gray-800/70"
        >
          <h2 className="text-gray-500">{card.title}</h2>
          <p className="text-2xl font-bold mt-2">{card.amount}</p>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;