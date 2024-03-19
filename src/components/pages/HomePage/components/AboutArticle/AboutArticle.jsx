import React from "react";
import { Article } from "../../../../organisms/Article/Article";
import { Heading } from "../../../../atoms/Heading";
import { Paragraph } from "../../../../atoms/Paragraph";
import styles from './AboutArticle.module.css'
import photo1 from '../../../../../assets/images/Mario and Adrian a.jpg'
import photo3 from '../../../../../assets/images/Mario and Adrian b.jpg'
import photo2 from '../../../../../assets/images/restaurant chef.jpg'

export const AboutArticle = () => {
  const paragraph1 = `Family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.
  Step into our cozy dining space and embark on a culinary journey through the heart of the Mediterranean.`;
  const paragraph2 = `Our commitment to quality ingredients and meticulous preparation shines through in every bite. 
  Whether you're joining us for a casual lunch with friends or a romantic dinner for two, 
  our warm hospitality and delectable cuisine will make you feel right at home.`;
  return (
    <Article externalClasses={styles.aboutArticle} imageSrc={[photo1,photo2,photo3]} alt={"Restaurant chefs"}>
      <Heading level={2}>Little Lemon</Heading>
      <Heading level={2}>Chicago</Heading>
      <Paragraph externalClasses={styles.paragraph}>{paragraph1}</Paragraph>
      <Paragraph externalClasses={styles.paragraph}>{paragraph2}</Paragraph>
    </Article>
  )
};
