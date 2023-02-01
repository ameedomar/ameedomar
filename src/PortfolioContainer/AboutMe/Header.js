import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="main-header">
      <div className="fonts">
        <div className="title-font">About Me</div>
        <div className="secondary-font">
          <p>
            Who is <span className="highlighted-text"> Ameed</span>?
          </p>{" "}
        </div>
      </div>
      <div className="bar"></div>
    </div>
  );
}

export default Header;
