import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import DeleteFriend from "./components/DeleteFriend";
import ProtectedRoute from "./components/ProtectedRoute";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
        <NavLink to="/">
            <h3>Home</h3>
          </NavLink>
          <NavLink to="/login">
            <h3>Log In</h3>
          </NavLink>
          <NavLink to="/friends">
            <h3>Friends</h3>
          </NavLink>
          <NavLink to="/add-friends">
            <h3>Add Friends</h3>
          </NavLink>
          <NavLink to="/delete-friends">
            <h3>Delete Friends</h3>
          </NavLink>
        </nav>

        <Switch>
          <Route path="/login" component={Login}/>
          <ProtectedRoute exact path="/friends" component={FriendsList}/>
          <ProtectedRoute exact path="/add-friends" component={AddFriend}/>
          <ProtectedRoute exact path="/delete-friends" component={DeleteFriend}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
