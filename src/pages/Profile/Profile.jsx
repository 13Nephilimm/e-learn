import React from "react";
import Layout from "../../components/Layout/Layout";
import ProfileSection from "../../components/Sections/Pages/Profile/ProfileSection";
import AboutOrbit from "../../components/AboutOrbit/AboutOrbit";

const Profile = () => {
  return (
    <Layout>
      <AboutOrbit />
      <ProfileSection />
    </Layout>
  );
};

export default Profile;
