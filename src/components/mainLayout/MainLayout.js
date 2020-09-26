import React from "react";
import "./MainLayout.scss";

function MainLayout(props) {
  return (
    <div className="mainlayout-container">
      {/* <p>This is the mainlayout</p> */}
      <section className="children">{props.children}</section>
    </div>
  );
}

export default MainLayout;
