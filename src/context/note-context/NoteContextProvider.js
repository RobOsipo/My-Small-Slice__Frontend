import React from 'react'
import NoteContext from './note-context'

const NoteContextProvider = ({ children }) => {


    // TODO: Fetch Notes/Blogs data from the REST API I built as the backend and store it in the Providers value


  return (
    <NoteContext.Provider value="">
        {children}
    </NoteContext.Provider>
  )
}

export default NoteContextProvider