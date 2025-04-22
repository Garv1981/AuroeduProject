import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProposal() {
  const [proposalName, setProposalName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Proposal Created: ", proposalName);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white p-10 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-[1.03]">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8 tracking-wide">
          ✨ Create New Proposal
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              📌 Proposal Name
            </label>
            <input
              type="text"
              value={proposalName}
              onChange={(e) => setProposalName(e.target.value)}
              required
              placeholder="Enter proposal title..."
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-pink-400 focus:border-pink-400 transition"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300"
          >
            🚀 Create Proposal
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProposal;
