import React, { useState, useEffect } from "react";
import axios from "axios";

import toast, { Toaster } from "react-hot-toast";
import SourceButton from "../components/SourceButton";
import "./Scraper.css";

import {
  HiArrowLongDown,
  HiArrowLongRight,
  HiArrowLongLeft,
  HiArrowLongUp,
} from "react-icons/hi2";

const ScrapeNepali = () => {
  const [scraped, setScraped] = useState({
    title: "",
    link: "",
    date: "",
    summary: "",
    category: "BUSINESS",
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

  const nextNews = async (event) => {
    const prev = "Previous News";
    const next = "Next News";
    const dest = event.target.innerText === prev ? prev : next;

    if (dest === prev) {
      await axios
        .post("/api/fetchScrape", { dest, changeCategory: "" })
        .then((response) =>
          setScraped({
            title: response.data.title,
            link: response.data.link,
            date: response.data.date,
            summary: response.data.summary,
            category: response.data.category,
          })
        )
        .catch((error) => {
          toast.error("Something Went Wrong");
        });
    } else {
      await axios
        .post("/api/fetchScrape", { dest, changeCategory: "" })
        .then((response) =>
          setScraped({
            title: response.data.title,
            link: response.data.link,
            date: response.data.date,
            summary: response.data.summary,
            category: response.data.category,
          })
        )
        .catch((error) => {
          toast.error("Something Went Wrong");
        });
    }
  };

  const handleCatChange = (event) => {
    let next;
    let prev;
    switch (scraped.category?.toUpperCase()) {
      case "BUSINESS":
        prev = "OTHERS";
        next = "ENTERTAINMENT";
        break;

      case "ENTERTAINMENT":
        prev = "BUSINESS";
        next = "POLITICS";
        break;

      case "POLITICS":
        prev = "ENTERTAINMENT";
        next = "SPORT";
        break;

      case "SPORT":
        prev = "POLITICS";
        next = "TECH";
        break;

      case "TECH":
        prev = "SPORT";
        next = "OTHERS";
        break;

      case "OTHERS":
        prev = "TECH";
        next = "BUSINESS";
        break;

      default:
        prev = "BUSINESS";
        next = "BUSINESS";
        break;
    }

    const category =
      event.target.innerText === "Previous Category" ? prev : next;
    axios
      .post("/api/fetchScrape", {
        changeCategory: category,
      })
      .then((response) => {
        setScraped({
          title: response.data.title,
          link: response.data.link,
          date: response.data.date,
          summary: response.data.summary,
          category: response.data.category,
        });
      })
      .catch((error) => {
        toast.error("No More Category");
      });
  };
  return (
    <div className="mid">
      <div className="mid__left">
        <div className="mid__left__top">
          <HiArrowLongUp className="arrows" />
        </div>
        <div className="mid__left__mid">
          <h3>Category</h3>
        </div>
        <div className="mid__left__bottom">
          <HiArrowLongDown className="arrows" />
        </div>
      </div>
      <div className="mid__right">
        <div className="mid__right__box">
          <div className="news-category">{scraped.category}</div>
          <div className="news-title">
            <h2>{scraped.title}</h2>
          </div>
          <div className="news-date">{scraped.date}</div>
          <div className="news-desc">
            <p className="news-summary">{scraped.summary}</p>
          </div>
          <div className="news-source">
            <SourceButton link={scraped.link} />
          </div>
        </div>
        <div className="bottom">
          <div className="bottom__left">
            <HiArrowLongLeft
              className="arrows"
              values="Previous News"
              onClick={nextNews}
            />
          </div>
          <div className="bottom__mid">
            <h3>News</h3>
          </div>
          <div className="bottom__right">
            <HiArrowLongRight
              className="arrows"
              values="Next News"
              onClick={nextNews}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrapeNepali;
