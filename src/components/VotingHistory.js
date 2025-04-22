import React, { useState } from "react";

function VotingHistory() {
  const [history, setHistory] = useState([
    { id: 1, proposal: "Proposal 1: Budget Increase", result: "Passed", date: "2025-04-10" },
    { id: 2, proposal: "Proposal 2: New Project Launch", result: "Failed", date: "2025-04-15" },
    { id: 3, proposal: "Proposal 3: Marketing Strategy", result: "Passed", date: "2025-04-20" },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white p-8 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">📊 Voting History</h2>
        <p className="text-center text-gray-600 mb-8">
          Here's a record of all proposals and their final outcomes. Stay informed, stay empowered!
        </p>
        <ul className="space-y-5">
          {history.map((item) => (
            <li key={item.id} className="p-5 bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:bg-gray-100 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{item.proposal}</h3>
              <p className="text-lg">
                Result:{" "}
                <span className={item.result === "Passed" ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>
                  {item.result}
                </span>
              </p>
              <p className="text-sm text-gray-500 mt-1">📅 Date: {item.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VotingHistory;
