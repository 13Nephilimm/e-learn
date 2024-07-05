import React from "react";
import Layout from "../../components/Layout/Layout";
import AboutOrbit from "../../components/AboutOrbit/AboutOrbit";
import AboutUsSection from "../../components/Sections/Pages/AboutUs/AboutUsSection/AboutUsSection";
import OurTeamSection from "../../components/Sections/Pages/AboutUs/OurTeamSection/OurTeamSection";

const AboutUs = () => {
  return (
    <Layout>
      <AboutOrbit />
      <AboutUsSection />
      <OurTeamSection />
    </Layout>
  );
};

export default AboutUs;
