import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          <span>Snap News</span>
        </h1>
        <h2 className="name2">
          Stay Informed, In Just A Few Lines - Your Daily News Digest
        </h2>
        <p className="details" style={{ color: "black" }}>
          Welcome to our Snap News site, where we summarize long news articles
          and provide you with a quick overview of the most important
          information.
        </p>
        <a href="/classify" className="cv-btn">
          Classify
        </a>
      </div>
    </div>
  );
};

export default Header;
