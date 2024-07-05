import React from "react";
import Layout from "../../components/Layout/Layout";
import FullLeaderboardSection from "../../components/Sections/Pages/LeaderBoard/FullLeaderboardSection";
import AboutOrbit from "../../components/AboutOrbit/AboutOrbit";

const Leaderboard = () => {
  return (
    <Layout>
      <AboutOrbit />
      <FullLeaderboardSection />
    </Layout>
  );
};

export default Leaderboard;
