import React from 'react'
import Logostache from '../../icons/Logostache'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Logostache />
        <h1>Small <span>Notes Photos Mini-Games</span></h1>
        <nav>
            <ul>
                <li>My Notes</li>
                <li>Search Photos</li>
                <li>Play mini-games</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header