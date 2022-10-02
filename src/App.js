import React from "react";
import Home from "./components/Home";
// import LandingPage from "./components/LandingPage";
import './App.css';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Home>
            {/* <LandingPage /> */}
        </Home>
      </div>
    </div>
  );
}

export default App;
