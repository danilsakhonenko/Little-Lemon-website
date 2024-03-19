import React from 'react'
import styles from './PriceTag.module.css'

export const PriceTag = ({children, externalClasses}) => {
  const styleClass = `${styles.price} ${externalClasses}`
  return (
    <h3 className={styleClass}>{children}$</h3>
  )
}
