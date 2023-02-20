import React from "react";
import "./InfoBox.css";
function InfoBox(props) {
  return (
    <div className="aboutMe">
      <div className="main-box">
        <div className="main-contant">
          <div className="left-side-box"></div>
          <div className="right-side-box">
            <span>
              A Computer engineer with a very good software experience combined
              with an extensive knowledge in software development like web
              development by React, mobile development with cross-platforms.
              {"\n"}
              <br></br>
              <br></br>
              Furthermore, an excellent foundation in programming languages.
              <br></br>
              <br></br>
              Good spoken and written English, experience in problem solving,
              creative ideas and leadership.
            </span>
            <div className="bottom-area">
              <div className="highlighted-text">
                <h5 className="highlighted-text">
                  {" "}
                  Here are a few Highlightes :
                </h5>
              </div>
              <ul>
                <li>Front End Developer</li>
                <li>Basic Conceptes of HTML CSS JS </li>
                <li>React and React Native</li>
                <li>Java Programmer </li>
              </ul>
            </div>
            <div className="infoBox-btns">
              <button
                onClick={() =>
                  (window.location = "mailto:ameedomar30@gmail.com")
                }
                className="btn primary-btn"
              >
                Contact Me
              </button>
              <a>
                <button className="btn highlighted-btn">
                  Redirect To Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoBox;
