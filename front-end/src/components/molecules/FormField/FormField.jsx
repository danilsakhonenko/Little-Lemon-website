import React from 'react'
import Label from '../../atoms/Label'
import Input from '../../atoms/Input'
import ErrorTag from '../../atoms/ErrorTag'
import styles from './InputField.module.css'

export const FormField= ({externalClasses, error_id, label}) => {
  const styleClass = `${styles.field} ${externalClasses}`
  return (
    <div className={styles.field}>
      <Label htmlFor={props.id}>{label}</Label>
      {children}
      <ErrorTag id={error_id}/>
    </div>
  )
}
