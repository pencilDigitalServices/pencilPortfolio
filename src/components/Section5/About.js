import React from "react";
import avatar from "../../images/image.jpeg";
import Calendy from "../Calendy/Calendy";
import "./About.css";

function About() {
  return (
    <div className="about-me-container">
      <h2>
        Let's Book a call, <br /> So that we can discuss about your next step:
      </h2>
      <div className="about-me-content">
        <div className="about-me-avatar">
          <img src={avatar} alt="avatar" />
          <p>
            <strong>@Pencil:</strong> We are freelancer web developer, designer
            and trainer. We educate/train/help people to get their dream job or
            start their career as a freelancer or build thier next big webapp.
          </p>
        </div>
        <div className="about-me-calendar">
          <Calendy />
        </div>
      </div>
    </div>
  );
}

export default About;
