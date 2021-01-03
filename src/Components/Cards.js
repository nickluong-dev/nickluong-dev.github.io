import React, { Component } from "react";
import CardItem from "./CardItem";
import "./styles/Cards.css";
import "./styles/MySection.css";

export default class Cards extends Component {
  render() {
    return (
      <div id="projects" className="cards">
        <span className="neon--subhead2">My Projects</span>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/img-1.jpg"
                text="Sample Text here is a card with a project and some text blah blah"
                label="Sample"
                path="/Project1"
              />

              <CardItem
                src="images/img-2.jpg"
                text="Here is another card with a project and some text. I like cyberpunk aesthics."
                label="Sample"
                path="/services"
              />

              <CardItem
                src="images/img-8.jpg"
                text="I like to code and game and sleep and eat. My favourite colour is black. Neon colours."
                label="Sample"
                path="/services"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="images/img-home.jpg"
                text="A bigger card for a project with a nice picture. But there's nothing here yet."
                label="Sample"
                path="/services"
              />

              <CardItem
                src="images/img-2.jpg"
                text="A bigger card for a project with a nice picture. But there's nothing here yet."
                label="Sample"
                path="/services"
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
