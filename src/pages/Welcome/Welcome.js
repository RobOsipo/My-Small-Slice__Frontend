import React from 'react'
import SimpleInput from '../../components/input/SimpleInput'
import Hello from './components/Hello'

import classes from './Welcome.module.css'
const Welcome = () => {
  return (
      <div className={classes.area}>

            <ul class={classes.circles}>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                        </ul>

        <main className={`${classes['main-container']}`}>
            <Hello />
            <SimpleInput buttonText="Register" linkTo="/login" />
            
        </main>
      </div>
  )
}

export default Welcome