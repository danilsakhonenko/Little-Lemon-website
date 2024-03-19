import React from "react";
import styles from "./ImageCollage.module.css";
import { Image } from "../../atoms/Image";

export const ImageCollage = ({ externalClasses, imageUrls, alt }) => {
  const styleClass = `${styles.container} ${externalClasses}`;
  return (
    <div className={styleClass}>
      {imageUrls.map((url, index) => (
        <figure key={url} className={styles[[`item${index + 1}`]]}>
          <Image
            src={url}
            externalClasses={styles.image}
            alt={`${alt}${[index + 1]}`}
          />
        </figure>
      ))}
    </div>
  );
};
