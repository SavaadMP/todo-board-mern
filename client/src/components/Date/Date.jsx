import React from "react";
import "./Date.scss";

const ShowDate = () => {
  const d = new Date();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const day = weekDays[d.getDay()];
  const month = d.getMonth() + 1;
  const date = d.getDate();
  const year = d.getFullYear();

  return (
    <div>
      <div className="time container">
        <div className="date">
          <h1>
            {day} {date}/{month}/{year}
          </h1>
        </div>

        <hr />
        <hr />
      </div>
    </div>
  );
};

export default ShowDate;
