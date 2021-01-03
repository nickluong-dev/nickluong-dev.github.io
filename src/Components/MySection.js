import React, { Component } from "react";
import "./styles/MySection.css";
import "../App.css";
import { Link } from "react-scroll";

export default class MySection extends Component {
  render() {
    return (
      <div className="section-container">
        {/* <video src="/videos/rog.mp4" autoPlay loop muted /> */}
        <div className="main">
          <span className="neon--head">Hi, I'm Nick</span>

          <div className="random--wrapper">
            <span
              className="neon--random"
              data-text="I'm as@u#█t█ #e.e@!__!"
            ></span>

            <span className="neon--random">I'm █ stあdenか develoょer</span>
            <span className="neon--random">I'm a student developer</span>
            <span className="neon--random">I'm a stんden$ developer</span>
            <span
              className="neon--random"
              data-text="I'm a█stuハent█devめloper"
            ></span>
            <span className="neon--random">I'm _ st█dent deve█oper</span>
            <span className="neon--random">I'm a studeょt deえeloper</span>
            <span
              className="neon--random"
              data-text="I'm a student developer"
            ></span>
            <span className="neon--random">I'm a student developer</span>
          </div>

          <Link
            to="projects"
            spy={true}
            smooth={true}
            activeClass="active"
            className="neon--subhead"
          >
            Projects
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            activeClass="active"
            className="neon--subhead"
          >
            About
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            activeClass="active"
            className="neon--subhead"
          >
            Contact
          </Link>
        </div>
      </div>
    );
  }
}
