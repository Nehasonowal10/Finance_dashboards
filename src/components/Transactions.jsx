// import { useState } from "react";

// const initialData = [
//   { id: 1, date: "2026-04-01", amount: 500, category: "Food", type: "Expense" },
//   { id: 2, date: "2026-04-02", amount: 2000, category: "Salary", type: "Income" },
//   { id: 3, date: "2026-04-03", amount: 800, category: "Shopping", type: "Expense" },
// ];

// function Transactions() {
//   const [search, setSearch] = useState("");

//   const filteredData = initialData.filter((item) =>
//     item.category.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="bg-white p-5 rounded-xl shadow mt-6">
//       <h2 className="text-lg font-semibold mb-4">Transactions</h2>

//       {/* Search */}
//       <input
//         type="text"
//         placeholder="Search by category..."
//         className="border p-2 mb-4 w-full rounded"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {/* Table */}
//       <table className="w-full text-left">
//         <thead>
//           <tr className="border-b">
//             <th className="p-2">Date</th>
//             <th className="p-2">Category</th>
//             <th className="p-2">Amount</th>
//             <th className="p-2">Type</th>
//           </tr>
//         </thead>

//         <tbody>
//           {filteredData.map((item) => (
//             <tr key={item.id} className="border-b hover:bg-gray-50">
//               <td className="p-2">{item.date}</td>
//               <td className="p-2">{item.category}</td>
//               <td className="p-2">₹{item.amount}</td>
//               <td
//                 className={`p-2 ${
//                   item.type === "Income"
//                     ? "text-green-600"
//                     : "text-red-500"
//                 }`}
//               >
//                 {item.type}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Transactions;

import { useState } from "react";
import { useStore } from "../store/useStore";

function Transactions() {
  const { transactions, role, addTransaction } = useStore();
  const [search, setSearch] = useState("");
  const [newTx, setNewTx] = useState({
    date: "",
    category: "",
    amount: "",
    type: "Expense",
  });

  const filteredData = transactions.filter((item) =>
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = () => {
    if (!newTx.date || !newTx.category || !newTx.amount) return;

    addTransaction({
      ...newTx,
      id: Date.now(),
      amount: Number(newTx.amount),
    });

    setNewTx({ date: "", category: "", amount: "", type: "Expense" });
  };

  return (
<div className="bg-white/70 backdrop-blur-lg p-5 rounded-xl shadow mt-6 dark:bg-gray-800/70">
      <h2 className="text-lg font-semibold mb-4">Transactions</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 mb-4 w-full rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* ADMIN ONLY */}
      {role === "admin" && (
        <div className="mb-4 grid grid-cols-2 md:grid-cols-4 gap-2">
          <input
            type="date"
            className="border p-2 rounded"
            value={newTx.date}
            onChange={(e) =>
              setNewTx({ ...newTx, date: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Category"
            className="border p-2 rounded"
            value={newTx.category}
            onChange={(e) =>
              setNewTx({ ...newTx, category: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Amount"
            className="border p-2 rounded"
            value={newTx.amount}
            onChange={(e) =>
              setNewTx({ ...newTx, amount: e.target.value })
            }
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white rounded p-2"
          >
            Add
          </button>
        </div>
      )}

      {/* TABLE */}
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="p-2">Date</th>
            <th className="p-2">Category</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Type</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{item.date}</td>
              <td className="p-2">{item.category}</td>
              <td className="p-2">₹{item.amount}</td>
              <td
                className={`p-2 ${
                  item.type === "Income"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {item.type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;