import React from "react";
import "./styles/About.css";
// import "./styles/MySection.css";

function About() {
  return (
    <div className="about">
      <div className="aboutWrapper">
        <div className="aboutTextWrapper">
          <span className="neonSubhead2">About Me</span>
          <span className="aboutText">
            Hi, my name is Nick Luong. I'm a new graduate just having finished
            the Computer Systems Technology program at BCIT. I'm always excited
            to learn new technologies and use them to build things. I'm open to
            all facets in the tech industry. Right now, I'm particularly into
            web development and cloud computing.
            <br />
            <br />
            My other interests include writing music. I'm really into making
            house music and other random beats. Check my SoundCloud 🎵 at the
            bottom of the page! I'm also trying to get into powerlifting 💪💪.
            My current numbers as of writing are Squat (335lbs), Bench (245lbs),
            Deadlift (405lbs). Still a ways to go!
            <br />
            <br />
            Nice to meet you! I love to meet new people, so contact me at the
            bottom of the page if you'd like to connect.
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
