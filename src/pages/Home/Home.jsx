import React from "react";
import Layout from "../../components/Layout/Layout";
import HeroSection from "../../components/Sections/Pages/Home/HeroSection/HeroSection";
import WhyUsSection from "../../components/Sections/Pages/Home/WhatWeOfferSection/WhatWeOfferSection";
import LeaderBoardSection from "../../components/Sections/Pages/Home/LeaderboardSection/LeaderBoardSection";
import PopularCoursesSection from "../../components/Sections/Pages/Home/PopularCoursesSection/PopularCoursesSection";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <WhyUsSection />
      <LeaderBoardSection />
      <PopularCoursesSection />
    </Layout>
  );
};

export default Home;
