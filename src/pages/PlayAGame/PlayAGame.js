import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import WordGame from './components/WordGame/WordGame'
import RpsContextProvider from '../../context/rps-context/RpsContextProvider'
import RpsGame from './components/RpsGame/RpsGame'
import Tenzies from './components/Tenzies/Tenzies'
import Game from './components/TicTacToe/Game' // tic-tac-toe import

import classes from './PlayAGame.module.css'
const PlayAGame = () => {
  const [speedType, setSpeedType] = useState(false)
  const [playRps, setPlayRps] = useState(false)
  const [playTenzies, setPlayTenzies] = useState(false)
  const [playTTT, setPlayTTT] = useState(false)
  const [rpsChoice, setRpsChoice] = useState('')


  const toggleSpeedTypeGame = () => {
    setSpeedType(prevState => !prevState)
    setPlayRps(false)
    setPlayTenzies(false)
    setPlayTTT(false)
  }

  const toggleRps = () => {
    setPlayRps(prevState => !prevState)
    setPlayTenzies(false)
    setSpeedType(false)
    setPlayTTT(false)
  }

  const toggleTenzies = () => {
    setPlayTenzies(prevState => !prevState)
    setPlayRps(false)
    setSpeedType(false)
    setPlayTTT(false)
  }

  const toggleTTT = () => {
    setPlayTTT(prevState => !prevState)
    setPlayRps(false)
    setSpeedType(false)
    setPlayTenzies(false)
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


        <button onClick={toggleTenzies} className={classes.pushable}><span className={classes.front}>{!playTenzies ? 'Play' : 'Close'} Tenzies </span></button>
        {playTenzies && <Tenzies />}

        <button onClick={toggleTTT} className={classes.pushable}><span className={classes.front}>{!playTTT ? 'Play' : 'Close'} 2 player Tic-Tac-Toe </span></button>
          { playTTT && <Game /> }
      </section>

     


    </section>
  )
}

export default PlayAGame