import React from "react";
import styles from "./SpecialSection.module.css";
import { ActionButton } from "../../../../atoms/ActionButton";
import { Heading } from "../../../../atoms/Heading";
import { ScrollableContainer } from "../../../../molecules/ScrollableContainer";
import { DishCard } from "../../../../molecules/DishCard";
import GreekSaladImg from "../../../../../assets/images/greek salad.jpg";
import BruchettaImg from "../../../../../assets/images/bruchetta.png";
import SalmonImg from "../../../../../assets/images/salmon.jpg";
import CaesarSaladImg from "../../../../../assets/images/caesar salad.jpg";
import TiramisuImg from "../../../../../assets/images/Tiramisu.jpg";
import LemonDessertImg from "../../../../../assets/images/lemon dessert.jpg";

export const SpecialsSection = () => {
  const dishesData = [
    {
      id: 1,
      name: "Greek Salad",
      description:
        "A refreshing medley of crisp lettuce, juicy tomatoes, cucumbers, red onions, Kalamata olives, and creamy feta cheese, drizzled with zesty lemon vinaigrette. A vibrant taste of the Mediterranean in every bite.",
      price: 12.99,
      imageUrl: GreekSaladImg,
    },
    {
      id: 2,
      name: "Bruchetta",
      description:
        "Crisp baguette slices topped with diced tomatoes, basil, garlic, and olive oil. A classic Italian appetizer, bursting with fresh flavors and perfect for sharing.",
      price: 15.99,
      imageUrl: BruchettaImg,
    },
    {
      id: 3,
      name: "Lemon Dessert",
      description:
        "Indulge in a slice of heaven with our luscious lemon cake. Moist, tangy layers infused with fresh lemon zest, topped with a delicate lemon glaze for the perfect balance of sweet and citrusy flavors.",
      price: 10.99,
      imageUrl: LemonDessertImg,
    },
    {
      id: 4,
      name: "Pan-Seared Salmon",
      description:
        "Savor the ocean's bounty with our succulent pan-seared salmon. Delicately seasoned and expertly seared to perfection, each bite offers a burst of rich, buttery flavor that melts in your mouth.",
      price: 14.99,
      imageUrl: SalmonImg,
    },
    {
      id: 5,
      name: "Caesar Salad",
      description:
        "Delight in the classic Caesar Salad, featuring crisp romaine lettuce tossed with tangy Caesar dressing, savory Parmesan cheese, crunchy croutons, and finished with a hint of zesty lemon, delivering a burst of flavor in every bite.",
      price: 12.99,
      imageUrl: CaesarSaladImg,
    },
    {
      id: 6,
      name: "Tiramisu",
      description:
        "Satisfy your sweet tooth with our exquisite Tiramisu, layers of ladyfinger biscuits soaked in espresso, nestled between creamy mascarpone cheese, and dusted with cocoa powder, creating a decadent dessert that's simply irresistible.",
      price: 10.99,
      imageUrl: TiramisuImg,
    },
  ];
  return (
    <section className={`${styles.section} container`}>
      <Heading externalClasses={styles.heading} level={2}>
        This weeks specials!
      </Heading>
      <ActionButton
        link="/"
        externalClasses={styles.menuButton}
        value="Online Menu"
      />
      <ScrollableContainer externalClasses={styles.cardsContainer}>
        {dishesData.map((dish) => (
          <DishCard
            key={dish.id}
            externalClasses={styles.card}
            id={dish.id}
            imageSrc={dish.imageUrl}
            name={dish.name}
            price={dish.price}
            description={dish.description}
          />
        ))}
      </ScrollableContainer>
    </section>
  );
};
