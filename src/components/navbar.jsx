import { useStore } from "../store/useStore";
import { useState, useEffect } from "react";

function Navbar() {
  const { role, setRole } = useStore();
  const [dark, setDark] = useState(false);

  // Handle dark mode toggle
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="bg-white dark:bg-gray-800 shadow px-6 py-4 flex justify-between items-center transition">
      <h1 className="text-lg font-semibold dark:text-white">
        Finance Dashboard
      </h1>

      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 dark:text-white"
        >
          🌙
        </button>

        {/* Role Switch */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border p-2 rounded dark:bg-gray-700 dark:text-white"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>
    </div>
  );
}

export default Navbar;