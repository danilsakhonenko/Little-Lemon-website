import React from "react";
import { Link } from "react-router-dom";

function ActionButton(props) {
  const styleClass = "action-button lead-text";
  return props.link ? (
    <Link
      to={props.link}
      role={props.role}
      id={props.id}
      className={styleClass}
      disabled={props.disabled}
      aria-disabled={props.disabled}
    >
      {props.value}
    </Link>
  ) : (
    <input
      value={props.value}
      role={props.role}
      className={styleClass}
      type={props.type}
      disabled={props.disabled}
      aria-disabled={props.disabled}
      id={props.id}
    />
  );
}

export default ActionButton;
