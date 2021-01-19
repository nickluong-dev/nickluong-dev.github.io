import React from "react";
import "./styles/MySection.css";
import "../App.css";
import { Link } from "react-scroll";

export default function MySection() {
  return (
    <div className="section-container">
      <video src="/videos/particles.mp4" autoPlay loop muted />
      <div className="frontpage--container">
        <span className="neon--head">Hi, I'm Nick</span>

        <span className="random--container">
          <span
            className="neon--random"
            data-text="I'm as@u#█t█ #e.e@!__!"
          ></span>

          <span className="neon--random">I'm a student developer</span>
          <span className="neon--random">I'm a student developer</span>
          <span className="neon--random">I'm a student developer</span>
          <span
            className="neon--random"
            data-text="I'm a█stuハent█devめloper"
          ></span>
          <span className="neon--random">I'm a student developer</span>
          <span className="neon--random">I'm a student developer</span>
          <span
            className="neon--random"
            data-text="I'm a student developer"
          ></span>
          <span className="neon--random">I'm a student developer</span>
        </span>

        <Link
          to="projects"
          spy={true}
          smooth="easeOutCubic"
          activeClass="active"
          className="neon--subhead"
        >
          Projects
        </Link>
        <Link
          to="about"
          spy={true}
          smooth="easeOutCubic"
          activeClass="active"
          className="neon--subhead"
        >
          About
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth="easeOutCubic"
          activeClass="active"
          className="neon--subhead"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
