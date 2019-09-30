import React, { Component } from 'react';
import { connect } from "react-redux";
import { createClass } from '../actions';
import cookie from 'react-cookies';

export class AddInstructorClass extends Component {
    state = {
        singleClass: {
            name: "",
            date: "",
            time: "",
            address: "",
            city: "",
            zipcode: "",
            description: "",
            category_id: "",
            instructor_id: cookie.load('instructor')[0]['id']
        }
    }

    changeHandler = e => {
        e.persist();
        let value = e.target.value;
        if (e.target.name === "category_id") {
            value = parseInt(value, 10);
        }
        this.setState(prevState => ({
            singleClass: {
                ...prevState.singleClass,
                [e.target.name]: value,
            }
        }))
    }

    hanldeSubmit = e => {
        e.preventDefault();
        this.props.createClass(this.state.singleClass)
        this.props.history.push('/home');
        this.setState({
            singleClass: {
                name: "",
                date: "",
                time: "",
                address: "",
                city: "",
                zipcode: "",
                description: "",
                category_id: ""
            }
        })
    }

    render() {
        return (
            <div className="add-class-form">
                <form onSubmit={(e) => {
                    this.hanldeSubmit(e);
                }}>
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        placeholder="Class Name"
                        name="name"
                        value={this.state.singleClass.name}
                    />
                    <input
                        type="number"
                        onChange={this.changeHandler}
                        placeholder="Category"
                        name="category_id"
                        value={this.state.singleClass.category_id}
                    />
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        placeholder="Date"
                        name="date"
                        value={this.state.singleClass.date}
                    />
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        placeholder="Time"
                        name="time"
                        value={this.state.singleClass.time}
                    />
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        placeholder="Address"
                        name="address"
                        value={this.state.singleClass.address}
                    />
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        placeholder="City"
                        name="city"
                        value={this.state.singleClass.city}
                    />
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        placeholder="Zipcode"
                        name="zipcode"
                        value={this.state.singleClass.zipcode}
                    />
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        placeholder="Description"
                        name="description"
                        value={this.state.singleClass.description}
                    />
                    
                    <button>Add Class</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        singleClass: state.homeReducer.singleClass,
        instructor: state.loginReducer.instructor
    }
}

export default connect(
    mapStateToProps,
    { createClass }
)(AddInstructorClass)