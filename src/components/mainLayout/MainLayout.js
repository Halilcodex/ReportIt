import React from "react";

import logo from "../../assets/official-logo2.png";

import "bootstrap/dist/css/bootstrap.css";
import "./MainLayout.scss";
import { Link } from "react-router-dom";

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
          <Link className="navbar-brand" to="/">
            <img src={logo} width="100" alt="" loading="lazy" />
          </Link>
          <nav className="nav nav-pills">
            <Link className={`nav-link ${getActive("/") && "active"}`} to="/">
              Home
            </Link>
            <Link
              className={`nav-link ${getActive("dashboard") && "active"}`}
              to="/dashboard"
            >
              Dashboard
            </Link>
            <Link
              className={`nav-link ${getActive("reporting") && "active"}`}
              to="/reporting"
            >
              Report It
            </Link>
            <Link
              className={`nav-link ${getActive("about") && "active"}`}
              to="/about"
            >
              About Us
            </Link>
          </nav>
        </nav>
      </div>
      <section className="children">{props.children}</section>
    </div>
  );
}

export default MainLayout;
