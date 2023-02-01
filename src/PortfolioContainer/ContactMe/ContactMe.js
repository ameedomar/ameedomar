import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactMe.css";
import mail from "../../assets/Home/mailz.jpeg";
function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs
      .sendForm(
        "service_a04o0qv",
        "template_t034eoh",
        form.current,
        "OOgKo-e4UInLa8EsS"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Messege sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-me">
      <div className="black-box">
        <div className="design-side">
          <div className="header-title">
            <p className="get-in-touch">GET IN TOUCH 💌</p>
          </div>
          <div className="social-media-icons">
            <div className="colz">
              <div className="colz-icon">
                <a href="https://www.facebook.com/ameed.omar.1/">
                  {" "}
                  <i className="fa fa-facebook-square"></i>
                </a>
                <a href="www.instagram.com">
                  {" "}
                  <i className="fa fa-google-plus-square"></i>
                </a>
                <a href="https://www.instagram.com/ameed_omar">
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
            </div>
          </div>
          <div className="send-email">
            <p>
              {" "}
              If you want to contact me, Send a message or email from here 👉
            </p>
          </div>
          <div className="mail-img">
            {/* <img src={mail} alt="mail-img"></img> */}
          </div>
        </div>
        <div className="type-side">
          <form ref={form} onSubmit={sendEmail} className="form-feilds">
            <label>Name</label>
            <input type="text" name="user_name" className="text" />
            <label>Email</label>
            <input type="email" name="user_email" className="text" />
            <label>Message</label>
            <textarea name="message" className="msg-text" />
            <input type="submit" value="Send" className="send-btn" />
          </form>

          {/* <form className="form-feilds">
            <label>Name</label>
            <input type="text" className="text" />

            <label>Email</label>
            <input type="text" className="text" />

            <label>Message</label>
            <textarea className="msg-text"></textarea>
            <button className="send-btn"> Send</button>
          </form> */}
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
