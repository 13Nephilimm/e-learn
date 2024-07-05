import React from "react";
import "./WhatWeOfferSection.css";

const WhatWeOfferSection = () => {
  return (
    <section className="what-we-offer-section">
      <h1 className="wwo-heading">რას გთავაზობთ?</h1>
      <div className="what-we-offer-container">
        <div className="wwo-card">
          <div className="wwo-card-content">
            <h2>უფასო კურსები</h2>
          </div>
        </div>
        <div className="wwo-card">
          <div className="wwo-card-content">
            <h2>NFT წარმატებით გავლილ კურსზე</h2>
          </div>
        </div>
        <div className="wwo-card">
          <div className="wwo-card-content">
            <h2>სასურველ კომპანიაში დასაქმების შანსი</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
