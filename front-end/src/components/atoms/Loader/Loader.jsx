import React from 'react'
import LoaderImg from '../../../assets/images/logo.png'
import styles from './Loader.module.css'

export const Loader = () => {
  return (
    <div className={styles.loader}>
        <img src={LoaderImg}/>
    </div>
    
  )
}
