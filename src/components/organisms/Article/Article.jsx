import React from "react";
import styles from "./Article.module.css";
import { ImageCollage } from "../../molecules/ImageCollage";
import { Image } from "../../atoms/Image";

export const Article = ({ externalClasses, children, imageSrc, alt }) => {
  const styleClass = `${styles.article} ${externalClasses}`;
  return (
    <article className={`${styleClass} container`}>
      <div className={styles.text}>{children}</div>
      <div className={styles.space}></div>
      {typeof imageSrc === "string" ? (
        <Image externalClasses={styles.image} src={imageSrc} alt={alt} />
      ) : (
        <ImageCollage
          externalClasses={styles.image}
          imageUrls={imageSrc}
          alt={alt}
        />
      )}
    </article>
  );
};
