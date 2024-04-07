import React from 'react'
import styles from './Label.module.css'

export const Label = ({externalClasses, children, htmlFor}) => {
  const styleClasses = `${styles.label} ${externalClasses}`
  return (
    <label className={styleClasses} htmlFor={htmlFor}>
        {children}
      </label>
  )
}
