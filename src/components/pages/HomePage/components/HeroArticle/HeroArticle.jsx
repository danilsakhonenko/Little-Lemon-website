import React from 'react'
import { Article } from '../../../../organisms/Article/Article'
import {ActionButton} from '../../../../atoms/ActionButton'
import {Heading} from '../../../../atoms/Heading'
import {Paragraph} from '../../../../atoms/Paragraph'
import styles from './HeroArticle.module.css'
import PreviewImg from '../../../../../assets/images/restauranfood.jpg'

export const HeroArticle = () => {
  const restaurantDescription =
    `Family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.
    Immerse yourself in the vibrant flavors of our region, where each dish is crafted with love and care,
    ensuring a dining experience that delights the senses and leaves a lasting impression.`;
  return (
    <Article externalClasses={styles.heroArticle} imageSrc={PreviewImg} alt={"Preview of the food"}>
      <Heading externalClasses={styles.h1} level={1}>Little Lemon</Heading>
      <Heading externalClasses={styles.h2} level={2}>Chicago</Heading>
      <Paragraph externalClasses={styles.paragraph}>{restaurantDescription}</Paragraph>
      <ActionButton
        link="/booking"
        externalClasses={styles.reserveButton}
        value="Reserve a table"
      />
    </Article>
  )
}
