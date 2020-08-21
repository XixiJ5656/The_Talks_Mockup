import React from "react";
import "./App.css";
import Navbar from "./navigations/Navbar";
import NewInterview from "./component/NewInterview";
import MostReadInterviews from "./component/MostReadInterviews";
import WorldGuide from "./component/WorldGuide";
import LastWeekInterviews from "./component/LastWeekInterviews";
import FashionPg from "./component/FashionPg";
import LatestInterviews from "./component/LatestInterviews";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NewInterview />
      <MostReadInterviews />
      <WorldGuide />
      <LastWeekInterviews />
      <FashionPg />
      <LatestInterviews />
    </div>
  );
}

export default App;
