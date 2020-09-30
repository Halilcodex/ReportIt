import React from "react";

import { Divider } from "@material-ui/core";
import AssessmentIcon from "@material-ui/icons/AssessmentOutlined";
import ErrorIcon from "@material-ui/icons/ErrorOutlineOutlined";
import CheckIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

import undraw from "../../assets/about/undraw2.svg";
import "./Dashboard.scss";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="navigation">
        <div className="dashboard-header">
          <div className="texts">
            <h2>Hello Ibrahim</h2>
            <p className="subtext">
              Lorem ipsum dolor sit amet, ei duo everti iuvaret
            </p>
          </div>
          <img src={undraw} alt="undraw" width="350" />
        </div>
      </div>
      <section className="summary-card">
        <div className="custom-card card-1">
          <div>
            <h5 className="reported">
              <span>
                <AssessmentIcon fontSize="large" />
              </span>{" "}
              Reported Cases
            </h5>
            <h4>400</h4>
          </div>
          <Divider className="divider" orientation="vertical" flexItem />
          <div>
            <h5 className="failed">
              <span>
                <ErrorIcon fontSize="large" style={{ color: "#B4391E" }} />
              </span>{" "}
              Failed Cases
            </h5>
            <h4>100</h4>
          </div>
          <Divider className="divider" orientation="vertical" flexItem />
          <div>
            <h5 className="finalized">
              <span>
                <CheckIcon fontSize="large" style={{ color: "#4BD37B" }} />
              </span>{" "}
              Finalized Cases
            </h5>
            <h4>300</h4>
          </div>
        </div>
        <div className="custom-card card-2">
          <h5>Average Turnover Time</h5>
          <h4>6 Days</h4>
          <h5>Top Local Government</h5>
          <h4>Eti-Osa</h4>
        </div>
      </section>
      <section className="custom-card graph-1"></section>
    </div>
  );
}

export default Dashboard;
