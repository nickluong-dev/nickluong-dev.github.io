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
              video={true}
              src="videos/goverlytics_demo.mp4"
              text={
                <>
                  <div>
                    A data analytics dashboard using public North American
                    politcal data that I worked on during a co-op term.
                  </div>
                  <br />
                  <a
                    href="https://goverlytics.com"
                    target={"https://goverlytics.com"}
                    className="cardsItemText"
                  >
                    Live Link
                  </a>
                </>
              }
              title="Goverlytics"
              path="https://github.com/nickluong-dev/IOTO-webapp"
              label={["TypeScript", "Vue", "HTML", "TailwindCSS", "PostgreSQL"]}
            />

            <CardItem
              video={true}
              src="videos/lims.mp4"
              text="This was an industry sponsored project partnered with BCIT. An internal tool for lab technicians to input and manage client data."
              title="Laboratory Information Managment System"
              path="https://github.com/nickluong-dev/COMP4800"
              label={["React", "Express", "NodeJs", "Docker", "PostgreSQL"]}
            />
          </ul>
          <ul className="cardsRow">
            <CardItem
              video={false}
              src="images/shoe.jpg"
              text="A term project for Microservices and Serverless class. This is a ecommerce shoe store using only AWS serverless architecture."
              title="Serverless Shoe Store"
              path="https://github.com/nickluong-dev/Yahtzee"
              label={[
                "DynamoDb",
                "RDS",
                "Lambda",
                "API Gateway",
                "S3",
                "SES",
                "SNS",
              ]}
              alt="Shoe Store"
            />
            <CardItem
              video={true}
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
              video={true}
              src="videos/SteamStats.mp4"
              text="Discover games and see what the average time to complete them are."
              title="SteamStats"
              path="https://github.com/nickluong-dev/SteamStats"
              label={["Python", "Flask", "Steam API", "CSS"]}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
