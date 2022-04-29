import React from "react";
import classes from './CreateArea.module.css'

function CreateArea(props) {
    const [note, setNote] = React.useState({
        title: "",
        content: ""
      });
    
      function handleChange(event) {
        const { name, value } = event.target;
    
        setNote(prevNote => {
          return {
            ...prevNote,
            [name]: value
          };
        });
      }
    
      function submitNote(event) {
        event.preventDefault();
        props.onAdd(note);
        setNote({
          title: "",
          content: ""
        });
        
      }
    
      return (
        <div>
          <form className={classes.form}>
            <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
              ClassName={classes.input}
            />
            <textarea
              name="content"
              onChange={handleChange}
              value={note.content}
              placeholder="Take a note..."
              rows="3"
              className={classes.textarea}
            />
            <button onClick={submitNote} classNAme={classes.button}>Add</button>
          </form>
        </div>
      );
}


export default CreateArea;