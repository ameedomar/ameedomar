import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import Axios from "axios";
import FileDownload from "js-file-download";

export default function Profile() {
  const download = (e) => {
    e.preventDefault();
    Axios({
      url: "http://ameedomar.com",
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
            <button className="btn primary-btn"> Hire Me</button>

            {/* <a href="Ameed Omar-CV.pdf" download="Ameed Omar-CV.pdf"> */}
            <button
              className="btn highlighted-btn"
              onClick={(e) => download(e)}
            >
              Get Resume
            </button>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
