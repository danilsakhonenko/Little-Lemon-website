import React from 'react'

function DishCard(props) {
  return (
    <article className='card'>
        <img src={props.imageSrc} className='dish-image image' alt='Dish'/>
        <div className='dish-info'>
          <h3 className='title-text'>{props.name}</h3>
          <h3 className='title-text price'>${props.price}</h3>
            <p className='paragraph-text dish-description overflow-text'>{props.description}</p>
          <p className='title-text order-link'>Order a delivery</p>
        </div>
    </article>
  )
}

export default DishCard