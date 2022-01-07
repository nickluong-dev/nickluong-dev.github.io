import React from "react";
import CardItem from "./CardItem";
import "./styles/Cards.css";
import "./styles/MySection.css";

export default function Cards() {
  return (
    <div id="projects" className="cards">
      <div>
        <span className="neonSubhead2">My Projects</span>
        <div className="cardsContainer">
          <ul className="cardsRow">
            <CardItem
              src="videos/goverlytics_demo.mp4"
              text={ <><div>A data analytics dashboard using public North American politcal data that I worked on during a co-op term.</div> <br/>
              <a href="https://goverlytics.com" target={"https://goverlytics.com"} className="cardsItemText"> Live Link </a></>} 
              title="Goverlytics"
              path="https://github.com/nickluong-dev/IOTO-webapp"
              label={["JavaScript", "TypeScript", 'VueJS', "HTML", 'TailwindCSS', 'PostgreSQL']}
            />

            <CardItem
              src="videos/SteamStats.mp4"
              text="Use your SteamID to figure out which games in your library you should finish! Compare your logged hours to what the average completion time is."
              title="SteamStats"
              path="https://github.com/nickluong-dev/SteamStats"
              label={["Python", "Flask", "Steam API", "CSS"]}
            />
          </ul>
          <ul className="cardsRow">
            <CardItem
              src="videos/LyriCount_demo.mp4"
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
              src="videos/yahtzee_demo.mp4"
              text="Play a full game of Yahtzee with another player in the console!"
              title="Yahtzee"
              path="https://github.com/nickluong-dev/Yahtzee"
              label={["Python"]}
              alt="Yahtzee Demo"
            />

            <CardItem
              src="videos/cyberclock_demo.mp4"
              text="A simple clock inspired from 30 Day Javascript Challenge. Stylized to look cyberpunk and glow."
              title="CyberClock"
              path="https://github.com/nickluong-dev/Cyber-Clock"
              label={["Javascript", "CSS", "HTML"]}
              alt="CyberClock Demo"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
