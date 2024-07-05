import React from "react";
import Layout from "../../components/Layout/Layout";
import ContactSection from "../../components/Sections/Pages/Contact/ContactSection";
import AboutOrbit from "../../components/AboutOrbit/AboutOrbit";

const Contact = () => {
  return (
    <Layout>
      <AboutOrbit />
      <ContactSection />
    </Layout>
  );
};

export default Contact;
