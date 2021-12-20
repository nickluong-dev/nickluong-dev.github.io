import React from "react";
import "./styles/Contact.css";
import "./styles/MySection.css";

const iconStyle = {
  color: 'white'
}

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contactWrapper">
        <span className="neonSubhead2">Contact</span>
        <div className="contactTextWrapper">
          <span className="contactText">
            If you'd like to get into contact with me, you can find me on social media.
          </span>
        </div>
        <div className="contactsContainer">
          <div className="contacts">
            <a
              href="https://www.linkedin.com/in/nick-luong/"
              target={"https://www.linkedin.com/in/nick-luong/"}>
              <i className="contactImage" class="fab fa-linkedin fa-2x"></i>
            </a>
          </div>

          <div className="contacts">
            <a href="mailto:nickluong97@outlook.com">
              <span style={iconStyle}>
                <i className="contactImage" class="fas fa-envelope-square fa-2x"></i>
              </span>
            </a>
          </div>

          <div className="contacts">
            <a href="https://github.com/nickluong-dev"
            target={"https://github.com/nickluong-dev"}>
              <i className="contactImage" class="fab fa-github fa-2x"></i>
            </a>
          </div>

          <div className="contacts">
            <a href="https://open.spotify.com/user/bdz85mapdfarkxhw3rhbwopdu?si=b7f207d2a5144969"
            target={"https://open.spotify.com/user/bdz85mapdfarkxhw3rhbwopdu?si=b7f207d2a5144969"}>
              <i className="contactImage" class="fab fa-spotify fa-2x"></i>
            </a>
          </div>

          <div className="contacts">
            <a href="https://soundcloud.com/nickluong"
            target={"https://soundcloud.com/nickluong"}>
              <i className="contactImage" class="fab fa-soundcloud fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
