import React from "react";
import nyscLogo from "../../assets/nysc-logo.png";
import DoubleArrowIcon from "@material-ui/icons/ExpandLess";

import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <a href="#top" className="back-to-top">
        <DoubleArrowIcon />
        {/* <small>Back to Top</small> */}
      </a>
      © 2020 Copyright | All rights reserved
      <p>Powered by NYSC</p>
      <img className="nysc-logo" src={nyscLogo} alt="nysc-logo" />
    </div>
  );
}
