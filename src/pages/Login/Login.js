import React from 'react'
import SimpleInput from '../../components/input/SimpleInput'

import classes from './Login.module.css'
const Login = () => {
  return (
    <main className={classes['main-container']}>
        
     <div className={classes['input-container']}>   <SimpleInput buttonText="Login" linkTo="/choose" /> </div>
        
    </main>
  )
}

export default Login