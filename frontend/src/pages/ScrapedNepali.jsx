import React, { useState, useEffect } from "react";
import axios from "axios";

const ScrapedNepali = () => {
  const [scraped, setScraped] = useState({
    title: "",
    link: "",
    date: "",
    summary: "",
    category: "",
  });

  useEffect(() => {
    axios.get("http://localhost:5000/api/fetchScrape").then((response) => {
      console.log(response);
      setScraped({
        title: response.data.title,
        link: response.data.link,
        date: response.data.date,
        summary: response.data.summary,
        category: response.data.category,
      });
    });
  }, []);
  return (
    <>
      <div className="scraped-nepali">
        {/* <div className="title-scraper">Nepali News Scraper</div> */}
        <div className="left">
          <div className="left-arrow-box">
            <div>Top</div>
            <div>Bottom</div>
          </div>
        </div>
        <div className="right">
          <div className="news-box">
            <div className="news-title">
              <h2>{scraped.title}</h2>
            </div>
            <div className="news-desc">
              <p>{scraped.summary}</p>
            </div>
          </div>
          <div className="bottom-arrow-box">
            <div>Left</div>
            <div>Right</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrapedNepali;
