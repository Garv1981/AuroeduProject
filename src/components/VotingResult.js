import React, { useState } from "react";

function VotingResult() {
  const [votingData, setVotingData] = useState([
    { id: 1, proposal: "Proposal 1: Budget Increase", votesFor: 120, votesAgainst: 50, result: "Passed" },
    { id: 2, proposal: "Proposal 2: New Project Launch", votesFor: 70, votesAgainst: 130, result: "Failed" },
    { id: 3, proposal: "Proposal 3: Marketing Strategy", votesFor: 150, votesAgainst: 30, result: "Passed" },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Voting Results</h2>
        <ul className="space-y-6">
          {votingData.map((item) => (
            <li key={item.id} className="p-4 border-b border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200">
              <h3 className="text-2xl font-semibold text-gray-800">{item.proposal}</h3>
              <p className="text-lg text-gray-600">
                Votes For: <span className="font-medium">{item.votesFor}</span>
              </p>
              <p className="text-lg text-gray-600">
                Votes Against: <span className="font-medium">{item.votesAgainst}</span>
              </p>
              <p className="text-lg font-semibold">
                Result: 
                <span className={item.result === "Passed" ? "text-green-500" : "text-red-500"}>
                  {item.result}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VotingResult;
