import React from 'react'
import SimpleInput from '../../components/input/SimpleInput'
import Hello from './components/Hello'

import classes from './Welcome.module.css'
const Welcome = () => {
  return (
    <main className={classes['main-container']}>
        <Hello />
        <SimpleInput buttonText="Register" linkTo="/login" />
        
    </main>
  )
}

export default Welcome