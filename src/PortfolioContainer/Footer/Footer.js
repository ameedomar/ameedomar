import React from "react";
import bg from "../../assets/Home/shape-bg22.png";
import "../Footer/Footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <img src={bg} alt="no-footer" className="footer-img"></img>
    </div>
  );
}

export default Footer;
