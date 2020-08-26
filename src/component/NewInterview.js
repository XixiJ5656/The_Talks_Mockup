import React from "react";
import "./Component.css";
const NewInterview = () => {
  return (
    <div className="first-section">
      <div className="new-interview">
        <h1>New Interview</h1>
        <img
          className="new-interview-pic"
          src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fthe-talks.com%2Fwp-content%2Fuploads%2F2014%2F09%2FKevin-Kline-01.jpg"
          alt=""
        />
      </div>{" "}
      <div className="interview-directory">
        <h1>Invterview Directory</h1>
        <div className="directory-grid">
          <img
            className="new-interview-pic"
            src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fthe-talks.com%2Fwp-content%2Fuploads%2F2014%2F09%2FKevin-Kline-01.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default NewInterview;
