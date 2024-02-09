import React, { useState } from "react";
import { Link } from "react-router-dom";

function ActionButton(props) {
  return (
      <input value={props.value} className="action-button lead-text" type={props.type} disabled={props.disabled} id="props.id"/>
  );
}

export default ActionButton;
