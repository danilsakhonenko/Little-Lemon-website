import React from "react";
import styles from "./MainTemplate.module.css";
import { Header } from "../../organisms/Header";
import { Footer } from "../../organisms/Footer";
import { CartModal } from "../../organisms/CartModal";

export const MainTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <CartModal/>
      <main>
        {React.Children.map(children, (child,index) => {
          const textColor = index % 2 === 0 ? 'white' : 'black';
          if (React.isValidElement(child)) {
            return (
                React.cloneElement(child, { externalStyles:{styleClass: styles.childBackground, textColor:textColor}})
            );
          }
          return child;
        })}
      </main>
      <Footer />
    </>
  );
};
