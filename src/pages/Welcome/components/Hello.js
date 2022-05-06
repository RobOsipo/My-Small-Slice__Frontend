import React from 'react'
import Logostache from '../../../icons/Logostache'
import classes from './Hello.module.css'
const Hello = () => {
  return (
    <div className={classes['hello-container']}>
        <div className={classes.display}>
            {/* <h1 className={classes.title}>A-Small-Slice</h1> */}
         <div className={classes['bump-in']}> <Logostache width={300} height={300} customClass="white-logo" /> </div> 


        </div>

        
    </div>
  )
}

export default Hello