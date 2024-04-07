import React from "react";
import styles from "./UserCommentCard.module.css";
import { Title } from "../../atoms/Title";
import { Image } from "../../atoms/Image";
import { StarRating } from "../../atoms/StarRating";
import { Paragraph } from "../../atoms/Paragraph";

export const UserCommentCard = ({ externalClasses, ...props }) => {
  const styleClass = `${styles.card} ${externalClasses}`;
  return (
    <article className={styleClass}>
      <Image
        src={props.imageSrc}
        externalClasses={styles.profilePic}
        alt={`${props.name}'s profile picture`}
      />
      <Title externalClasses={styles.userName}>{props.name}</Title>
      <StarRating rating={props.rating} />
      <div className={styles.comment}>
        <Paragraph externalClasses={styles.overflowParagraph} type='regular'>{props.comment}</Paragraph>
      </div>
    </article>
  );
};
