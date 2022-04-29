import React from 'react'
import Header from '../../components/Header/Header'
import Card from './components/Card/Card'
import SingleNote from './components/SingleNote/SingleNote'
import CreateArea from './components/CreateArea/CreateArea'

import classes from './Notes.module.css'

const Notes = () => {
    const [notes, setNotes] = React.useState([{title: 'A day of code', content: 'React is fun!'}, {title: 'Grocery List', content: 'Bacon & Eggs'}]);
    const [note, setNote] = React.useState({
        title: "",
        content: ""
      });

    const addNote = (newNote) => {
      setNotes(prevNotes => {
        return [...prevNotes, newNote];
      });
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
          return prevNotes.filter((noteItem, index) => {
            return index !== id;
          });
        });
      }

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setNote(prevNote => {
          return {
            ...prevNote,
            [name]: value
          };
        });
      }


      const submitNote = (event) => {
        event.preventDefault();
        addNote(note);
        setNote({
          title: "",
          content: ""
        });
      }

      const renderNotes = notes.map((note, index) => {
          return (
              <SingleNote id={index} deleteNote={deleteNote} title={note.title} content={note.content} key={index} />
          )
      })



  return (
      <>
        <Header />
        <section className={classes['main-container']}>
            <h1 className={classes.title}>My Notes</h1>
                <CreateArea note={note} handleChange={handleChange} submitNote={submitNote} />
           
        </section>

        <section className={classes['note-container']}>
                {renderNotes.length === 0 ? <h1>No Notes To Display</h1> : renderNotes}
            </section>

      </>
  )
}

export default Notes