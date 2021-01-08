import React from "react";
import "./styles/Contact.css";
import "./styles/MySection.css";

function Contact() {
  return (
    <div className="contact--wrapper" id="contact">
      <span className="neon--subhead2">Contact</span>
      <div className="contacts--wrapper">
        <h1 className="contacts">
          <a
            href="https://www.linkedin.com/in/nick-luong/"
            className="contacts"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </h1>

        <h1 className="contacts">
          <a href="mailto:nickluong97@outlook.com" className="contacts">
            <i className="fas fa-paper-plane"></i> nickluong97@outlook.com
          </a>
        </h1>

        <h1 className="contacts">
          <a href="https://github.com/nickluong-dev" className="contacts">
            <i className="fab fa-github"></i> Github
          </a>
        </h1>
      </div>
    </div>
  );
}

export default Contact;
