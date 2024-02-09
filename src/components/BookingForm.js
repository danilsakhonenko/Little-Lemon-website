import React, { useState } from "react";
import ActionButton from "./ActionButton";

function BookingForm(props) {
  const [guests, setGuest] = useState(1);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState("select");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm({
      guests: guests,
      date: date,
      time: time,
      occasion: occasion,
    });
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    props.dispatch({ type: "updateDate", date: e.target.value });
    setTime("select");
  };

  const isDisabled = 1 > guests > 8 || time === "select" || occasion === "";
  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Your reservation details</h2>
      <label className="lead-text" htmlFor="guests">
        Number of guests
      </label>
      <input
        className="input paragraph-text"
        type="number"
        min="1"
        max="8"
        id="guests"
        value={guests}
        onChange={(e) => setGuest(e.target.value)}
      />
      <label className="lead-text" htmlFor="res-date">
        Date
      </label>
      <input
        className="input paragraph-text"
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />
      <label className="lead-text" htmlFor="res-time">
        Available Times
      </label>
      <select
        className="input paragraph-text"
        id="res-time"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
        }}
      >
        <option key="select" value="select" disabled aria-disabled="true">
          Select time
        </option>
        {props.times.map((avalTime,index) => (
          <option data-testid={`time-${index}`} key={avalTime}>{avalTime}</option>
        ))}
      </select>

      <label className="lead-text" htmlFor="occasion">
        Occasion
      </label>
      <select
        className="input paragraph-text"
        id="occasion"
        value={occasion}
        onChange={(e) => {
          setOccasion(e.target.value);
        }}
      >
        <option key="default" value="" disabled aria-disabled="true">
          Select an occasion
        </option>
        <option key="birthday" value="birthday">
          Birthday
        </option>
        <option key="anniversary" value="anniversary">
          Anniversary
        </option>
        <option key="other" value="other">
          Other
        </option>
      </select>
      <ActionButton
        disabled={isDisabled}
        role="button"
        type="submit"
        value="Make your reservation"
      />
    </form>
  );
}

export default BookingForm;
