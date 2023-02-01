import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          {/* <div className="colz">
            <div className="colz-icon">
              <a href="www.facebook.com">
                {" "}
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="www.instagram.com">
                {" "}
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="www.youtube.com">
                {" "}
                <i className="fa fa-instagram"></i>
              </a>
              <a href="www.google.com">
                {" "}
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://www.youtube.com/">
                {" "}
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div> */}

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
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Front-End Developer",
                    3000,
                    "ReactJS Developer",
                    4000,
                    " Java Programmer",
                    1000,
                    "Cross Platform Dev",
                    2000,
                  ]}
                ></Typical>
              </h1>
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
