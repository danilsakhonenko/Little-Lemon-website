import React from 'react'
import CartImg from '../../../assets/images/shopping-cart.png'
import styles from './CartButton.module.css'

export const CartButton = ({externalClasses, onClick}) => {
    const styleClass = `${styles.button} ${externalClasses}`
  return (
    <button className={styleClass} onClick={onClick}>
      <img className={styles.image} src={CartImg} alt='cart'></img>
    </button>
  )
}
