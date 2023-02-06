import React from "react";
import bg_white_reverse from "../../assets/Home/shape-bgr.png";
import bg from "../../assets/Home/bg-half.jpg";
import "../Footer/Footer.css";

function Footer(props) {
  return (
    <div className="footer-page-container">
      <div>
        <img src={bg} alt="no-footer" className="footer-bg"></img>
      </div>
      <div className="footer-revers">
        <img
          src={bg_white_reverse}
          alt="no-footer"
          className="footer-reverse"
        ></img>
      </div>
    </div>
  );
}

export default Footer;
