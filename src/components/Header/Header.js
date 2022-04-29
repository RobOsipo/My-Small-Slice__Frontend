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
        <Logostache width={70} height={70} />
        <h1 className={classes.title}> <span className={classes['my-small-slice']}>My-Small-Slice </span><span className={classes.choices}> <Link className={classes.link}  to="/notes"> Notes <NotesIcon /> </Link>  <Link className={classes.link} to="/search-for-images">Photos <PhotosIcon /> </Link> <Link className={classes.link} to="/play-a-game"> Mini-Games <GamesIcon /> </Link> </span></h1>
        
    </header>
  )
}

export default Header