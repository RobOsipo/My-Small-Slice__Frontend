import React, {useState, useEffect, useRef} from "react"
import useWordGame from "../../hooks/useWordGame"
import classes from './WordGame.module.css'


function WordGame() {
    const {
        textBoxRef, 
        handleChange, 
        text, 
        isTimeRunning, 
        timeRemaining, 
        startGame, 
        wordCount
    } = useWordGame(10)
    
    return (
        <div className={classes.body} >
            <h1 className={classes.title}>How fast do you type?</h1>
            <textarea
                className={classes.textarea}
                ref={textBoxRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button 
                onClick={startGame}
                disabled={isTimeRunning}
            >
                Start
            </button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}

export default WordGame