import React, {useEffect} from 'react'
import NoteContext from './note-context'

const NoteContextProvider = ({ children }) => {
const [notes, setNotes] = React.useState('')

    // TODO: Fetch Notes/Blogs data from the REST API I built as the backend and store it in the Providers value

    useEffect(() => {
        fetch('http://localhost:4000/blog')
            .then(response => response.json())
            .then(data => console.log(data))
            .then(err => console.log(err))
    }, [])

    // console.log(notes)
  return (
    <NoteContext.Provider value={notes}>
        {children}
    </NoteContext.Provider>
  )
}

export default NoteContextProvider