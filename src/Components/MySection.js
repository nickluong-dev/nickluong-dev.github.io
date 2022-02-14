import React from "react";
import "./styles/MySection.css";
import "../App.css";
import { Link } from "react-scroll";

export default function MySection() {
  return (
    <div className="sectionContainer">
      <video src="/videos/particles.mp4" autoPlay loop muted />
      <div className="frontpageContainer">
        <span className="neonHead">Hi, I'm Nick</span>

        <span className="randomContainer">
          <span
            className="neonRandom"
            data-text="I'm as@u#█t█ #e.e@!__!"
          ></span>

          <span className="neonRandom"></span>
          <span className="neonRandom">I'm a developer</span>
          <span className="neonRandom">I'm a developer</span>
          <span
            className="neonRandom"
            data-text="I'm a█stuハent█devめloper"
          ></span>
          <span className="neonRandom">I'm a #eveloper</span>
          <span className="neonRandom"></span>
          <span className="neonRandom">I'm a developer</span>
          <span
            className="neonRandom"
            data-text="I'm a student developer"
          ></span>
          <span className="neonRandom">I'm a developer</span>
        </span>

        <div className="navContainer">
          <Link
            to="about"
            spy={true}
            smooth="easeOutCubic"
            activeClass="active"
            className="neonSubhead"
          >
            About
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth="easeOutCubic"
            activeClass="active"
            className="neonSubhead"
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth="easeInOutQuad"
            activeClass="active"
            className="neonSubhead"
          >
            Contact
          </Link>
        </div>
        
      </div>
    </div>
  );
}
