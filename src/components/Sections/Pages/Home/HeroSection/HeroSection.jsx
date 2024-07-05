import React from "react";
import "./HeroSection.css";
import HeroOrbit from "../../../../HeroOrbit/HeroOrbit";

const HeroSection = () => {
  return (
    <section className="section hero-section">
      <h1 className="main-heading">
        შეისწავლე სასურველი პროფესია უფასოდ <br></br> და დასაქმდი სასურველ
        კომპანიაში
      </h1>
      <HeroOrbit />
    </section>
  );
};

export default HeroSection;
