import React from 'react'
import { Image } from '../../../atoms/Image'
import { Title } from '../../../atoms/Title'
import { PriceTag } from '../../../atoms/PriceTag'
import styles from './CartItem.module.css'

export const CartItem = ({externalClasses}) => {
  const styleClass = [styles.cartItem, externalClasses].join(' ')
  return (
    <div className={styleClass}>
        <Image externalClasses={styles.image}></Image>
        <Title>Tiramisu</Title>
        <PriceTag>14</PriceTag>
    </div>
  )
}
