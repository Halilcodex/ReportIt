import React from "react";

import logo from "../../assets/official-logo2.png";

import "bootstrap/dist/css/bootstrap.css";
import "./MainLayout.scss";

function MainLayout(props) {
  const getActive = (val) => {
    let ret = false;
    let pathArr = window.location.pathname.split("/");
    if (val === "/") {
      if (window.location.pathname === "/" || window.location.pathname === "") {
        return true;
      }
    }
    if (pathArr.includes(val)) {
      ret = true;
    }
    return ret;
  };

  return (
    <div className="mainlayout-container">
      <a name="top"></a>
      <div className="navigation">
        <nav className="navbar navbar-light">
          <a className="navbar-brand" href="/">
            <img src={logo} width="100" alt="" loading="lazy" />
          </a>
          <nav className="nav nav-pills">
            <a className={`nav-link ${getActive("/") && "active"}`} href="/">
              Home
            </a>
            <a
              className={`nav-link ${getActive("dashboard") && "active"}`}
              href="/dashboard"
            >
              Dashboard
            </a>
            <a
              className={`nav-link ${getActive("reporting") && "active"}`}
              href="/reporting"
            >
              Report It
            </a>
            <a
              className={`nav-link ${getActive("about") && "active"}`}
              href="/about"
            >
              About Us
            </a>
          </nav>
        </nav>
      </div>
      <section className="children">{props.children}</section>
    </div>
  );
}

export default MainLayout;
