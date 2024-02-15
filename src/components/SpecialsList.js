import React from "react";
import DishCard from "./DishCard";
import GreekSaladImg from "../images/greek salad.jpg";
import BruchettaImg from "../images/bruchetta.png";
import SalmonImg from "../images/salmon.jpg"
import CaesarSaladImg from "../images/caesar salad.jpg"
import TiramisuImg from "../images/Tiramisu.jpg"
import LemonDessertImg from "../images/lemon dessert.jpg";

const SpecialsList = () => {
  const dishesData = [
    {
      id: 1,
      name: "Greek Salad",
      description: "A refreshing medley of crisp lettuce, juicy tomatoes, cucumbers, red onions, Kalamata olives, and creamy feta cheese, drizzled with zesty lemon vinaigrette. A vibrant taste of the Mediterranean in every bite.",
      price: 12.99,
      imageUrl: GreekSaladImg,
    },
    {
      id: 2,
      name: "Bruchetta",
      description: "Crisp baguette slices topped with diced tomatoes, basil, garlic, and olive oil. A classic Italian appetizer, bursting with fresh flavors and perfect for sharing.",
      price: 15.99,
      imageUrl: BruchettaImg,
    },
    {
      id: 3,
      name: "Lemon Dessert",
      description: "Indulge in a slice of heaven with our luscious lemon cake. Moist, tangy layers infused with fresh lemon zest, topped with a delicate lemon glaze for the perfect balance of sweet and citrusy flavors.",
      price: 10.99,
      imageUrl: LemonDessertImg,
    },
    {
      id: 4,
      name: "Pan-Seared Salmon",
      description: "Savor the ocean's bounty with our succulent pan-seared salmon. Delicately seasoned and expertly seared to perfection, each bite offers a burst of rich, buttery flavor that melts in your mouth.",
      price: 14.99,
      imageUrl: SalmonImg,
    },
    {
      id: 5,
      name: "Caesar Salad",
      description: "Delight in the classic Caesar Salad, featuring crisp romaine lettuce tossed with tangy Caesar dressing, savory Parmesan cheese, crunchy croutons, and finished with a hint of zesty lemon, delivering a burst of flavor in every bite.",
      price: 12.99,
      imageUrl: CaesarSaladImg,
    },
    {
      id: 6,
      name: "Tiramisu",
      description: "Satisfy your sweet tooth with our exquisite Tiramisu, layers of ladyfinger biscuits soaked in espresso, nestled between creamy mascarpone cheese, and dusted with cocoa powder, creating a decadent dessert that's simply irresistible.",
      price: 10.99,
      imageUrl: TiramisuImg,
    },
  ];
  return (
    <>
      {dishesData.map((dish) => (
        <DishCard
          key={dish.id}
          imageSrc={dish.imageUrl}
          name={dish.name}
          price={dish.price.toFixed(2)}
          description={dish.description}
        />
      ))}
    </>
  );
};

export default SpecialsList;
