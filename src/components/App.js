import React from 'react'
import WordGame from './WordGame/WordGame'
import SimpleInput from './input/SimpleInput'
import { Switch, Route } from 'react-router-dom'
import Welcome from '../pages/Welcome/Welcome'
import SearchForImages from '../pages/SearchForImages/SearchForImages'
import Notes from '../pages/Notes/Notes'
import PlayAGame from '../pages/PlayAGame/PlayAGame'
import Login from '../pages/Login/Login'


function App() {
  return (
    <>
    
        
        <Switch>
          <Route exact path="/">
              <Welcome /> 
          </Route>
          <Route path="/login">
              <Login />
          </Route>
          <Route path="/search-for-images">
              <SearchForImages />
           </Route>
          <Route path="/notes"> 
              <Notes />
          </Route>
          <Route path="/play-a-game"> 
              <PlayAGame />
           </Route>
        </Switch>
    </>
  );
}

export default App;
