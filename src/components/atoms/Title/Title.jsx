import React from 'react'
import styles from './Title.module.css'

export const Title = ({externalClasses, children}) => {
  const styleClass = `${styles.title} ${externalClasses}`
  return (
    <h3 className={styleClass}>{children}</h3>
  )
}
