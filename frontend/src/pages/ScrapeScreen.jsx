import React from "react";

import "./ScrapeScreen.css";

const ScrapeScreen = () => {
  return (
    <div className="scrapescreen">
      <div className="language_choose">
        <a href="/scraped-english" className="cv-btn">
          English
        </a>
        <a href="/scraped-nepali" className="cv-btn">
          Nepali
        </a>
      </div>
    </div>
  );
};

export default ScrapeScreen;
