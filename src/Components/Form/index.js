import React from "react";
import image from "./719.gif";
import { Link } from "react-router-dom";

const Form = ({ onChange, onSubmit, host, link, disabled, error, loading }) => (
  <div className="middle container">
    <h1 className="text-center">Google Drive Embeder</h1>
    <form className="form" onSubmit={onSubmit}>
      <div className="form-group">
        <input
          name="link"
          value={link}
          onChange={onChange}
          type="text"
          className="shadow form-control form-item"
          placeholder="Enter Google Drive Video Link..."
        />
      </div>
      <div>
        <button
          disabled={disabled}
          className="shadow form-control btn btn-danger"
          type="submit"
        >
          Generate Link
        </button>
      </div>
      <br />
      {loading ? <img alt="Loading" src={image} /> : <></>}
      {host && <Link to={"/" + host}>Your Link</Link>}
      {error && <p>{error.message}</p>}
    </form>
    {!host && !loading && (
      <>
        <span>Link Format: </span>
        <br />
        <code>https://drive.google.com/file/d/YOUR_GOOGLE_DRIVE_ID/view</code>
        <br />
        <code> https://drive.google.com/open?id=YOUR_GOOGLE_DRIVE_ID</code>
      </>
    )}
  </div>
);

export default Form;
