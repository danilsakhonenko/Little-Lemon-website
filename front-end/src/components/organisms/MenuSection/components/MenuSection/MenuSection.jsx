import React, { useState } from "react";
import { Heading } from "../../../../atoms/Heading";
import { MultiPageContainer } from "../../../../molecules/MultiPageContainer";
import { DishCard } from "../../../../molecules/DishCard";
import { useFetching } from "../../../../../hooks/useFetching";
import { ActionButton } from "../../../../atoms/ActionButton";
import MenuService from "../../api/MenuService";
import styles from "./MenuSection.module.css";
import { Loader } from "../../../../atoms/Loader";

export const MenuSection = ({ externalStyles, heading, category, button }) => {
  const styleClass = [
    styles.section,
    externalStyles.styleClass,
    "container",
  ].join(" ");
  const [dishesData, setDishesData] = useState({dishes:[], currentIndexes:[]});
  const [totalCount, setTotalCount] = useState(0);
  const [fetchDishes, isLoading, error] = useFetching(async (page, limit) => {
    const indexes= [(page - 1) * limit, page*limit]
    if (!totalCount || dishesData.dishes.length != totalCount) {
      const response = await MenuService.getByCategory(category, page, limit);
      setDishesData({dishes: [...dishesData.dishes, ...response.data], currentIndexes: indexes});
      setTotalCount(response.headers["x-total-count"]);
    } else {
      setDishesData({...dishesData, currentIndexes: indexes});
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
      <MultiPageContainer
        externalClasses={styles.multiPage}
        fetchDishes={fetchDishes}
        totalItems={totalCount}
        error={error}
      >
        {isLoading ? (
          <Loader/>
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
