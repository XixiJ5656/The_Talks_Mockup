import React from "react";
import "../App.css";
import Bigbox from "./Bigbox";
import Details from "./Details";
import ImageBox from "./ImageBox";

const LastWeekInterviews = () => {
  return (
    <div className="last-week">
      <div className="left-side">
        <Bigbox
          title=" LAST WEEK'S INTERVIEW"
          url="https://the-talks.com/wp-content/uploads/2020/08/Norman-Jean-Roy-01-690x360.jpg"
          quote='NORMAN JEAN ROY:"THE CAMERA USED TO CARRY THIS MYSTIQUE"'
        />
        <Details />
      </div>
      <div className="right-side">
        <h1>EDITOR'S PICKS</h1>
        <ImageBox
          url="https://www.morrisonhotelgallery.com/images/medium/DBYRNE_00164_Byrne%20David%20studio%201980%20copy.jpg"
          name="David Byrne"
          quote="WE DID OKAY"
        />
        <ImageBox
          url="https://www.morrisonhotelgallery.com/images/medium/DBYRNE_00164_Byrne%20David%20studio%201980%20copy.jpg"
          name="David Byrne"
          quote="WE DID OKAY"
        />
        <ImageBox
          url="https://www.morrisonhotelgallery.com/images/medium/DBYRNE_00164_Byrne%20David%20studio%201980%20copy.jpg"
          name="David Byrne"
          quote="WE DID OKAY"
        />
      </div>
    </div>
  );
};

export default LastWeekInterviews;
