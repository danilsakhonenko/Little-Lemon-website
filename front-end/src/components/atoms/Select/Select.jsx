import React from "react";
import styles from "./Select.module.css";

export const Select = ({externalClasses, options, ...props }) => {
  const styleClass = `${styles.select} ${externalClasses}`
  return (
    <select className={styleClass} {...props}>
      <option value="" disabled aria-disabled="true">
        Select an option
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
