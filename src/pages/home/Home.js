import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Button, Divider, AccordionDetails } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import Footer from "../../components/footer/Footer";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

import { Link } from "react-router-dom";

import logo from "../../assets/logo_transparent.png";
import womanPic from "../../assets/woman.jpg";
import cuffsPic from "../../assets/cuffs.jpg";
import peoplePic from "../../assets/people.jpg";
import graphIcon from "../../assets/icons8-graph.png";
import privacyIcon from "../../assets/icons8-privacy.png";
import timeIcon from "../../assets/icons8-time.png";
import lagosLogo from "../../assets/lagos-state-coat-of-arm.jpg";
import mic from "../../assets/mic.png";
import "./Home.scss";
import Typewriter from "typewriter-effect";

const Accordion = withStyles({
  root: {
    backgroundColor: "transparent",
    borderBottom: "1px solid #1e71b4",
    color: "#ffffff",
    margin: "10px 10%",
  },
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "#1e71b4",
    borderRadius: "4px",
  },
})(MuiAccordionSummary);

function Home() {
  const [screenSize] = useState(window.screen.width);

  return (
    <div className="home-container">
      <Carousel
        className="carousel-container"
        autoPlay
        animation="fade"
        interval={10000}
        indicators={false}
        timeout={800}
        navButtonsAlwaysVisible={true}
      >
        <div className="item item-1">
          <div
            className="bg-image"
            style={{ backgroundImage: `url(${womanPic})` }}
          />
          <div className="logo-and-text">
            <img className="logo" src={mic} alt="reportit-logo" />
            <h1 className="header">YOU ARE NOT ALONE</h1>
            <h3 className="content">
              We will go through this moment with you, till the very end
            </h3>
            <Button
              className="reportit-button"
              variant="contained"
              color="primary"
            >
              Report It
            </Button>
          </div>
        </div>
        <div className="item item-2">
          <div
            className="bg-image"
            style={{ backgroundImage: `url(${cuffsPic})` }}
          />
          <div className="logo-and-text">
            <img className="logo" src={mic} alt="reportit-logo" />
            <h1 className="header">
              Do Not Give Your Abuser the Opportunity to Repeat the Offense
            </h1>
            <Button
              className="reportit-button"
              variant="contained"
              color="primary"
            >
              Report It
            </Button>
          </div>
        </div>
        <div className="item item-3">
          <div
            className="bg-image"
            style={{ backgroundImage: `url(${peoplePic})` }}
          />
          <div className="logo-and-text">
            <div className="contents">
              <img className="logo" src={mic} alt="reportit-logo" />
              <h1 className="header">
                Your Silence Increases the Number of Victims
              </h1>
              <div className="extra">
                <Button
                  className="reportit-button"
                  variant="contained"
                  color="primary"
                >
                  Report
                </Button>
                <Typewriter
                  options={{
                    strings: [
                      "Sexual Assault",
                      "Child Sexual Abuse",
                      "Sexual Assault of Men and Boys",
                      "Intimate Partner Sexual Violence",
                      "Incest",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      <section className="reportit-offers">
        <div className="offer offer-1">
          <div className="circle">
            <img src={graphIcon} alt="graph-icon" />
          </div>
          <div className="offer-texts">
            <p className="headline">Track your report</p>
            <p className="content">
              Never lose track of the progress of your report as it moves within
              and between agencies
            </p>
          </div>
        </div>
        <hr className="offer-hr" />
        <div className="offer offer-2">
          <div className="circle">
            <img src={privacyIcon} alt="privacy-icon" width="64" />
          </div>
          <div className="offer-texts">
            <p className="headline">Privacy is Guaranteed</p>
            <p className="content">
              Your identity is concealed and your safety is guaranteed.
            </p>
          </div>
        </div>
        <hr className="offer-hr" />
        <div className="offer offer-3">
          <div className="circle">
            <img src={timeIcon} alt="time-icon" />
          </div>
          <div className="offer-texts">
            <p className="headline">Timing is Important</p>
            <p className="content">
              We waste no time in sending your report out to the relevant
              agencies so as to apprehend the criminals at the earliest
            </p>
          </div>
        </div>
      </section>
      <section className="statistics">
        <h4 className="header">STATISTICS</h4>
        <div className="statistics-content">
          <p className="content">
            Africa has the highest prevalence rate of child sexual abuse around{" "}
            <strong>34.4 %</strong>
          </p>
          <Divider
            className={`${screenSize > 425 ? "divider" : "div-h"}`}
            orientation={`${screenSize > 425 ? "vertical" : "horizontal"}`}
            flexItem
          />
          <p className="content">
            Between 2012 and 2013, about <strong>30%</strong> of women in
            Nigeria experienced one form of domestic violence or another
          </p>
          <Divider
            className={`${screenSize > 425 ? "divider" : "div-h"}`}
            orientation={`${screenSize > 425 ? "vertical" : "horizontal"}`}
            flexItem
          />{" "}
          <p className="content">
            it was reported that <strong>5.0%</strong> sought help, with only{" "}
            <strong>3.5% receiving any services</strong>
          </p>
        </div>
      </section>
      <section className="video-stories">
        <h4 className="header">VIDEO STORY</h4>
        <div className="video-stories-content">
          <iframe
            width="450"
            height="300"
            src="https://www.youtube.com/embed/bpxvWj6HLZ4"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-story"
            title="no-to-rape"
          ></iframe>
          <iframe
            width="450"
            height="300"
            src="https://www.youtube.com/embed/yTRf7BGYl8A"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-story"
            title="say-no"
          ></iframe>
          <iframe
            width="450"
            height="300"
            src="https://www.youtube.com/embed/bpxvWj6HLZ4"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-story"
            title="no-to-rape"
          ></iframe>
        </div>
      </section>
      <section className="faqs">
        <h4 className="header">FAQS</h4>
        <div className="faq-content">
          <Accordion>
            <AccordionSummary>What is Rape?</AccordionSummary>
            <AccordionDetails>
              Rape is an unlawful sexual intercourse or any other sexual
              penetration of the vagina, anus, or mouth of another person, with
              or without force, by a sex organ, other body part, or foreign
              object, without the consent of the victim.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>What is Sexual Violence?</AccordionSummary>
            <AccordionDetails>
              Sexual violence occurs when a person or group of persons forces or
              manipulates someone else into unwanted sexual activity without
              their consent. Sexual Violence could be manifested in forms like
              rape, sexual assault harassment and/or exploitation.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>What is Child Sexual Abuse?</AccordionSummary>
            <AccordionDetails>
              Child sexual abuse occurs when an adult or older child forces or
              persuades a child to take part in sexual activities. This does not
              have to be physical contact, and it can happen online.
            </AccordionDetails>
          </Accordion>
        </div>
      </section>
      <section className="partners">
        <h4>PARTNERS</h4>
        <div className="partners-content">
          <img src={lagosLogo} alt="lagos-state-coat-of-arms" width="150" />
          <img src={lagosLogo} alt="lagos-state-coat-of-arms" width="150" />
          <img src={lagosLogo} alt="lagos-state-coat-of-arms" width="150" />
          <img src={lagosLogo} alt="lagos-state-coat-of-arms" width="150" />
          <img src={lagosLogo} alt="lagos-state-coat-of-arms" width="150" />
        </div>
      </section>
      <section className="links">
        <hr className="left" />
        <hr className="right" />
        <div className="links-content">
          <Link className="footer-link" to="/about">
            About Us
          </Link>
          <Link className="footer-link" to="#">
            Privacy Policy
          </Link>
          <Link className="footer-link" to="#">
            Terms
          </Link>
          <Link className="footer-link" to="#">
            Contact Support
          </Link>
        </div>
      </section>
      <section className="social-media">
        <FacebookIcon fontSize="large" />
        <InstagramIcon className="instagram" fontSize="large" />
        <TwitterIcon fontSize="large" />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
