import React from "react";
import "./ProfileSection.css";
import { CgProfile } from "react-icons/cg";

const ProfileSection = () => {
  return (
    <section className="section">
      <h1 className="profile-heading">ჩემი პროფილი</h1>
      <div className="profile-container">
        <CgProfile className="profile-image" size={256} color="#fff" />
        <form className="profile-info">
          <p className="profile-name">
            <b>სახელი:</b> ჯეკო
          </p>
          <p className="profile-lastname">
            <b>გვარი:</b> ხარაბაძე
          </p>
          <p className="profile-lastname">
            <b>მეილი:</b> jekokharabadze@gmail.com
          </p>
          <p className="profile-name">
            <b>დაბადების თარიღი:</b> 08/10/2002
          </p>
          <p className="profile-name">
            <b>სქესი:</b> მამრობითი
          </p>
          <p className="profile-name">
            <b>ქულები (ჯამური):</b> 176/200
          </p>
          <p className="profile-name">
            <b>დონე:</b> ჯუნიორი
          </p>
          <p className="profile-name">
            <b>ქოინების რაოდენობა:</b> 80
          </p>
          <p className="profile-name">
            <b>NFT:</b> 1
          </p>
        </form>
      </div>
    </section>
  );
};

export default ProfileSection;
