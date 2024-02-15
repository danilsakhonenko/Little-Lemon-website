import React from "react";
import { useLocation } from "react-router-dom";
import smileImg  from '../images/smile.png'
import ActionButton from "./ActionButton";

function ConfirmedBooking() {
  const formData = useLocation().state;
  return (
    <main className="container">
      <article id="confirmation">
        <h2>Thank you!</h2>
        <img src={smileImg} id="smile-img" alt="Happy face"></img>
        <section className="paragraph-text">
          Your reservation is confirmed for{" "}
          <span className="lead-text">{formData.date}</span> at{" "}
          <span className="lead-text">{formData.time}</span>{" "}
          for <span className="lead-text">{formData.guests}</span>{" "}
          {formData.guests > 1 ? " guests" : " guest"}! 
          Confirmation has been sent to <span className="lead-text">{formData.email}</span>.<br />
          We're excited to host you and ensure a memorable dining experience. We look forward to
          serving you soon.
        </section>
        <ActionButton link='/' disabled='false' role="button" type="button" value="Back to Home Page" />
      </article>
    </main>
  );
}

export default ConfirmedBooking;
