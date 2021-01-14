import React from "react";
import CardItem from "./CardItem";
import "./styles/Cards.css";
import "./styles/MySection.css";

export default function Cards() {
  return (
    <div id="projects" className="cards">
      <span className="neon--subhead2">My Projects</span>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="videos/LyriCount_demo.gif"
              text="Search for a lyric and see which musicians used it and how many times they've used it in their discography."
              title="LyriCount"
              path="https://github.com/nickluong-dev/LyriCount"
              label={[
                "Python",
                "Flask",
                "Beautiful Soup",
                "NLTK",
                "iTunes API",
              ]}
              alt="LyriCount Demo"
            />

            <CardItem
              src="videos/yahtzee_demo.gif"
              text="Play a full game of Yahtzee with another player in the console!."
              title="Yahtzee"
              path="https://github.com/nickluong-dev/Yahtzee"
              label={["Python"]}
              alt="Yahtzee Demo"
            />

            <CardItem
              src="videos/cyberclock_demo.gif"
              text="A simple clock inspired from 30 Day Javascript Challenge. Stylized to look cyberpunk and glow ~"
              title="CyberClock"
              path="https://github.com/nickluong-dev/Cyber-Clock"
              label={["Javascript", "CSS", "HTML"]}
              alt="CyberClock Demo"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="videos/portfolio_demo.gif"
              text="This site! My first time using React components."
              title="Portfolio"
              path="https://nickluong-dev.github.io/"
              label={["React", "CSS", "HTML"]}
            />

            <CardItem
              src="images/img-home.jpg"
              text="A placeholder. Coming soon!"
              title="Sample"
              path="https://github.com/nickluong-dev"
              label={["Blood", "Sweat", "Tears", "My Youth", "My Social Life"]}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
