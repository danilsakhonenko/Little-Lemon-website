import React from "react";
import styles from "./ErrorMessage.module.css";

function BookingForm(props) {
  return (
      <div id={props.id} className={styles.error} role="alert">
        {props.error}
      </div>
  );
}

export default BookingForm;
