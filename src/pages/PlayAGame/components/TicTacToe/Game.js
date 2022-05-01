import React, { useState } from 'react';
import { calculateWinner } from './helpers';
import Board from './Board';

import classes from './Game.module.css'

const styles = {
    width: '200px',
    margin: '20px auto',
};

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = i => {
        const boardCopy = [...board];
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    const playComputer = () => {
        // TODO: implement a feature where the computer plays you
    }

    const renderMoves = () => (
        <button className={classes.button} onClick={() => setBoard(Array(9).fill(null))}>
            Reset Game
        </button>
    )

    return (
        <section className={classes['game-background']}>
        
            <Board squares={board} onClick={handleClick} />
            <div style={styles}>
                <p>Click any square to begin a players turn!</p>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </section>
    )
}

export default Game;