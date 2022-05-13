import React from "react"
import classes from './Die.module.scss'

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div 
            className={classes['die-face']} 
            style={styles}
            onClick={props.holdDice}
        >
            <h2 className={classes['die-num']}>{props.value}</h2>
        </div>
    )
}