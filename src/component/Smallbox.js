import React from "react";
import "../App.css";

function Smallbox(props) {
  return (
    <div className="sm-box">
      <img src={props.url} alt="" />
    </div>
  );
}

export default Smallbox;
