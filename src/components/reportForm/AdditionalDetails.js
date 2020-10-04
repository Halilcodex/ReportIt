import React from "react";

export default function AdditionalDetails() {
  return (
    <div className="xtra-details">
      <div className="form-group">
        <p>Have you reported it elsewhere?</p>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="yes"
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            YES
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            NO
          </label>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <select className="form-control" id="gender">
          <option>Male</option>
          <option>Female</option>
          <option>Transgender</option>
          <option>Prefer not to say</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="ethnicity">Ethnic Heritage</label>
        <select
          className="form-control"
          defaultValue="choose one..."
          id="ethnicity"
        >
          <option defaultValue>choose...</option>
          <option>Hausa</option>
          <option>Igbo</option>
          <option>Yoruba</option>
        </select>
      </div>
    </div>
  );
}
