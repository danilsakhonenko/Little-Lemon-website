import React from "react";
import { Article } from "../../../../organisms/Article/Article";
import photo1 from "../../../../../assets/images/manager.jpg";
import photo3 from "../../../../../assets/images/Mario and Adrian b.jpg";
import photo2 from "../../../../../assets/images/waitress.jpg";

export const TeamArticle = ({ externalStyles }) => {
  const heading2 = `Our Team`;
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non suscipit est. 
    Nullam tristique, augue sit amet bibendum elementum, dui augue condimentum odio, 
    nec iaculis massa enim non nisl. Nulla imperdiet nibh sed sem laoreet ultricies.
     Pellentesque pretium dignissim est nec accumsan. In pellentesque ut odio et feugiat. 
     Donec quis lorem sit amet augue consectetur egestas. Vivamus rhoncus iaculis nunc sit amet efficitur. 
     Proin eleifend, dolor ut ultrices rhoncus, ligula sem dignissim libero, et tincidunt odio ligula quis orci. 
     Integer pellentesque turpis eu consectetur malesuada. In vel dictum nibh.`;
  return (
    <Article
      externalStyles={externalStyles}
      heading2={heading2}
      paragraphs={text}
      imageSrc={[photo1, photo2, photo3]}
      alt={"Restaurant team"}
    />
  );
};
