import React from "react";
import "./TooltipRect.scss";

export default function TooltipRect({ content }) {
  return (
    <div id="toolTip">
      <h4 className="header">{content}</h4>
      <div id="tailShadow"></div>
      <div id="tail1"></div>
      <div id="tail2"></div>
    </div>
  );
}
