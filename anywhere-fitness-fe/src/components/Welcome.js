import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Welcome extends Component {
    render() {
        return (
            <div className="welcome">
                <div className="welcome-header">
                    <h1> Welcome to Anywhere Fitness!</h1>
                    <div className="welcome-links">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome