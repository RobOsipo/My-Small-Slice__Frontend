import React from 'react'
import Logostache from '../../icons/Logostache'
import {Link} from 'react-router-dom'
import NotesIcon from '../../icons/NotesIcon'
import PhotosIcon from '../../icons/PhotosIcon'
import GamesIcon from '../../icons/GamesIcon'

import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
    <div className={classes['flex-one']}>
      <Link to="/choose">  <Logostache width={70} height={70} customClass="black-logo" /> </Link>
      <Link className={classes.link} to="/choose">   <h1 className={classes.title}> My-Small-Slice</h1> </Link>
    </div>

    <div className={classes['flex-two']}>
      <Link className={classes.link}  to="/notes"> Notes <NotesIcon /> </Link> 
      <Link className={classes.link} to="/search-for-images">Photos <PhotosIcon /> </Link>
      <Link className={classes.link} to="/play-a-game"> Mini-Games <GamesIcon /> </Link> 
    </div>
        
    </header>
  )
}

export default Header