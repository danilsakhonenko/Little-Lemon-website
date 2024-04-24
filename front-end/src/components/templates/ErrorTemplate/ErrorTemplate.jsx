import React from "react";
import { Heading } from "../../atoms/Heading";
import styles from './ErrorTemplate.module.css'
import { ActionButton } from "../../atoms/ActionButton";

export const ErrorTemplate = ({ children }) => {
  return (
    <main className={styles.errorContainer}>
      <Heading level={2}>{`Something went wrong :(`}</Heading>
      <div>{children}</div>
      <ActionButton link={'/'} value={'Home Page'}/>
    </main>
  );
};
