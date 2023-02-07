import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">
                Ameed OMAR
              </span>{" "}
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>Front-End Developer</h1>
              <span className="profile-role-tagline">
                Talent for creating and designing the front-end of websites
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me</button>
            <a href="Ameed Omar-CV.pdf" download="Ameed Omar-CV.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
