function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md p-5">
      <h2 className="text-xl font-bold mb-6">💰 Finance</h2>

      <ul className="space-y-4">
        <li className="cursor-pointer hover:text-blue-500">Dashboard</li>
        <li className="cursor-pointer hover:text-blue-500">Transactions</li>
        <li className="cursor-pointer hover:text-blue-500">Insights</li>
      </ul>
    </div>
  );
}

export default Sidebar;