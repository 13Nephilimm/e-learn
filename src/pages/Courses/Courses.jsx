import React from "react";
import Layout from "../../components/Layout/Layout";
import CoursesSection from "../../components/Sections/Pages/Courses/CoursesSection";
import AboutOrbit from "../../components/AboutOrbit/AboutOrbit";

const Courses = () => {
  return (
    <Layout>
      <AboutOrbit />
      <CoursesSection />
    </Layout>
  );
};

export default Courses;
