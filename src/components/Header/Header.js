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
        <h1 className={classes.title}><span className={classes['my-small-slice']}>My-Small-Slice </span><span className={classes.choices}> Notes <NotesIcon /> Photos <PhotosIcon /> Mini-Games <GamesIcon /> </span></h1>
        {/* <nav>
            <ul className={classes['link-container']}>
                <li>My Notes </li>
                <li>Search Photos </li>
                <li>Play mini-games</li>
            </ul>
        </nav> */}
    </header>
  )
}

export default Header