import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Change Switch to Routes
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateProposal from "./components/CreateProposal";
import VotingHistory from "./components/VotingHistory";
// import "./assets//css/App.css"; // Importing the main CSS
import "./App.css"; // No need for 'assets/css/' if it's directly inside 'src'

function App() {
  return (
    <Router>
      <Navbar /> {/* Including the Navbar */}
      <div className="App">
        <Routes> {/* Changed from Switch to Routes */}
          <Route exact path="/" element={<Home />} /> {/* Changed from component={Home} to element={<Home />} */}
          <Route path="/create" element={<CreateProposal />} /> {/* Changed from component={CreateProposal} */}
          <Route path="/history" element={<VotingHistory />} /> {/* Changed from component={VotingHistory} */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
