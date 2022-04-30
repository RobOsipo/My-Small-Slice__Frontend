import React, { useContext } from 'react'
import classes from './RpsGame.module.css'
import RpsContext from '../../../../context/rps-context/RpsContext'

const RpsGame = ({ setRpsChoice }) => {

    const fetchRpsContext = useContext(RpsContext)
    const { you, computer, cstat, pstat } = fetchRpsContext
    console.log('rps', you)

    const chooseRock = () => {
        setRpsChoice('rock')
    }

    const choosePaper = () => {
        setRpsChoice('paper')
    }

    const chooseScissors = () => {
        setRpsChoice('scissor')
    }
 


  return (
    <section className={classes['main-container']}>
        <h1>Choose your hand!</h1>
        <h2>Players Hand: {you} </h2>
        <h2>Computers Hand: {computer}</h2>
        <p> {cstat} {pstat} </p>
        <div className={classes['choice-container']}>
            <button onClick={chooseRock}>Rock</button>
            <button onClick={choosePaper}>Paper</button>
            <button onClick={chooseScissors}>Scissors</button>
        </div>
    </section>
  )
}

export default RpsGame