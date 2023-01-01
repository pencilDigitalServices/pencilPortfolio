import React from "react";
import { InlineWidget } from "react-calendly";
import "./Calendy.css"

const Calendy = () => {
  return (
    <div className="calender-container">
      <div className="calender-heading">
        <p>
          Make sure before you join the meeting, <br /> you have all the
          necessary documents or reference you would like to show me or share
          with me.
        </p>
      </div>
      <div className="calendy-calender">
        <InlineWidget url="" />
      </div>
    </div>
  );
};

export default Calendy;
