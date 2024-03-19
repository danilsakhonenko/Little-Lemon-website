import React from "react";
import styles from './UserReviewCard.module.css'

function UserReviewCard(props) {
    const stars = Array.from({ length: 5 }, (_, index) => (
        <span className={styles.rating} key={index}>{index < props.rating ? '★' : '☆'}</span>
      ));

  return (
    <article className={`${styles.reviewCard} card`}>
      <img src={props.imageSrc} className={styles.image} alt="Dish" />
      <p className="title-text">{props.userName}</p>
      <p>{stars}</p>
      <p className={`${styles.comment} paragraph-text overflow-text`}>{props.comment}</p>
    </article>
  );
}

export default UserReviewCard;
