import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards border-this" id="features">
      <h1 className="text-4xl">Features</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={require("../images/analysis.jpg")}
              text="Classify News"
              label="Classify"
              path="/#features"
            />
            <CardItem
              src={require("../images/report.jpeg")}
              text="Summarization"
              label="Summarize"
              path="/#features"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../images/img-9.jpg")}
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              label="label"
              path="/features"
            />
            <CardItem
              src={require("../images/img-2.jpg")}
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              label="label"
              path="/features"
            />
            <CardItem
              src={require("../images/img-2.jpg")}
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              label="label"
              path="/features"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
