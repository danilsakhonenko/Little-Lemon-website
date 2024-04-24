import React, { useState } from "react";
import styles from "./MainTemplate.module.css";
import { Header } from "../../organisms/Header";
import { Footer } from "../../organisms/Footer";
import { CartModal } from "../../organisms/CartModal";

export const MainTemplate = ({ children }) => {
  const [modalActive, setModalActive] = useState(false);
  const toggleModal = () => {
    setModalActive(!modalActive)
  };
  return (
    <>
      <Header toggleModal={toggleModal} />
      <CartModal active={modalActive} setActive={setModalActive} />
      <main>
        {React.Children.map(children, (child, index) => {
          const textColor = index % 2 === 0 ? "white" : "black";
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              externalStyles: {
                styleClass: styles.childBackground,
                textColor: textColor,
              },
            });
          }
          return child;
        })}
      </main>
      <Footer />
    </>
  );
};
