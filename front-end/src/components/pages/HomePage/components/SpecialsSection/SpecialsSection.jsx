import React from "react";
import { MenuSection } from "../../../../organisms/MenuSection";

export const SpecialsSection = ({ externalStyles }) => {
  return (
    <MenuSection
      externalStyles={externalStyles}
      heading={"This weeks specials!"}
      category={"specials"}
      button={{ link: "/menu", value: "Online Menu" }}
    />
  );
};
