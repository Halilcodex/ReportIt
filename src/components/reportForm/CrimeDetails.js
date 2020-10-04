import React from "react";

export default function CrimeDetails() {
  return (
    <div className="crime-details">
      <small>Tell us where it happened!</small>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputCity">LGA</label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputState">State</label>
          <select id="inputState" className="form-control">
            <option defaultValue>Choose...</option>
            <option>...</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea className="form-control" id="description" rows="3"></textarea>
      </div>
      <div className="form-group">
        <label>Provide any pictures/footage of the incident</label>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="validatedCustomFile"
          />
          <label className="custom-file-label" htmlFor="validatedCustomFile">
            Choose file...
          </label>
        </div>
      </div>
    </div>
  );
}
