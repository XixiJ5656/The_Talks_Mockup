import React from "react";
import Smallbox from "./Smallbox";

function Directory() {
  return (
    <div className="directory">
      <h1>INTERVIEW DIRECTORY</h1>
      <div className="sm-box-grid">
        <Smallbox />
        <Smallbox />
        <Smallbox />
        <Smallbox />
        <Smallbox />
        <Smallbox />
        <Smallbox />
        <Smallbox />
      </div>
    </div>
  );
}

export default Directory;
