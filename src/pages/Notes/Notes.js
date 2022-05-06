import React, {useContext} from 'react'
import Header from '../../components/Header/Header'
import Card from './components/Card/Card'
import SingleNote from './components/SingleNote/SingleNote'
import CreateArea from './components/CreateArea/CreateArea'
import NoteContext from '../../context/note-context/note-context'


import classes from './Notes.module.css'

const Notes = ({note, setNote}) => {

    const [notes, setNotes] = React.useState([{title: 'DUMMY', content: 'React is fun!'}, {title: 'DUMMY', content: 'Bacon & Eggs'}]);
  
    const fetchNoteContext = useContext(NoteContext) || notes
    console.log('fetch ctx', fetchNoteContext)


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
        // addNote(note);

        fetch("http://localhost:4000/blog", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                post_title: note.title,
                post_body: note.content
            })
            })
            .then( (response) => { 
             console.log('response', response)
            })
            .catch(err => console.log('.catch', err))


        setNote({
          title: "",
          content: ""
        });
      }


     

      // todo: map over note context instead
  
      const renderNotes = fetchNoteContext.map((note, index) => {
          return (
              <SingleNote id={index} deleteNote={deleteNote} title={note.post_title} content={note.post_body} key={index} />
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