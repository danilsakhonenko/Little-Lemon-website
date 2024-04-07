import React from "react";
import { Article } from "../../../../organisms/Article/Article";
import PreviewImg from "../../../../../assets/images/restauranfood.jpg";

export const HeroArticle = ({ externalStyles}) => {
  const heading1 = `Little Lemon`;
  const heading2 = `Chicago`;
  const restaurantDescription = `Family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.
    Immerse yourself in the vibrant flavors of our region, where each dish is crafted with love and care,
    ensuring a dining experience that delights the senses and leaves a lasting impression.`;
  return (
    <Article
      externalStyles={externalStyles}
      heading1={heading1}
      heading2={heading2}
      paragraphs={restaurantDescription}
      btnLink={"/booking"}
      btnValue={"Reserve a table"}
      imageSrc={PreviewImg}
      alt={"Preview of the food"}
    ></Article>
  );
};
