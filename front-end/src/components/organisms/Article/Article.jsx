import React from "react";
import styles from "./Article.module.css";
import { ImageCollage } from "../../molecules/ImageCollage";
import { Heading } from "../../atoms/Heading";
import { Image } from "../../atoms/Image";
import { Paragraph } from "../../atoms/Paragraph";
import { ActionButton } from "../../atoms/ActionButton";

export const Article = ({ externalStyles, ...props }) => {
  const styleClass = [
    styles.article,
    externalStyles.styleClass,
    "container",
  ].join(" ");
  return (
    <article className={styleClass}>
      <div className={styles.textBlock}>
        {props.heading1 && <Heading level={1}>{props.heading1}</Heading>}
        {props.heading2 && (
          <Heading level={2} color={externalStyles.textColor}>
            {props.heading2}
          </Heading>
        )}
        {Array.isArray(props.paragraphs) ? (
          props.paragraphs.map((paragraph, index) => {
            return (
              <Paragraph
                key={index}
                type="lead"
                color={externalStyles.textColor}
              >
                {paragraph}
              </Paragraph>
            );
          })
        ) : (
          <Paragraph type="lead" color={externalStyles.textColor}>
            {props.paragraphs}
          </Paragraph>
        )}
        {props.btnLink && props.btnValue && (
          <ActionButton
            externalClasses={styles.button}
            link={props.btnLink}
            value={props.btnValue}
          />
        )}
      </div>
      <div className={styles.space}></div>
      {typeof props.imageSrc === "string" ? (
        <Image
          externalClasses={styles.image}
          src={props.imageSrc}
          alt={props.alt}
        />
      ) : (
        <ImageCollage
          externalClasses={styles.image}
          imageUrls={props.imageSrc}
          alt={props.alt}
        />
      )}
    </article>
  );
};
