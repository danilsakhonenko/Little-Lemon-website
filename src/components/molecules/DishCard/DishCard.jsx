import React from "react";
import styles from "./DishCard.module.css";
import { Image } from "../../atoms/Image";
import { Title } from "../../atoms/Title";
import { PriceTag } from "../../atoms/PriceTag";
import { Paragraph } from "../../atoms/Paragraph";
import { NavigationLink } from "../../atoms/NavigationLink";

export const DishCard = ({ externalClasses, ...props }) => {
  const styleClass = `${styles.card} ${externalClasses}`;
  return (
    <article className={styleClass}>
      <Image
        src={props.imageSrc}
        externalClasses={styles.image}
        alt={`Dish: ${props.name}`}
      />
      <div className={styles.info}>
        <div className={styles.titleRow}>
          <Title>{props.name}</Title>
          <PriceTag>{props.price}</PriceTag>
        </div>
        <Paragraph externalClasses={styles.overflowParagraph}>{props.description}</Paragraph>
        <NavigationLink to={`/${props.id}`}>Order a delivery</NavigationLink>
      </div>
    </article>
  );
};
