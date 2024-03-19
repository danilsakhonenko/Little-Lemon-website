import React from 'react'
import styles from './HamburgerButton.module.css'

export const HamburgerButton = ({externalClasses, onClick}) => {
    const styleClass=`${styles.hamburgerButton} ${externalClasses}`
  return (
    <button className={styleClass} onClick={onClick}/>
  )
}
