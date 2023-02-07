import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Feature from "../components/Feature";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import aboutimage from "../images/bg.png";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <Feature />
      <About
        image={aboutimage}
        title="Analyze The News?"
        button="Get Started"
        path="start"
      />
      <Presentation />
      <Contact />
    </>
  );
};

export default HomeScreen;
