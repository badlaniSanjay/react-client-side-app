import React, {Component} from 'react'
import CourseCard from '../components/CourseCard';
import CourseService from '../services/CourseService';
import CourseRow from "./CourseTable";

const Courses = CourseService.getInstance().findAllCourses();

class CourseEditor extends Component{

    constructor(props){
        super(props);

        this.state =
        {
            courseId : props.match.params.id
        }
    }


    render() {
        return (

            <div>
                COURSE ID : {this.state.courseId}
            </div>
        )
    }

}



export default CourseEditor