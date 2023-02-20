import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import Axios from "axios";
import FileDownload from "js-file-download";

export default function Profile() {
  const download = (e) => {
    e.preventDefault();
    Axios({
      url: "https://ameedomar.com",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      console.log(res);
      FileDownload(res.data, "Ameed Omar Resume.pdf");
    });
  };
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
                Talent Engineer for creating and designing an amazing Front-End
                interfaces for Websites
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              onClick={() => (window.location = "mailto:ameedomar30@gmail.com")}
              className="btn primary-btn"
            >
              Contact Me
            </button>

            {/* <a href="Ameed Omar-CV.pdf" download="Ameed Omar-CV.pdf"> */}
            <a
              href="https://docs.google.com/document/d/1Rdw8afAk26ElQrPJimJnUcwgbZqRo8WEOSGw26Gj_7o/edit?usp=sharing"
              target="_blank"
            >
              <button
                className="btn highlighted-btn"
                // onClick={(e) => download(e)}
              >
                Redirect To Resume
              </button>
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
