import React from 'react'
import styles from './MainTemplate.module.css'
import {Header} from '../../organisms/Header'
import {Footer} from '../../organisms/Footer'

export const MainTemplate = ({children}) => {
  return (
    <div className={styles.template}>
        <Header/>
        <main className={styles.main}>{children}</main>
        <Footer/>
    </div>
  )
}
