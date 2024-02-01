import React, { useState } from "react";
import { Link } from "react-router-dom";

function ActionButton(props) {
  return (
      <button
        className="action-button lead-text" type={props.type} id="props.id">
        {props.label}
      </button>
  );
}

export default ActionButton;
