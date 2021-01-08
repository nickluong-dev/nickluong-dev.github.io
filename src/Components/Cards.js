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
                src="videos/rog.mp4"
                text="Play a Yahtzee game with a friend in the terminal."
                title="Yahtzee Game"
                path="https://github.com/nickluong-dev"
                label={["Python", "Java"]}
              />

              <CardItem
                src="images/img-2.jpg"
                text="Here is another card with a project and some text. I like cyberpunk aesthics."
                title="Sample"
                path="/services"
                label={["Python", "Java"]}
              />

              <CardItem
                src="images/img-8.jpg"
                text="I like to code and game and sleep and eat. My favourite colour is black. Neon colours."
                title="Sample"
                path="/services"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="images/img-home.jpg"
                text="A bigger card for a project with a nice picture. But there's nothing here yet. asdfasdf asd fasd fasd fasd fasd fasd fasd f asdf asdf asdf asd fasdf "
                title="Sample"
                path="/services"
                label={[
                  "Python",
                  "Java",
                  "CSS",
                  "HTML",
                  "React",
                  "Angular",
                  "random",
                  "words",
                ]}
              />

              <CardItem
                src="images/img-2.jpg"
                text="A bigger card for a project with a nice picture. But there's nothing here yet."
                title="Sample"
                path="/services"
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
