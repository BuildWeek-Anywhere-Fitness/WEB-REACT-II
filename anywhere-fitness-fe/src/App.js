import React from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from './components/Home';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Register from './components/Register';
import UpdateClassForm from './components/UpdateClassForm';
import PrivateRoute from "./components/PrivateRoute";
import { connect } from "react-redux";
import { isLoggedIn, logout } from './actions';
import Logo from './images/logo.png';
import cookie from 'react-cookies';
import AddInstructorClass from './components/AddInstructorClass';

class App extends React.Component {

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.isLoggedIn(cookie.load('instructor'))
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <nav className="nav">
            <div className="nav-links">
              <div className="home-link">
                <NavLink to="/home"><img src={Logo} alt="anyhwere-fitness-logo" /></NavLink>
              </div>
              {!this.props.loggedIn ? (
                <div className="user-links">
                  <NavLink to="/login">Login</NavLink>
                  <NavLink to="/register">Register</NavLink>
                </div>) : (
                  <div className="user-links">
                    <NavLink onClick={() => this.props.logout()} to="/login">Logout</NavLink>
                  </div>
                )}
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
            component={props => (
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

          <Route
             path="/add-class"
             render={props => (
               <AddInstructorClass
                 {...props}
               />
             )}
           />
 
          <Route
            path="/update-class-form/:id"
          path="/update-class-form"
          render={(props) => (
            <UpdateClassForm
              {...props}
            />
          )}
        />

        </div>
      </Router >

    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loginReducer.loggedIn,
  }
}

export default connect(
  mapStateToProps,
  { isLoggedIn, logout }
)(App);