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
        return fetch(`http://localhost:8080/api/courses`, {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    }

    findAllCourses = () => {
        return fetch("http://localhost:8080/api/courses")
            .then(response => response.json())
    }

    findCourseById = (cid) => {

        return fetch("http://localhost:8080/api/courses/"+cid)
            .then(response => response.json())
    }

    updateCourse = (cid, course) => {

        return fetch("http://localhost:8080/api/courses/"+cid, {
            method: 'PUT',
            body: JSON.stringify(course) ,

            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    }

    deleteCourse = (cid) => {
        return fetch("http://localhost:8080/api/courses/"+cid, {
            method: 'DELETE'
        })
            .then(response => response.json())
    }

}