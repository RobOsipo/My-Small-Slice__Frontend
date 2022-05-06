import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Welcome from '../pages/Welcome/Welcome'
import SearchForImages from '../pages/SearchForImages/SearchForImages'
import Notes from '../pages/Notes/Notes'
import PlayAGame from '../pages/PlayAGame/PlayAGame'
import Login from '../pages/Login/Login'
import Choose from '../pages/Choose/Choose'

import cookie from 'cookie'
import './App.css'

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie)
  return cookies["loginToken"] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
    <Route 
      {...rest}
      render={(props) => checkAuth()
      ? <Component {...props} />
      : <Redirect to="/login" />
      }
    />
  )
}

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

          <ProtectedRoute path="/choose" component={Choose} />
  
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
