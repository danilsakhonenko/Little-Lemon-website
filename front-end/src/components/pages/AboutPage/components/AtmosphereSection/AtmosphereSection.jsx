import React from "react";
import styles from "./AtmosphereSection.module.css";
import { Heading } from "../../../../atoms/Heading";
import FoodImg from "../../../../../assets/images/restauranfood.jpg";
import InterierImg from "../../../../../assets/images/interier.jpg";
import InterierImg1 from "../../../../../assets/images/interier1.jpg";
import InterierImg2 from "../../../../../assets/images/interier2.jpg";
import { Image } from "../../../../atoms/Image";
import { Paragraph } from "../../../../atoms/Paragraph";
import { ScrollContainer } from "../../../../molecules/ScrollContainer";

export const AtmosphereSection = ({externalStyles}) => {
  const styleClass = [styles.section, externalStyles.styleClass, 'container'].join(' ')
  const images = [InterierImg, InterierImg1, FoodImg, InterierImg2];
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non suscipit est. 
    Nullam tristique, augue sit amet bibendum elementum, dui augue condimentum odio, 
    nec iaculis massa enim non nisl. Nulla imperdiet nibh sed sem laoreet ultricies.
     Pellentesque pretium dignissim est nec accumsan.
     Donec quis lorem sit amet augue consectetur egestas. Vivamus rhoncus iaculis nunc sit amet efficitur. `;
  return (
    <section className={styleClass}>
      <div className={styles.text}>
        <Heading externalClasses={styles.heading} level={2} color={externalStyles.textColor}>
          Atmosphere and Ambiance
        </Heading>
        <Paragraph externalClasses={styles.paragraph} type="lead" color={externalStyles.textColor}>
          {text}
        </Paragraph>
      </div>
      <ScrollContainer externalClasses={styles.imagesContainer}>
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            externalClasses={styles.image}
            alt={`Restaurant atmosphere ${index + 1}`}
          />
        ))}
      </ScrollContainer>
    </section>
  );
};
