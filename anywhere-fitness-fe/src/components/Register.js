import React, { Component } from 'react'
import Loader from "react-loader-spinner";
import { connect } from 'react-redux';
import { register } from '../actions'

export class Register extends Component {
    state = {
        credentials: {
            username: "",
            password: "",
            instructor: true
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };


    register = e => {
        e.preventDefault();
        this.props
            .register(this.state.credentials)
            .then(res => {
                if (res) {
                    this.props.history.push("./login");
                }
            });
    };

    render() {
        return (
            <div className="register">
                Register Page
                <form className="register-form" onSubmit={this.register}>
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

                    <input 
                        type="checkbox" 
                        name="instructor"
                        placeholder="Instructor" 
                        onChange={this.state.onCheckboxChange} 
                        value={this.state.instructor} 
                    /> <p2>Check box above if you are an Instructor!</p2>
                
                    <button>
                        {this.props.registering ? (
                            <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
                        ) : (
                                "Register"
                            )}
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.registerReducer.error,
        creatingUser: state.registerReducer.creatingUser
    };
};

export default connect(
    mapStateToProps,
    { register }
)(Register);