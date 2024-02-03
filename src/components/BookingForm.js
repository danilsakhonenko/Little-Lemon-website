import React, { useState } from "react";
import ActionButton from "./ActionButton";

function BookingForm(props) {
  const [guests, setGuest] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState();
  const [occasion, setOccasion] = useState("");
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Form submited!");
  }
  console.log(props.timesState);
  return (
    <form onSubmit={handleSubmit} className="form">
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
        onChange={(e) => {setDate(e.target.value);
          props.dispatchDate({type: e.target.value});
        }}
      />
      <label className="lead-text" htmlFor="res-time">
        Available Times
      </label>
      <select className="input paragraph-text" id="res-time" value={time} onChange={(e)=>{setTime(e.target.value)}}>
        {props.timesState.times.map((avalTime) => (
          <option>{avalTime}</option>
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
        <option key="default" value="" disabled aria-disabled="true">Select an occasion</option>
        <option key="birthday" value="birthday">Birthday</option>
        <option key="anniversary" value="anniversary">Anniversary</option>
        <option key="other" value="other">Other</option>
      </select>
      <ActionButton role="button" type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
