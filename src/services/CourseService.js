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
        this.courses.push(course)
        return this.courses;
    }

    findAllCourses = () => {
        return this.courses;
    }

    findCourseById = (id) => {

        return this.courses.filter(course => course.id == id);
    }

    updateCourse = (id, course) => {

        return this.courses;
    }

    deleteCourse = (id) => {

        this.courses = this.courses.filter( course => course.id != id);
        return this.courses;
    }

}