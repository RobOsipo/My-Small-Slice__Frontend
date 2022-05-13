import React from "react";
import classes from './CreateArea.module.scss'

function CreateArea({ note, handleChange, submitNote}) {
   
    
      return (
        <div>
          <form className={classes.form}>
            <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
              
            />
            <textarea
              name="content"
              onChange={handleChange}
              value={note.content}
              placeholder="Take a note..."
              rows="3"
              
            />
            <button className={classes.button} onClick={submitNote}>Add</button>
          </form>
        </div>
      );
}


export default CreateArea;