import React from 'react'
import classes from './FormCard.module.css'

const FormCard = ({ children }) => {
  return (
    <section className={classes['form-card']}>
        {children}
    </section>
  )
}

export default FormCard