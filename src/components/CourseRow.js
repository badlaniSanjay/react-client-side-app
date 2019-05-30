import React, {component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const CourseRow =  ({course, deleteCourse}) => {

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-10 col-md-6">

                    <i className="fa fa-file-alt text-primary"></i>
                    <Link to={`/CourseEditor/${course.id}`} className="btn">
                    {course.title}
                    </Link>
                </div>
                <div className="d-none d-md-block col-0 col-md-2">
                    me
                </div>
                <div className="d-none d-md-block col-0 col-md-2">
                    12:45 PM
                </div>
                <div className="col-2 col-md-2">
                    <button onClick={() => deleteCourse(course.id)} className="btn text-dark">
                        <h5><i className="fa fa-times-circle float-right"></i></h5></button>
                </div>
            </div>
        </li>
    )
}

export default CourseRow;
