import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import WordGame from '../../components/WordGame/WordGame'

import classes from './PlayAGame.module.css'
const PlayAGame = () => {
  const [speedType, setSpeedType] = useState(false)

  const toggleSpeedTypeGame = () => {
    setSpeedType(prevState => !prevState)
  }

  return (
    <section className={classes['main-container']}>
    <Header />
    
      <section className={classes['game-container']}>
        <h1 className={classes.title}>A List of Mini-Games Coded from Scratch For Your Entertainment</h1>
        <button onClick={toggleSpeedTypeGame} className={classes.pushable}><span className={classes.front}>{!speedType ? 'Play' : 'Stop'} The Speed Typing Game</span></button>
        {speedType && <WordGame />}
      </section>


    </section>
  )
}

export default PlayAGame