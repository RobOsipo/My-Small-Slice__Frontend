import React from 'react'
import Card from '../Card/Card'
import classes from './SingleNote.module.css'

const SingleNote = ({ title, content, deleteNote, id }) => {
  return (
    <Card>
        <h1 className={classes['font-large']}>{title}</h1>
        <p className={classes['font-small']}>{content}</p>
        <button className={classes.button} onClick={() => deleteNote(id)}>Delete</button>
    </Card>
  )
}

export default SingleNote