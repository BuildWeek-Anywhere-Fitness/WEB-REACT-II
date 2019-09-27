import React from 'react'

const InstructorClass = props => {
    return (
        <div className="instructor-class">
            <div className="instructor-class-name">class: {props.instructorClass.className}</div>
            <div className="instructor-class-date">date: {props.instructorClass.date}</div>
            <div className="instructor-class-time">time: {props.instructorClass.time}</div>
            <div className="instructor-class-address">address: {props.instructorClass.address}</div>
            <div className="instructor-class-city">city: {props.instructorClass.city}</div>
            <div className="instructor-class-zipcode">zipcode: {props.instructorClass.zipcode}</div>
            <div className="instructor-class-description">description: {props.instructorClass.description}</div>
        </div>
    )
}

export default InstructorClass