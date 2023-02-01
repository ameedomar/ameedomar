import React from "react";
import Header from "./Header";
import InfoBox from "./InfoBox";

import "./AboutMe.css";

function AboutMe(props) {
  return (
    <div className="about-me">
      <Header />
      <InfoBox />
    </div>
  );
}

export default AboutMe;
