import React, {component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const CourseCard = ({course, deleteCourse}) => {

    return (
        <div className='container-fluid'>
            <div className='card'>
                <img className="card-img-top" src="https://picsum.photos/300/200" alt="Card cap"/>
                <div className="card-body">
                    <h5 className="card-title">
                        <Link to={`/CourseEditor/${course.id}`} className="btn">
                            {course.title}
                        </Link>
                    </h5>
                    <p className="card-text">Hello React World</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">

                        <button onClick={() => deleteCourse(course.id)} className="btn text-dark">

                            <i className="fa fa-trash float-right"></i>

                        </button>
                        <Link to={`/CourseEditor/${course.id}`} className="btn">
                            <i className="fa fa-pencil float-right"></i>
                        </Link>

                    </small>

                </div>
            </div>
        </div>

    )
}

export default CourseCard;