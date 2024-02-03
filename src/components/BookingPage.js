import React, { useReducer, useState } from "react";
import BookingForm from "./BookingForm";

const unpdateTimes = (state, date) => {
  if (date.type === "2024-02-02")
    return {
      times: [
        "11:30",
        "13:00",
        "13:30",
        "14:30",
        "15:00",
        "16:00",
        "18:00",
        "20:30",
      ],
    };
    else
    return {
      times: [
        "15:00",
        "16:00",
        "18:00",
        "20:30",
      ],
    };
};
const initializeTimes = () => {
  return { times: ["11:30"]};
};

function BookingPage() {
  let lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris porta, magna et aliquet tempor, tortor mi iaculis enim, ac tempor ligula nulla tincidunt libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque efficitur posuere.";
  const [state, dispatch] = useReducer(unpdateTimes, initializeTimes());

  return (
    <main className="container" id="booking">
      <h2>Your reservation details</h2>
      <BookingForm timesState={state} dispatchDate={dispatch} />
    </main>
  );
}

export default BookingPage;
