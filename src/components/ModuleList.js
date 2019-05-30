import React, {component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const ModuleList = ({module, deleteModule, courseId}) => {
    return (
        <div className='container-fluid'>
            <div className='list-group-item'>
    <div className='row'>
        <div className='col-10'>
            <a  href={`/CourseEditor/${courseId}/LessonTabs/${module.id}`}>{module.title}</a>
        </div>
        <div className='col-2'>
            <i className="fa fa-trash float-right" onClick={()=> deleteModule(module.id)}></i>
        </div>
    </div>
            </div>
        </div>
    )
}

export default ModuleList