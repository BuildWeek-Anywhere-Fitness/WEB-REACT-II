import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateClass, deleteClass } from '../actions';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export class UpdateClassForm extends Component {
    state = {
        singleClass: {
            name: "",
            date: "",
            time: "",
            address: "",
            city: "",
            zipcode: "",
            description: ""
        }
    }

    componentDidMount() {
        axiosWithAuth()
            .get(`https://anywhere-health.herokuapp.com/api/classes/${this.props.match.params.id}`)
            .then(res => {
                this.setState({ singleClass: res.data })
            })
    }

    changeHandler = e => {
        e.persist();
        this.setState(prevState => ({
            singleClass: {
                ...prevState.singleClass,
                [e.target.name]: e.target.value,
            }
        }))
    };

    render() {
        return (
            <div className="update-class-form">
                <form>
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        placeholder="Class Name"
                        value={this.state.singleClass.name}
                        name="name"
                    />
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        placeholder="Date"
                        value={this.state.singleClass.date}
                        name="date"
                    />
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        placeholder="Time"
                        value={this.state.singleClass.time}
                        name="time"
                    />
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        placeholder="Address"
                        value={this.state.singleClass.address}
                        name="address"
                    />
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        placeholder="City"
                        value={this.state.singleClass.city}
                        name="city"
                    />
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        placeholder="Zipcode"
                        value={this.state.singleClass.zipcode}
                        name="zipcode"
                    />
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        placeholder="Description"
                        value={this.state.singleClass.description}
                        name="description"
                    />
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            this.props.updateClass(this.state.singleClass.id, this.state.singleClass);
                            this.props.history.push('/home');
                        }}
                    >Update</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        this.props.deleteClass(this.state.singleClass.id, this.state.singleClass)
                        this.props.history.push('/home');
                    }}>Delete</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        singleClass: state.homeReducer.singleClass
    }
}

export default connect(
    mapStateToProps,
    {
        updateClass,
        deleteClass
    }
)(UpdateClassForm)