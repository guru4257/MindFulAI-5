import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AddSolutions from "./Pages/addSolution_problemSolver";
import Explore from "./Pages/Explore";
import Profile from "./Pages/profile";
import SearchInvestor from "./Pages/searchInvestor";
import SearchMentor from "./Pages/searchMentor";
import SearchProblemSolution from "./Pages/searchProblemSolutions";
import Footer from "./Components/Footer";
import ApproachToPay from "./Pages/approachToPay";
import ApproachToMentor from "./Pages/approachToMentor";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/addSolutions" element={<AddSolutions />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/searchInvestor" element={<SearchInvestor />}></Route>
          <Route path="/serachMentors" element={<SearchMentor />} ></Route>
          <Route path="/searchProblemSolutions" element={<SearchProblemSolution />}></Route>
          <Route path="/approachToPay" element={<ApproachToPay />}></Route>
          <Route path="/approachToMentor" element={<ApproachToMentor />} ></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
