import React from "react";

export default function PersonalDetails() {
  return (
    <div className="personal">
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              className="form-control"
              id="first-name"
              placeholder="First Name"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="middle-name">Middle Name</label>
            <input
              type="text"
              className="form-control"
              id="middle-name"
              placeholder="Middle Name"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="last-name"
              placeholder="Last Name"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" className="form-control" id="dob" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" className="form-control" id="phone" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
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
      </form>
    </div>
  );
}
