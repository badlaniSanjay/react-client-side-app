import React from 'react'


export default class CourseService{
    static myInstance = null;

    // apiString = "https://fierce-sea-47240.herokuapp.com";
    apiString = "http://localhost:8080";

    static getInstance(){
        if(CourseService.myInstance == null){
            CourseService.myInstance =
                new CourseService();
        }
        return this.myInstance;
    }

    createCourse = course => {
        return fetch(this.apiString+`/api/courses`, {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    }

    findAllCourses = () => {
        return fetch(this.apiString+"/api/courses")
            .then(response => response.json())
    }

    findCourseById = (cid) => {

        return fetch(this.apiString+"/api/courses/"+cid)
            .then(response => response.json())
    }

    updateCourse = (cid, course) => {

        return fetch(this.apiString+"/api/courses/"+cid, {
            method: 'PUT',
            body: JSON.stringify(course) ,

            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    }

    deleteCourse = (cid) => {
        return fetch(this.apiString+"/api/courses/"+cid, {
            method: 'DELETE'
        })
            .then(response => response.json())
    }

}