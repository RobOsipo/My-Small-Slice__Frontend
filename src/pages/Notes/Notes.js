import React from 'react'
import Header from '../../components/Header/Header'
import Card from './components/Card/Card'

import CreateArea from './components/CreateArea/CreateArea'

import classes from './Notes.module.css'

const Notes = () => {
    const [notes, setNotes] = React.useState(['my first note', 'Something about programming', 'Remember to go shopping']);

    function addNote(newNote) {
      setNotes(prevNotes => {
        return [...prevNotes, newNote];
      });
    }
  return (
      <>
        <Header />
        <section className={classes['main-container']}>
            <h1 className={classes.title}>Take A Note, Take A Load Off</h1>
                <CreateArea />
            <section className={classes['note-container']}>
                
            </section>
        </section>

      </>
  )
}

export default Notes