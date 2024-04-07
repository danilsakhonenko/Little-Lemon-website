import React, { useState } from "react";
import { Heading } from "../../../../atoms/Heading";
import { MultiPageContainer } from "../../../../molecules/MultiPageContainer";
import { DishCard } from "../../../../molecules/DishCard";
import { useFetching } from "../../../../../hooks/useFetching";
import { ActionButton } from "../../../../atoms/ActionButton";
import MenuService from "../../api/MenuService";
import styles from "./MenuSection.module.css";

export const MenuSection = ({ externalStyles, heading, category, button }) => {
  const styleClass = [
    styles.section,
    externalStyles.styleClass,
    "container",
  ].join(" ");
  const [dishesData, setDishesData] = useState({dishes:[], currentIndexes:[]});
  const [totalCount, setTotalCount] = useState(0);
  const [fetchDishes, isLoading, error] = useFetching(async (page, limit) => {
    if (!totalCount || dishesData.dishes.length != totalCount) {
      const response = await MenuService.getByCategory(category, page, limit);
      setDishesData({dishes: [...dishesData.dishes, ...response.data], currentIndexes: [(page - 1) * limit, page*limit]});
      setTotalCount(response.headers["x-total-count"]);
    } else {
      setDishesData({...dishesData, currentIndexes: [(page - 1) * limit, page*limit]});
    }
  });

  return (
    <section className={styleClass}>
      <Heading
        externalClasses={styles.heading}
        level={2}
        color={externalStyles.textColor}
      >
        {heading}
      </Heading>
      {button && (
        <ActionButton
          link={button.link}
          externalClasses={styles.button}
          value={button.value}
        />
      )}
      {error && (
        <Heading level={2} color={externalStyles.textColor}>
          {error}
        </Heading>
      )}
      <MultiPageContainer
        externalClasses={styles.multiPage}
        fetchDishes={fetchDishes}
        totalItems={totalCount}
      >
        {isLoading ? (
          <Heading level={2} externalClasses={styles.loading} color={externalStyles.textColor}>
            Loading...
          </Heading>
        ) : (
          dishesData.dishes.slice(dishesData.currentIndexes[0],dishesData.currentIndexes[1]).map((dish) => (
            <DishCard
              key={dish._id}
              id={dish._id}
              imageSrc={process.env.REACT_APP_BACKEND_URL + dish.image}
              name={dish.name}
              price={dish.price}
              description={dish.description}
            />
          ))
        )}
      </MultiPageContainer>
    </section>
  );
};
