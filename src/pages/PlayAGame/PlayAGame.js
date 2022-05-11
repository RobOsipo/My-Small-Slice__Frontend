import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import WordGame from './components/WordGame/WordGame'
import RpsContextProvider from '../../context/rps-context/RpsContextProvider'
import RpsGame from './components/RpsGame/RpsGame'
import Tenzies from './components/Tenzies/Tenzies'
import Game from './components/TicTacToe/Game' // tic-tac-toe import
import retroImage from '../../localImages/retro2.jpg'

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

    {/* <div className={classes['retro-button-container']}>
      <span className={classes['retro-buttons']}>A</span>
      <span className={classes['retro-buttons']}>B</span>
    </div>

    <img src={retroImage} alt="anything" className={classes['retro-image']} /> */}


      <section className={classes['game-container']}>

      <div className={classes['retro-button-container']}>
      <span className={classes['retro-buttons']}>A</span>
      <span className={classes['retro-buttons']}>B</span>
    </div>

    <img src={retroImage} alt="anything" className={classes['retro-image']} />

        <h1 className={classes.title}>A List of Mini-Games Coded from Scratch For Your Entertainment</h1>

        <button onClick={toggleSpeedTypeGame} className={classes['start-btn']}>{!speedType ? 'Play' : 'Close'} The Speed Typing Game</button>
        
        {speedType && <WordGame />}

        <button onClick={toggleRps} className={classes['start-btn']}>{!speedType ? 'Play' : 'Close'} Rock Paper Scissors</button>
        
        {playRps && <RpsContextProvider setRpsChoice={setRpsChoice} choice={rpsChoice}> <RpsGame setRpsChoice={setRpsChoice} /> </RpsContextProvider>}

        <button onClick={toggleTenzies} className={classes['start-btn']}>{!speedType ? 'Play' : 'Close'} Tenzies</button>
       
        {playTenzies && <Tenzies />}

        <button onClick={toggleTTT} className={classes['start-btn']}>{!speedType ? 'Play' : 'Close'} 2 Player Tic-Tac-Toe</button>
        
          { playTTT && <Game /> }
      </section>

     


    </section>
  )
}

export default PlayAGame