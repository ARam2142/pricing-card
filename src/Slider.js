import React from "react";
import "./App.css";

function Slider() {
  return (
    <div className="sliderbox">
      <input
        type="range"
        min="1"
        max="100"
        value="50"
        className="slider circle"
        id="myRange"
      />
    </div>
  );
}
export default Slider;
