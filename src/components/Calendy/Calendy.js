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
        <InlineWidget url="https://calendly.com/tajudeenabdulgafar4/pencil-meet?hide_event_type_details=1&hide_gdpr_banner=1" />
      </div>
    </div>
  );
};

export default Calendy;
