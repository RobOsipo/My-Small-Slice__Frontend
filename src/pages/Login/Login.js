import React from 'react'
import SimpleInput from '../../components/input/SimpleInput'
import FormCard from '../../components/FormCard/FormCard'

import classes from './Login.module.css'
const Login = () => {
  return (
      <div className={classes.area}>
       <ul className={classes.circles}>
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
                    <li></li>
            </ul>
        <main className={classes['main-container']}>
            
        <div className={classes['input-container']}> <FormCard>  <SimpleInput buttonText="Login" replaceTo="/choose" formEndPoint="/login" tokenName="loginToken" linkTo="/" linkText="Need To Register" /> </FormCard> </div>
            
        </main>
      </div>
  )
}

export default Login