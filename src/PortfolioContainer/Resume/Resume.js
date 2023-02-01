import React from "react";
import Header from "./Header";
import ResumeBox from "./ResumeBox";

import "./Resume.css";

function Resume(props) {
  return (
    <div className="resume">
      <Header />
      <ResumeBox />
    </div>
  );
}

export default Resume;
