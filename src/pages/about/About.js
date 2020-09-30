import React from "react";
import "./About.scss";
import aboutImg from "../../assets/about/about-image.jpg";
import ProcessCard from "../../components/processCard/ProcessCard";
import TooltipRect from "../../components/toolTipRect/TooltipRect";
import people1 from "../../assets/about/people1.png";
import people2 from "../../assets/about/people2.png";
import people3 from "../../assets/about/people3.png";
import people4 from "../../assets/about/people4.png";
import people5 from "../../assets/about/people5.png";

function About() {
  const peopleList = [
    { pic: people1, name: "Ibrahim Amoo", role: "Front-end Developer" },
    { pic: people2, name: "Uchenna Joel", role: "Back-end Developer" },
    { pic: people3, name: "Tayo Osodein", role: "Legal Advisor" },
    { pic: people4, name: "Kingsley Momah", role: "Web Designer" },
    { pic: people5, name: "Joyce Olayinka", role: "Content Creator" },
  ];
  const processContent = () => {
    return (
      <ul>
        <li>Frontend development</li>
        <li>Frontend integration</li>
        <li>Backend development</li>
        <li>Quality Assurance</li>
      </ul>
    );
  };
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
          {[1, 2, 3, 4].map((i) => (
            <ProcessCard
              key={i}
              content={processContent()}
              header="Process Control"
            />
          ))}
        </div>
      </section>
      <section className="the-team">
        <TooltipRect content="Meet The Team" />
        <div className="team-members">
          {peopleList.map((item, i) => (
            <div key={i} className="member-container">
              <img src={item.pic} className="member-image" alt="people" />
              <div className="member-profile">
                <h2 className="content name">{item.name}</h2>
                <p className="content role">{item.role}</p>
                <p className="content">
                  Aspiring Innovative Electronic and Electrical Engineer:
                  Interested in control engineering and automation. Enjoy using
                  technology to improve others’ lives and seeking to join the
                  engineering world with a strong, dedicated mind.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="footer">
        © 2020 Copyright | All rights reserved
      </section>
    </div>
  );
}

export default About;
