import React from "react";
import "../App.css";

function Bigbox(props) {
  return (
    <div className="bg-box">
      <h1>{props.title}</h1>
      <img src={props.url} alt="" />
      <p>{props.quote}</p>
      <hr />
    </div>
  );
}

export default Bigbox;
