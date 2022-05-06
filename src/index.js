import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import NoteContextProvider from './context/note-context/NoteContextProvider'

import App from './components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
 <NoteContextProvider>
    <App />

 </NoteContextProvider>


</BrowserRouter>
 
);


