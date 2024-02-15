import React from "react";
import ActionButton from "../../ActionButton/ActionButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from './BookingForm.module.css'

function BookingForm(props) {
  const formik = useFormik({
    initialValues: {
      email: "",
      guests: 1,
      date: new Date().toISOString().split("T")[0],
      time: "selectTime",
      occasion: "selectOccasion",
    },
    onSubmit: (values) => {
      props.submitForm({
        email: values.email,
        guests: values.guests,
        date: values.date,
        time: values.time,
        occasion: values.occasion,
      });
    },
    validateOnMount: true,
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid E-mail format.").required("This field is required."),
      guests: Yup.number()
        .min(1, "The number of guests must be greater than 0.")
        .max(10, "The number of guests should be no more than 10.")
        .required("This field is required."),
      date: Yup.date()
        .min(new Date().toISOString().split("T")[0], "Invalid date entry.")
        .required("This field is required."), //
      time: Yup.string()
        .notOneOf(["selectTime"], "Time must be selected from the list.")
        .required("This field is required."),
      occasion: Yup.string()
        .notOneOf(
          ["selectOccasion"],
          "Occasion must be selected from the list."
        )
        .required("This field is required."),
    }),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit(e);
  };

  const handleDateChange = (e) => {
    formik.setFieldValue("time", "selectTime");
    formik.setFieldTouched("time", false);
    formik.handleChange(e);
    props.dispatch({ type: "updateDate", date: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Your reservation details</h2>
      <label className="lead-text" htmlFor="email">
        Your E-mail
      </label>
      <input
        className={`${styles.input} paragraph-text`}
        autoComplete="email"
        placeholder="example@mail.com"
        autoFocus
        id="email"
        name="email"
        type="text"
        {...formik.getFieldProps("email")}
        onChange={formik.handleChange}
      />
      <div
        className={`${styles.error} ${
          formik.touched.email && formik.errors.email ? "" : styles.invisible
        }`}
      >
        {formik.errors.email}
      </div>
      <label className="lead-text" htmlFor="guests">
        Number of guests
      </label>
      <input
        className={`${styles.input} paragraph-text`}
        id="guests"
        name="guests"
        type="number"
        min="1"
        max="10"
        {...formik.getFieldProps("guests")}
        onChange={formik.handleChange}
      />
      <div
        className={`${styles.error} ${
          formik.touched.guests && formik.errors.guests ? "" : styles.invisible
        }`}
      >
        {formik.errors.guests}
      </div>
      <label className="lead-text" htmlFor="date">
        Date
      </label>
      <input
        className={`${styles.input} paragraph-text`}
        id="date"
        name="date"
        type="date"
        {...formik.getFieldProps("date")}
        onChange={handleDateChange}
      />
      <div
        className={`${styles.error} ${
          formik.touched.date && formik.errors.date ? "" : styles.invisible
        }`}
      >
        {formik.errors.date}
      </div>
      <label className="lead-text" htmlFor="time">
        Available Times
      </label>
      <select
        className={`${styles.input} paragraph-text`}
        id="time"
        name="time"
        {...formik.getFieldProps("time")}
        onChange={formik.handleChange}
      >
        <option
          key="selectTime"
          value="selectTime"
          disabled
          aria-disabled="true"
        >
          {props.times.length ? "Select time": "No available times"}
        </option>
        {props.times.map((avalTime, index) => (
          <option data-testid={`time-${index}`} key={avalTime}>
            {avalTime}
          </option>
        ))}
      </select>
      <div
        className={`${styles.error} ${
          formik.touched.time && formik.errors.time ? "" : styles.invisible
        }`}
      >
        {formik.errors.time}
      </div>
      <label className="lead-text" htmlFor="occasion">
        Occasion
      </label>
      <select
        className={`${styles.input} paragraph-text`}
        id="occasion"
        name="occasion"
        {...formik.getFieldProps("occasion")}
        onChange={formik.handleChange}
      >
        <option
          key="selectOccasion"
          value="selectOccasion"
          disabled
          aria-disabled="true"
        >
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
      <div
        className={`${styles.error} ${
          formik.touched.occasion && formik.errors.occasion ? "" : styles.invisible
        }`}
      >
        {formik.errors.occasion}
      </div>
      <ActionButton
        disabled={!formik.isValid}
        role="button"
        type="submit"
        value="Make your reservation"
      />
    </form>
  );
}

export default BookingForm;
