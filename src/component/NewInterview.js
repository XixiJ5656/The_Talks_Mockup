import React from "react";
import "./Component.css";
import Bigbox from "./Bigbox";
import Details from "./Details";
import Directory from "./Directory";
import QuoteSLide from "./QuoteSlide";
import "../App.css";
const NewInterview = () => {
  return (
    <div className="new-interveiw">
      <div className="top-line">
        <Bigbox url="https://the-talks.com/wp-content/uploads/2020/08/Benjamin-Moser-01-690x360.jpg" />
        <Directory />
      </div>
      <div className="bottom-line">
        <Details />
        <QuoteSLide />
      </div>
    </div>
  );
};

export default NewInterview;
