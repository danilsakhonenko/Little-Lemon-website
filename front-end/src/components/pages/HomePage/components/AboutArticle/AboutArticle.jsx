import React from "react";
import { Article } from "../../../../organisms/Article/Article";
import photo1 from "../../../../../assets/images/Mario and Adrian a.jpg";
import photo3 from "../../../../../assets/images/Mario and Adrian b.jpg";
import photo2 from "../../../../../assets/images/restaurant chef.jpg";

export const AboutArticle = ({ externalStyles}) => {
  const heading2 = `Little Lemon`;
  const paragraph1 = `Family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.
  Step into our cozy dining space and embark on a culinary journey through the heart of the Mediterranean.`;
  const paragraph2 = `Our commitment to quality ingredients and meticulous preparation shines through in every bite. 
  Whether you're joining us for a casual lunch with friends or a romantic dinner for two, 
  our warm hospitality and delectable cuisine will make you feel right at home.`;
  return (
    <Article
      externalStyles={externalStyles}
      heading2={heading2}
      paragraphs={[paragraph1, paragraph2]}
      btnLink={"/about"}
      btnValue={"About Page"}
      imageSrc={[photo1, photo2, photo3]}
      alt={"Restaurant chefs"}
    />
  );
};
