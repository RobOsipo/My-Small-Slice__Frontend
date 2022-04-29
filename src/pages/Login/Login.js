import React from 'react'
import SimpleInput from '../../components/input/SimpleInput'

import classes from './Login.module.css'
const Login = () => {
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
        <main className={classes['main-container']}>
            
        <div className={classes['input-container']}>   <SimpleInput buttonText="Login" linkTo="/choose" /> </div>
            
        </main>
      </div>
  )
}

export default Login