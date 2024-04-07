import React from "react";
import styles from './StarRating.module.css'

export const StarRating = ({ externalClasses, rating }) => {
  const styleClass = `${styles.stars} ${externalClasses}`
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span className={styleClass} key={index}>
      {index < rating ? "★" : "☆"}
    </span>
  ));

  return <p>{stars}</p>;
};
