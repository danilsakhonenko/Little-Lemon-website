import React, { useEffect, useState, useMemo } from "react";
import styles from "./MultiPageContainer.module.css";
import { getPageCount, getPagesArray } from "../utils/pages";
import { ErrorTag } from "../../../atoms/ErrorTag";
import nextImg from "../../../../assets/images/next.png";
import prevImg from "../../../../assets/images/prev.png";

export const MultiPageContainer = ({
  externalClasses,
  children,
  fetchDishes,
  totalItems,
  error,
}) => {
  const styleClass = [styles.section, externalClasses].join(" ");
  const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (fetchDishes) {
      async function fetchData() {
        await fetchDishes(page, limit);
      }
      fetchData();
    }
  }, [page]);

  const nextPage = () => {
    setPage((prev) => (prev === totalPages ? prev : prev + 1));
  };
  const previousPage = () => {
    setPage((prev) => (prev < 2 ? prev : prev - 1));
  };
  useEffect(() => {
    if (totalItems) {
      setTotalPages(getPageCount(totalItems, limit));
    }
  }, [totalItems]);

  let pagesArray = useMemo(() => {
    return getPagesArray(totalPages);
  }, [totalPages]);
  return (
    <section className={styleClass}>
      {error && <ErrorTag>{error}</ErrorTag>}
      <div className={styles.cardsContainer}>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { externalClasses: styles.card });
        })}
      </div>
      {totalPages > 1 && (
        <div className={styles.controlsContainer}>
          <img
            role="button"
            onClick={previousPage}
            className={styles.controls}
            src={prevImg}
            alt="previous"
          />
          {pagesArray.map((p) => (
            <span
              className={[
                styles.pageSign,
                p === page ? styles.current : "",
              ].join(" ")}
              key={p}
            >
              ●
            </span>
          ))}
          <img
            role="button"
            onClick={nextPage}
            className={styles.controls}
            src={nextImg}
            alt="next"
          />
        </div>
      )}
    </section>
  );
};
