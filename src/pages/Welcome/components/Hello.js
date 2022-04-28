import React from 'react'
import Logostache from '../../../icons/Logostache'
import classes from './Hello.module.css'
const Hello = () => {
  return (
    <div className={classes['hello-container']}>
       <div className={classes['pop-in']}> <Logostache width={300} height={300} /> </div>
        <section className={`${classes['fade-in']} `}>
            <h2>Welcome To Small</h2>
            <p>A place for your Notes</p>
            <p>A quick search for photos</p>
            <p>A growing list of mini-games</p>
        </section>
    </div>
  )
}

export default Hello