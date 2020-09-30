import React from "react";
import "./About.scss";
import aboutImg from "../../assets/about/about-image.jpg";
import ProcessCard from "../../components/processCard/ProcessCard";
import TooltipRect from "../../components/toolTipRect/TooltipRect";

function About() {
  return (
    <div className="about-container">
      <div
        style={{ backgroundImage: `url(${aboutImg})` }}
        className="about-image"
      >
        <h1>About Us</h1>
      </div>
      <section className="about-content">
        <p className="content">
          <span>Project ReportIt</span> is a web app advocating against sexual
          violence, providing access to organizations that would assist victims
          and supporting survivors with psychosocial services. We advocate for
          rape survivors who can’t speak about their ordeal openly from fear of
          stigmatization, by giving then opportunity to report the perpetrators
          discreetly and if possibly anonymously. We use this platform to
          educate people and also engage in interactive sessions via this app.
          We are working towards the day when rape is part of history, rather
          than a part of our everyday lives.
        </p>
      </section>
      <section className="objectives">
        <h4 className="header">Objectives</h4>
        <ul>
          <li>
            To create awareness and advocate against sexual abuse on both gender
          </li>
          <li className="middle">
            To build the confidence of victims to report their assault so
            necessary organizations and agency could ensure justice is served
          </li>
          <li>
            To provide care and support for victims ensure the rate of Rape
            stigmatization reduces daily
          </li>
        </ul>
      </section>
      <section className="how-it-works">
        <h4 className="header">How It Works</h4>
        <div className="process-grid">
          {[1, 2, 3].map((i) => (
            <ProcessCard
              key={i}
              content="No content yet"
              header="Process Control"
            />
          ))}
        </div>
      </section>
      <section className="the-team">
        {/* <h4 className="header">Meet The Team</h4> */}
        <TooltipRect content="Meet The Team" />
      </section>
    </div>
  );
}

export default About;
