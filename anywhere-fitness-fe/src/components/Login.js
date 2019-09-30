import React, { Component } from 'react'
import Loader from "react-loader-spinner";
import { connect } from 'react-redux';
import { login } from '../actions';

export class Login extends Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        this.props
            .login(this.state.credentials)
            .then(res => {
                if (res) {
                    this.props.history.push('./home');
                }
            })
    }

    render() {
        return (
            <div className="login">
                Login Page
                <form className="login-form" onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>
                        {this.props.loggingIn ? (
                             <Loader type="TailSpin" color="#ffffff" height="26" width="26" />
                        ) : (
                                "Login"
                            )}
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        error: state.loginReducer.error,
        loggingIn: state.loginReducer.loggingIn,
    }
}

export default connect(
    mapStateToProps,
    { login }
)(Login)