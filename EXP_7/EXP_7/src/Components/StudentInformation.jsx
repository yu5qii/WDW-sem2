import React from 'react'

export const StudentInformation = ({name1, name2, name3, marks1, marks2, marks3, course1, course2, course3}) => {
  return (
    <div class= "card">
        <h1>Student Information</h1>
        <div className="container">
            <h3>{name1}</h3>
            <p>course: {course1}</p>
            <p>marks: {marks1}</p>
        </div>
        <div className="container">
            <h3>{name2}</h3>
            <p>course: {course2}</p>
            <p>marks: {marks2}</p>
        </div>
        <div className="container">
            <h3>{name3}</h3>
            <p>course: {course3}</p>
            <p>marks: {marks3}</p>
        </div>
    </div>
  )
}
