import React from "react";
// import "./style.css"; // Make sure to adjust the path based on your project structure
import company from "../assets/svgs/company.svg";
import Navigation from "./Links";
const App = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={company} alt="Your Icon" />
        </div>

        <Navigation />
      </nav>
    </div>
  );
};

export default App;
