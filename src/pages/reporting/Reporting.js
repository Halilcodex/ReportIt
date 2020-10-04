import React from "react";
import MultiStepForm from "../../components/reportForm/MultiStepForm";
import "./Reporting.scss";

function Reporting() {
  return (
    <div className="reporting-container container">
      <div className="card header-card">
        <h2 className="card-header text-center">Reporting Form</h2>
        <div className="card-body">
          <p>
            If you have been raped or otherwise sexually assaulted, you are not
            alone. Whether you know the perpetrator or not, it is important that
            you report the assault - even if you are in doubt that you have been
            the victim of a crime.
          </p>
        </div>
        <div className="card-footer text-center">
          <h6>Reporting</h6>
          <div className="btn-victim btn btn-outline-primary">As a Victim</div>
          <div className="btn-not-victim btn btn-outline-dark">
            For a Victim
          </div>
          <div></div>
        </div>
      </div>
      <section className="multi-step-form card">
        <MultiStepForm />
      </section>
    </div>
  );
}

export default Reporting;
