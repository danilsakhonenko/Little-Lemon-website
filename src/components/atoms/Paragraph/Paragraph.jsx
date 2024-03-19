import React from 'react'
import styles from './Paragraph.module.css'

export const Paragraph = ({children, externalClasses}) => {
  const styleClass = `${styles.paragraph} ${externalClasses}`;
  return (
    <p className={styleClass}>{children}</p>
  )
}
