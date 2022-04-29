import React from 'react'
import Header from '../../components/Header/Header'
import {Link} from 'react-router-dom'

import classes from './Choose.module.css'

const Choose = () => {
  return (
    <section className={classes['main-container']}>
        <Header />

        <section className={classes['choice-container']}>
           <Link className={classes.link} to="/notes"> <div className={`${classes.box} ${classes.one}`}>I Want To Take Some Notes!</div> </Link>
           <Link className={classes.link} to="/search-for-images"> <div className={`${classes.box} ${classes.two}`}>Let's Search Some Photos!</div></Link>
           <Link className={classes.link} to="/play-a-game"> <div className={`${classes.box} ${classes.three}`}>Let's Check Out the Mini Games!</div></Link>
        </section>
    </section>
  )
}

export default Choose