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

  const nextNews = () => {
    axios
      .post("/test", { category: scraped.category })
      .then((response) => console.log(response));
  };

  const handleCatChange = (event) => {
    let next;
    let prev;
    switch (scraped.category.toLowerCase()) {
      case "business":
        prev = "others";
        next = "entertainment";
        break;

      case "entertainment":
        prev = "business";
        next = "politics";
        break;

      case "politics":
        prev = "entertainment";
        next = "sport";
        break;

      case "sport":
        prev = "politics";
        next = "tech";
        break;

      case "tech":
        prev = "sport";
        next = "others";
        break;

      case "others":
        prev = "tech";
        next = "business";
        break;
    }
    const category = event.target.innerText === "Top" ? prev : next;
    axios
      .post("/test", { changeCategory: category })
      .then((response) => console.log(response));
  };

  return (
    <>
      <div className="scraped-nepali">
        {/* <div className="title-scraper">Nepali News Scraper</div> */}
        <div className="left">
          <div className="left-arrow-box">
            <a className="cv-btn" onClick={handleCatChange}>
              Top
            </a>
            <a className="cv-btn" onClick={handleCatChange}>
              Bottom
            </a>
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
            <a className="cv-btn">Previous</a>
            <a className="cv-btn" onClick={nextNews}>
              Next
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrapedNepali;
