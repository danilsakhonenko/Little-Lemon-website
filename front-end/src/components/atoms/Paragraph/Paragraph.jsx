import React from 'react'
import styles from './Paragraph.module.css'

export const Paragraph = ({children, type, color, externalClasses}) => {
  const styleClass = `${styles.paragraph} ${styles[type]} ${styles[color]} ${externalClasses}`;
  return (
    <p className={styleClass} style={{color:color}}>{children}</p>
  )
}
