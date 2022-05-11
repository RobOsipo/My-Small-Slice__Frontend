import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Welcome from "../pages/Welcome/Welcome";
import SearchForImages from "../pages/SearchForImages/SearchForImages";
import Notes from "../pages/Notes/Notes";
import PlayAGame from "../pages/PlayAGame/PlayAGame";
import Login from "../pages/Login/Login";
import Choose from "../pages/Choose/Choose";
import NoteContextProvider from "../context/note-context/NoteContextProvider";

import cookie from "cookie";
import "./App.css";

export const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loginToken"] ? true : false;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

function App() {
  const [note, setNote] = React.useState({
    title: "",
    content: "",
  });

  return (
    <NoteContextProvider note={note}>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/login">
          <Login />
        </Route>

        <ProtectedRoute path="/choose" component={Choose} />

        <ProtectedRoute path="/search-for-images" component={SearchForImages} />

        <ProtectedRoute path="/play-a-game" component={PlayAGame} />

        <Route path="/notes">
          <NoteContextProvider note={note}>
            <Notes note={note} setNote={setNote} />
          </NoteContextProvider>
        </Route>
      </Switch>
    </NoteContextProvider>
  );
}

export default App;
