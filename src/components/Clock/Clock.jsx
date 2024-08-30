import React from "react";
import { useState } from "react";
import "../../ThemesStyles/light.scss";
import "../../ThemesStyles/super.scss";
import "../../ThemesStyles/gradient.scss";

const Clock = () => {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };

  setInterval(updateTime, 1000);
  return (
    <div id="clockCont" className="outerCont">
      <h1>{currentTime}</h1>
    </div>
  );
};

export default Clock;
