import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllClassesByInstructor, getClassByInstructor } from '../actions';
import cookie from 'react-cookies';
import InstructorClass from './InstructorClass';
import { Link } from 'react-router-dom';

export class Home extends Component {

    componentDidMount() {
        this.props.getAllClassesByInstructor(cookie.load('instructor')[0]['id'])
    }

    render() {
        return (
            <div className="home">
                <Link to="/add-class">
                    <button>Add Class</button>
                </Link>
                <div className="instructor-classes">
                    {this.props.instructorClasses.map(instructorClass => {
                        return <InstructorClass
                            key={instructorClass.classId}
                            instructorClass={instructorClass}
                            getClassByInstructor={this.props.getClassByInstructor}
                            setUpdateForm={this.setUpdateForm}
                        />
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        instructorClasses: state.homeReducer.instructorClasses,
        instructor: state.loginReducer.instructor,
        error: state.homeReducer.error
    }
}

export default connect(
    mapStateToProps,
    {
        getAllClassesByInstructor,
        getClassByInstructor
    }
)(Home)