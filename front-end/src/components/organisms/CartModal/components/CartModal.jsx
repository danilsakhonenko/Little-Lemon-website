import React from 'react'
import styles from './CartModal.module.css'
import { Heading } from '../../../atoms/Heading'
import { ActionButton } from '../../../atoms/ActionButton'
import { CartItem } from '../../../molecules/CartItem'

export const CartModal = ({active, setActive}) => {
  return (
    <div className={[styles.modal, active? styles.active: ''].join(' ')} onClick={()=>setActive(false)}>
        <div className={[styles.modalContent, active? styles.active: ''].join(' ')} onClick={e=>e.stopPropagation()}>
            <Heading externalClasses={styles.heading} level={2}>Your Cart</Heading>
            <Heading level={3}>Items list:</Heading>
            <div className={styles.list}>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>
            <Heading level={3}>Total:</Heading>
            <ActionButton externalClasses={styles.orderButton} link={'/order'} value={'Order Now'}/>
        </div>
    </div>
  )
}