import React from "react";
import "./styles/About.css";
import "./styles/MySection.css";

function About() {
  return (
    <div className="about--wrapper" id="about">
      <span className="neon--subhead2">About Me</span>
      <div className="text--wrapper">
        <span className="text">
          Hi, my name is Nick Luong and I am a current Computer Systems
          Technology student at BCIT. I'm always excited to learn new
          technologies and use them to build things. I'm open to all facets in
          the tech industry but right now, I'm particularly into web development
          and analytics. But you'll still find me studying backend development.
        </span>

        <span className="text">
          Right now, I'm in the process of learning React, Flask, and improving
          my Javascript. I'm also constantly watching videos on algorithms and
          data structures when I have time. My other interests include
          music/guitar, gaming, working out, keyboards, and technology.
        </span>

        <span className="text">
          Nice to meet you! I love to meet new people, so contact me below if
          you want to connect.
        </span>
      </div>
    </div>
  );
}

export default About;
