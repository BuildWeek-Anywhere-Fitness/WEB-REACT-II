import React from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from './components/Home';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav">
          <div className="nav-links">
            <div className="home-link">
              <NavLink to="/home">Anywhere Fitness</NavLink>
            </div>
            <div className="user-links">
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </div>
          </div>
        </nav>

        <Route
          exact
          path="/"
          render={props => (
            <Welcome
              {...props}
            />
          )}
        />

        <PrivateRoute
          exact
          path="/home"
          render={props => (
            <Home
              {...props}
            />
          )} />

        <Route
          path="/register"
          render={props => (
            <Register
              {...props}
            />
          )} />

        <Route
          path="/login"
          render={props => (
            <Login
              {...props}
            />
          )} />
      </div>
    </Router>

  );
}

export default App;