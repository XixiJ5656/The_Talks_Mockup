import React from "react";
import "../App.css";

function ImageBox(props) {
  return (
    <div className="m-box">
      <img src={props.url} alt="" />
      <h3>{props.name}</h3>
      <p>{props.quote}</p>
    </div>
  );
}

export default ImageBox;
