import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [proposals, setProposals] = useState([
    { id: 1, name: "💰 Budget Increase", votes: 0, totalVotes: 0 },
    { id: 2, name: "🚀 New Project Launch", votes: 0, totalVotes: 0 },
  ]);

  const [voters, setVoters] = useState([]);

  const handleVote = (proposalId) => {
    setProposals((prevProposals) =>
      prevProposals.map((proposal) =>
        proposal.id === proposalId
          ? {
              ...proposal,
              votes: proposal.votes + 1,
              totalVotes: proposal.totalVotes + 1,
            }
          : proposal
      )
    );
    setVoters((prevVoters) => [...prevVoters, proposalId]);
  };

  const totalVoters = voters.length;
  const quorum = Math.floor(totalVoters * 0.5); // 50% quorum
  const isQuorumMet = totalVoters >= quorum;

  return (
    <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 min-h-screen p-6 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white p-10 rounded-2xl shadow-2xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          🗳️ Voting Dashboard
        </h2>

        <p
          className={`text-lg text-center mb-8 font-semibold ${
            isQuorumMet ? "text-green-600" : "text-red-500"
          }`}
        >
          {isQuorumMet ? "✅ Quorum Met — Decision Valid!" : "❌ Quorum Not Met Yet"}
        </p>

        <ul className="space-y-6">
          {proposals.map((proposal) => (
            <li
              key={proposal.id}
              className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{proposal.name}</h3>
              <p className="text-lg text-gray-600">🗳️ Votes: {proposal.votes}</p>
              <button
                onClick={() => handleVote(proposal.id)}
                disabled={voters.includes(proposal.id)}
                className={`mt-4 w-full py-3 text-lg font-semibold rounded-xl transition-all duration-300 ${
                  voters.includes(proposal.id)
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white"
                }`}
              >
                {voters.includes(proposal.id) ? "✅ Voted" : "Vote Now"}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center flex flex-wrap gap-4 justify-center">
          <Link
            to="/create"
            className="px-5 py-3 bg-pink-500 text-white rounded-xl font-semibold hover:bg-pink-600 transition-all duration-300"
          >
            ➕ Create New Proposal
          </Link>
          <Link
            to="/history"
            className="px-5 py-3 bg-purple-500 text-white rounded-xl font-semibold hover:bg-purple-600 transition-all duration-300"
          >
            📜 View Voting History
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
