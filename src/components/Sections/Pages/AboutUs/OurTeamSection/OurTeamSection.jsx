import React from "react";
import "./OurTeamSection.css";
import LUKA from "../../../../../assets/luka.jpg";
import DACHI from "../../../../../assets/dachi.jpeg";
import ANA from "../../../../../assets/ana.jpg";
import JEKO from "../../../../../assets/jeko.jpg";
import GUGA from "../../../../../assets/guga.jpg";
import TINATINI from "../../../../../assets/tinatini.jpeg";
import GVANTSA from "../../../../../assets/gvantsa.jpg";

const OurTeamSection = () => {
  return (
    <section className="section team-section">
      <h1 className="team-end-heading">ჩვენი გუნდი</h1>
      <div className="team-container">
        <div className="team-member">
          <div className="team-member-img-box">
            <img src={LUKA} alt="team-member" />
          </div>
          <div className="team-member-text-box">
            <h2 className="member-name">ლუკა თურქია</h2>
            <p className="member-position">ინფორმაციული უსაფრთხოება</p>
          </div>
        </div>
        <div className="team-member">
          <div className="team-member-img-box">
            <img src={DACHI} alt="team-member" />
          </div>
          <div className="team-member-text-box">
            <h2 className="member-name">დაჩი ღონიაძე</h2>
            <p className="member-position">DevOps ინჟინერი</p>
          </div>
        </div>
        <div className="team-member">
          <div className="team-member-img-box">
            <img src={ANA} alt="team-member" />
          </div>
          <div className="team-member-text-box">
            <h2 className="member-name">ანა იორამაშვილი</h2>
            <p className="member-position">IOS დეველოპერი</p>
          </div>
        </div>
        <div className="team-member">
          <div className="team-member-img-box">
            <img src={JEKO} alt="team-member" />
          </div>
          <div className="team-member-text-box">
            <h2 className="member-name">ჯეკო ხარაბაძე</h2>
            <p className="member-position">ფრონტენდ დეველოპერი</p>
          </div>
        </div>
        <div className="team-member">
          <div className="team-member-img-box">
            <img src={GUGA} alt="team-member" />
          </div>
          <div className="team-member-text-box">
            <h2 className="member-name">გუგა ყურაშვილი</h2>
            <p className="member-position">ბექენდ დეველოპერი</p>
          </div>
        </div>
        <div className="team-member">
          <div className="team-member-img-box">
            <img src={TINATINI} alt="team-member" />
          </div>
          <div className="team-member-text-box">
            <h2 className="member-name">თინათინ გელაშვილი</h2>
            <p className="member-position">ბლოკჩეინი</p>
          </div>
        </div>
        <div className="team-member">
          <div className="team-member-img-box">
            <img src={GVANTSA} alt="team-member" />
          </div>
          <div className="team-member-text-box">
            <h2 className="member-name">გვანცა შაშვიაშვილი</h2>
            <p className="member-position">ინფორმაციული უსაფრთხოება</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
