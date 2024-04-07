import React from 'react'
import styles from './DishCard.module.css'

function DishCard(props) {
  return (
    <article className='card'>
        <img src={props.imageSrc} className={styles.image} alt={`Dish: ${props.name}`}/>
        <div className={styles.info}>
          <h3 className='title-text'>{props.name}</h3>
          <h3 className={`${styles.price} title-text`}>${props.price}</h3>
            <p className={`${styles.description} paragraph-text overflow-text`}>{props.description}</p>
          <p className={`${styles.orderLink} title-text`}>Order a delivery</p>
        </div>
    </article>
  )
}

export default DishCard