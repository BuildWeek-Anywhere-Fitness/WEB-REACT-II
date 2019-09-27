import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllClassesByInstructor } from '../actions';
import cookie from 'react-cookies';
import InstructorClass from './InstructorClass';

export class Home extends Component {
    componentDidMount() {
        this.props.getAllClassesByInstructor(cookie.load('instructor')[0]['id'])
    }

    render() {
        return (
            <div className="home">
                <div className="instructor-classes">
                    {this.props.instructorClasses.map(instructorClass => {
                        return <InstructorClass key={instructorClass.classId} instructorClass={instructorClass} />
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
        getAllClassesByInstructor: state.homeReducer.getAllClassesByInstructor,
        error: state.homeReducer.error
    }
}

export default connect(
    mapStateToProps,
    { getAllClassesByInstructor }
)(Home)