import React from "react";
import { Article } from "../../../../organisms/Article/Article";
import OwnersImg from "../../../../../assets/images/owners.jpg";

export const StoryArticle = ({externalStyles}) => {
  const heading1 = `Little Lemon`;
  const heading2 = `Our Story`;
  const storyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non suscipit est. Nullam tristique,
   augue sit amet bibendum elementum, dui augue condimentum odio, nec iaculis massa enim non nisl.
   Nulla imperdiet nibh sed sem laoreet ultricies. Pellentesque pretium dignissim est nec accumsan.
   In pellentesque ut odio et feugiat. Donec quis lorem sit amet augue consectetur egestas. Vivamus
   rhoncus iaculis nunc sit amet efficitur.`;
  return (
    <Article
      externalStyles={externalStyles}
      heading1 = {heading1}
      heading2={heading2}
      paragraphs = {storyText}
      imageSrc={OwnersImg}
      alt={"Restaurant owners"}
    >
    </Article>
  );
};
