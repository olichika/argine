import React from "react";

const AboutSection = () => (
  <section className="about">
    <div className="container">
      <h1>AMPLIFY YOUR BUSINESS</h1>
      <div className="about__items">
        <div className="about__item">
          <span className="about__item-count">01</span>
          <div className="about__item-title">
            Revenue Focused Business Decisions
          </div>
          <p className="text">
            We maximize value to your bottom line  by deeply understanding your
            business’s needs before we go to work.
          </p>
        </div>
        <div className="about__item">
          <span className="about__item-count">02</span>
          <div className="about__item-title">
            Cutting Edge Software Solutions
          </div>
          <p className="text">
            Our highly skilled network of software developers, product managers
            & business analysts have experience growing some of the worlds
            largest and most impactful software companies.
          </p>
        </div>
        <div className="about__item">
          <span className="about__item-count">03</span>
          <div className="about__item-title">Data Powered Innovation</div>
          <div className="text">
            Let us pilot your business to the next level using deep business
            insights, opportunity sizing, product portfolio expansions,
            human-centered design  and continuous innovation.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
