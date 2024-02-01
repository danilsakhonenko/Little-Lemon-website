import React from "react";
import BookingForm from "./BookingForm";
import ActionButton from "./ActionButton";

function BookingPage() {
  return (
    <form className="form">
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time ">
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <ActionButton type="submit" label="Make Your reservation" />
    </form>
  );
}

export default BookingPage;
