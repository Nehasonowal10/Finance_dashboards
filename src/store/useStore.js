// import { create } from "zustand";

// export const useStore = create((set) => ({
//   role: "viewer",
//   transactions: [
//     { id: 1, date: "2026-04-01", amount: 500, category: "Food", type: "Expense" },
//     { id: 2, date: "2026-04-02", amount: 2000, category: "Salary", type: "Income" },
//   ],

//   setRole: (role) => set({ role }),

//   addTransaction: (newTx) =>
//     set((state) => ({
//       transactions: [...state.transactions, newTx],
//     })),
// }));

import { create } from "zustand";

const savedTransactions =
  JSON.parse(localStorage.getItem("transactions")) || [
    { id: 1, date: "2026-04-01", amount: 500, category: "Food", type: "Expense" },
    { id: 2, date: "2026-04-02", amount: 2000, category: "Salary", type: "Income" },
  ];

export const useStore = create((set) => ({
  role: "viewer",
  transactions: savedTransactions,

  setRole: (role) => set({ role }),

  addTransaction: (newTx) =>
    set((state) => {
      const updated = [...state.transactions, newTx];
      localStorage.setItem("transactions", JSON.stringify(updated));
      return { transactions: updated };
    }),
}));