import React from "react";
import coding from "../../assets/icons/coding.png";
import giv_love from "../../assets/icons/give-love.png";
import magistrate from "../../assets/icons/magistrate.png";
import worker from "../../assets/icons/worker.png";
import experience from "../../assets/icons/experience.png";
import "./NavBar.css";
function NavBar(props) {
  return (
    <div className="main-nav">
      <div className="items">
        <img src={magistrate} alt="no-img" className="nav-item" />
        <img src={experience} alt="no-img" className="nav-item" />
        <img src={coding} alt="no-img" className="nav-item" />
        <img src={worker} alt="no-img" className="nav-item" />
        <img src={giv_love} alt="no-img" className="nav-item" />
      </div>
    </div>
  );
}

export default NavBar;
