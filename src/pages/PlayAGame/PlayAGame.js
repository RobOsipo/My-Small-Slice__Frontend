import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import WordGame from '../../components/WordGame/WordGame'
import RpsContextProvider from '../../context/rps-context/RpsContextProvider'
import RpsGame from './components/RpsGame/RpsGame'

import classes from './PlayAGame.module.css'
const PlayAGame = () => {
  const [speedType, setSpeedType] = useState(false)
  const [playRps, setPlayRps] = useState(false)
  const [rpsChoice, setRpsChoice] = useState('')


  const toggleSpeedTypeGame = () => {
    setSpeedType(prevState => !prevState)
  }

  const toggleRps = () => {
    setPlayRps(prevState => !prevState)
  }

  return (
    <section className={`${classes['main-container']}`}>
    <Header />

      <section className={classes['game-container']}>
        <h1 className={classes.title}>A List of Mini-Games Coded from Scratch For Your Entertainment</h1>

        <button onClick={toggleSpeedTypeGame} className={classes.pushable}><span className={classes.front}>{!speedType ? 'Play' : 'Close'} The Speed Typing Game</span></button>
        {speedType && <WordGame />}

        <button onClick={toggleRps} className={classes.pushable}><span className={classes.front}>{!playRps ? 'Play' : 'Close'} Rock Paper Scissors </span></button>
        {playRps && <RpsContextProvider setRpsChoice={setRpsChoice} choice={rpsChoice}> <RpsGame setRpsChoice={setRpsChoice} /> </RpsContextProvider>}

      </section>

     


    </section>
  )
}

export default PlayAGame