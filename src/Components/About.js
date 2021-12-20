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
              Hi, my name is Nick Luong. I am a current Computer Systems
              Technology student at BCIT and Sauder graduate from UBC. I'm always excited to learn new
              technologies and use them to build things. I'm open to all facets in
              the tech industry but right now, I'm particularly into web development
              and cloud computing. 
              <br/><br/>
              Right now, I'm in the process of improving my Java and data structures/algorithms. My other interests include
              writing music, gaming, working out, technology, and other nerdy things.
              <br/><br/>
              Nice to meet you! I love to meet new people, so contact me at the bottom of the page if
              you'd like to connect.
            </span>
          </div>
      </div>
    </div>
  );
}

export default About;
