import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="main-header">
      <div className="fonts">
        <div className="title-font">Resume</div>
        <div className="secondary-font">
          <p>
            <span className="highlighted-text"> Ameed's </span> Bio Details
          </p>
        </div>
      </div>
      <div className="bar"></div>
    </div>
  );
}

export default Header;
