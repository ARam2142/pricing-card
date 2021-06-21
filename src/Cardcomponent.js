import React from "react";
import "./App.css";

function Cardcomponent() {
  return (
    <div className="card">
      <div className="topcomponent">
        <p>100K Pageviews</p>
        <h2 className="money">$16.00</h2>
        <span className="slash">/</span>
        <p className="month">month</p>
      </div>
      <div className="sliderbox">
        <input
          type="range"
          min="1"
          max="100"
          value="50"
          className="slider"
          id="myRange"
        />
      </div>
      <div className="monthybilling">
        <p className="monthly">Monthly Billing</p>
        <label class="switch">
          <input type="checkbox"></input>
          <span className="slider"></span>
        </label>
      </div>
      <div className="yearlybilling">
        <p className="yearly">Yearly Billing</p>
        <p className="discount">25% discount</p>
      </div>

      <ul className="list">
        <li>Unlimited websites</li>
        <li>100% data ownership</li>
        <li>Email reports</li>
      </ul>
      <button>Start my trial</button>
    </div>
  );
}
export default Cardcomponent;
