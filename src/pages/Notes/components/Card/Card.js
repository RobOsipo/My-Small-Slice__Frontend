import React from 'react'
import classes from './Card.module.scss'

const Card = ({ children }) => {
  return (
    <section className={classes.card}>
        {children}
    </section>
  )
}

export default Card