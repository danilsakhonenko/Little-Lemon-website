import React from "react";
import styles from './CardsContainer.module.css'

const CardsContainer = ({ children }) => {
  return (
    <section className={styles.container}>
      {children}
    </section>
  );
}

export default CardsContainer;