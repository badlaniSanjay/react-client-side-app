import React from 'react'
import Courses from './Courses'

export default class CourseService{
    static myInstance = null;
    courses = Courses;

    static getInstance(){
        if(CourseService.myInstance == null){
            CourseService.myInstance =
                new CourseService();
        }
        return this.myInstance;
    }

    createCourse = course => {
        return fetch(`https://fierce-sea-47240.herokuapp.com/api/courses`, {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    }

    findAllCourses = () => {
        return fetch("https://fierce-sea-47240.herokuapp.com/api/courses")
            .then(response => response.json())
    }

    findCourseById = (cid) => {

        return fetch("https://fierce-sea-47240.herokuapp.com/api/courses/"+cid)
            .then(response => response.json())
    }

    updateCourse = (cid, course) => {

        return fetch("https://fierce-sea-47240.herokuapp.com/api/courses/"+cid, {
            method: 'PUT',
            body: JSON.stringify(course) ,

            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    }

    deleteCourse = (cid) => {
        return fetch("https://fierce-sea-47240.herokuapp.com/api/courses/"+cid, {
            method: 'DELETE'
        })
            .then(response => response.json())
    }

}