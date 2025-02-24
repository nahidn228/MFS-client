import { motion } from "framer-motion";
import { ArrowDownLeft, ArrowUpRight, RefreshCcw } from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const [balance, setBalance] = useState(5000);
  const transactions = [
    { id: 1, type: "Send Money", amount: 1000, date: "Feb 23, 2025" },
    { id: 2, type: "Cash-In", amount: 2000, date: "Feb 22, 2025" },
    { id: 3, type: "Cash-Out", amount: 500, date: "Feb 21, 2025" },
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Balance Section */}
      <div className="card bg-blue-900 text-white shadow-lg p-4 mb-6">
        <div className="card-body">
          <h2 className="text-xl font-semibold">Your Balance</h2>
          <motion.p
            className="text-3xl font-bold mt-2"
            animate={{ scale: 1.1 }}
          >
            ${balance.toLocaleString()}
          </motion.p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <button className="btn btn-success flex items-center">
          <ArrowUpRight className="mr-2" /> Send Money
        </button>
        <button className="btn btn-primary flex items-center">
          <RefreshCcw className="mr-2" /> Cash-In
        </button>
        <button className="btn btn-error flex items-center">
          <ArrowDownLeft className="mr-2" /> Cash-Out
        </button>
      </div>

      {/* Recent Transactions */}
      <div className="card shadow-md p-4">
        <div className="card-body">
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
          <ul>
            {transactions.map((tx) => (
              <li
                key={tx.id}
                className="flex justify-between p-2 border-b border-gray-200"
              >
                <span>{tx.type}</span>
                <span
                  className={`font-semibold ${
                    tx.type === "Send Money" || tx.type === "Cash-Out"
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  ${tx.amount}
                </span>
                <span className="text-sm text-gray-500">{tx.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
