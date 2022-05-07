import React, {useEffect} from 'react'
import NoteContext from './note-context'

const NoteContextProvider = ({ children }) => {
const [notes, setNotes] = React.useState('')

    useEffect(() => {
        fetch('http://localhost:4000/blog')
            .then(response => response.json())
            .then(data =>  setNotes(data))
            .then(err => console.log('errors', err))
    }, [])

    
  return (
    <NoteContext.Provider value={notes}>
        {children}
    </NoteContext.Provider>
  )
}

export default NoteContextProvider