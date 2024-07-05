import React, { useState } from "react";
import { useParams } from "react-router";
import Layout from "../../components/Layout/Layout";
import SingleCourseSection from "../../components/Sections/Pages/SingleCourse/SingleCourseSection";
import AboutOrbit from "../../components/AboutOrbit/AboutOrbit";

const SingleCourse = () => {
  const params = useParams();

  return (
    <Layout>
      <AboutOrbit />
      <SingleCourseSection params={params} />
    </Layout>
  );
};

export default SingleCourse;
