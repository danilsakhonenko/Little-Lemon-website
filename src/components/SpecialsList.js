import React from "react";
import DishCard from "./DishCard";
import GreekSaladImg from "../greek salad.jpg";
import BruchettaImg from "../bruchetta.png";
import LemonDessertImg from "../lemon dessert.jpg";

const SpecialsList = ({ children }) => {
  let lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris porta, magna et aliquet tempor, tortor mi iaculis enim, ac tempor ligula nulla tincidunt libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque efficitur posuere.";
  const dishesData = [
    {
      id: 1,
      name: "Greek Salad",
      description: lorem,
      price: 12.99,
      imageUrl: GreekSaladImg,
    },
    {
      id: 2,
      name: "Bruchetta",
      description: lorem,
      price: 15.99,
      imageUrl: BruchettaImg,
    },
    {
      id: 3,
      name: "Lemon Dessert",
      description: lorem,
      price: 10.99,
      imageUrl: LemonDessertImg,
    },
    {
      id: 4,
      name: "444 444",
      description: lorem,
      price: 13.99,
      imageUrl: GreekSaladImg,
    },
    {
      id: 5,
      name: "555 555",
      description: lorem,
      price: 10.0,
      imageUrl: BruchettaImg,
    },
    {
      id: 6,
      name: "666 666",
      description: lorem,
      price: 6.99,
      imageUrl: LemonDessertImg,
    },
    {
      id: 7,
      name: "777 777",
      description: lorem,
      price: 5.5,
      imageUrl: GreekSaladImg,
    },
    {
      id: 8,
      name: "888 88",
      description: lorem,
      price: 11.99,
      imageUrl: BruchettaImg,
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
