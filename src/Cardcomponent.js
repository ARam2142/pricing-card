import React from "react";
import Slider from "./Slider";
// import checks from '../images/icon-check.svg'
import "./App.css";

function Cardcomponent() {
  return (
    <div className="card">
      <div className="topcomponent">
        <p className="pageviews">100K Pageviews</p>
        <p className="money">$16.00</p>
        <span className="slash">/</span>
        <p className="month">month</p>
      </div>
      <Slider />
      <div className="moveright">
        <div className="monthlybilling">
          <p className="monthly">Monthly Billing</p>
          {/* unlock button */}
          <input type="checkbox" id="switch" className="checkbox" />
          <label htmlFor="switch" className="toggle"></label>
        </div>
        <div className="yearlybilling">
          <p className="yearly">Yearly Billing</p>
          <p className="discount">25% discount</p>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="bottom">
        <ul className="list">
          <li>Unlimited websites</li>
          <li>100% data ownership</li>
          <li>Email reports</li>
        </ul>
        <br></br>
        <button className="trial">Start my trial</button>
      </div>
    </div>
  );
}
export default Cardcomponent;
