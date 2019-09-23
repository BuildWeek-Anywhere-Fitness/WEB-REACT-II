import React from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/home">Anywhere Fitness</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
        <PrivateRoute exact path="/home" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </div>
    </Router>

  );
}

export default App;