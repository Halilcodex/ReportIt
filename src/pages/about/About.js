import React from "react";
import "./About.scss";
import logo from "../../assets/official-logo2.png";
import NavBar from "../../components/NavBar.js";

function About() {
  return (
    <div className="about-container">
      <nav className="navbar navbar-light">
        <a className="navbar-brand" href="#">
          <img src={logo} width="100" alt="" loading="lazy" />
        </a>
      </nav>
      {/* <section className="navbar">
        <div>
          <img src={logo} alt="logo" width="100" />
        </div>
        <div className="nav-links">
          <a>Home</a>
          <a>About Us</a>
          <a>Report It</a>
        </div>
      </section> */}
    </div>
  );
}

export default About;
