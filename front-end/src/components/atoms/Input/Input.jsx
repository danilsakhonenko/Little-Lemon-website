import React from 'react'
import styles from './Input.module.css'

export const Input = ({externalClasses, ...props}) => {
  const styleClass = `${styles.input} ${externalClasses}`
  return (
    <input
        className={styleClass}
        {...props}
      />
  )
}
