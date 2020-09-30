import React from "react";

import "./ProcessCard.scss";
import logo from "../../assets/logo_transparent.png";

export default function ProcessCard({ content, header }) {
  return (
    <div className="p-card">
      <div className="p-icon" style={{ backgroundImage: `url(${logo})` }} />
      <div className="header p-header">{header}</div>
      <div className="content p-content">{content}</div>
    </div>
  );
}
