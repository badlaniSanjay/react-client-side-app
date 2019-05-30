import React, {Component} from 'react'
import CourseRow from "../components/CourseRow";
import CourseService from '../services/CourseService';


const Courses = CourseService.getInstance().findAllCourses();

class CourseTable extends Component{

    constructor(){
        super();
        this.state = {

            course:{
                id :-1,
                title:'New Course',
                modules:[]
            },
            courses :Courses
        }

    }

    createCourse = () =>{
        this.setState({
            course:{
                id:(new Date().getTime())
            }
                      })
        this.setState({
            courses : CourseService.getInstance().createCourse(this.state.course)
                      })
        this.setState({
                          course:{
                              title:'New Course'
                          }
                      })
    }

    changeTitle = (event) =>{
        this.setState({
            course:{
                title:event.target.value
            }
                      })
    }

    deleteCourse = (id) =>{
        this.setState({
            courses : CourseService.getInstance().deleteCourse(id)
                      })
    }




    render() {
        return (


            <div className="container-fluid">


                <div className="bg-primary  sticky-top list-group">
                    <li className="list-group-item  off-white bg-primary">
                        <div className="row text-light">

                            <div className="col-md-2">
                                <i className="fa text-light fa-bars fa-2x"></i>
                            </div>
                            <div className="col-md-3 ">
                                <h3>Course Manager</h3>
                            </div>
                            <div className="col-6">
                                <input id="coursenameFld" className="form-control" onChange={this.changeTitle} defaultValue={this.state.course.title}
                                       />
                            </div>
                            <div className="col-md-1">
			     <span className="fa-stack" onClick={this.createCourse}>
            <i className="fa fa-circle fa-stack-2x text-danger"></i>
            <i className="fa fa-plus fa-stack-1x"></i>
          </span>

                            </div>

                        </div>
                    </li>
                </div>

                <div className="bg-danger list-group  sticky-top d-none d-md-block">
                    <li className="list-group-item  off-white text-secondary ">
                        <div className="row text-secondary">
                            <div className="col-2"></div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="col-5">Title</div>
                                    <div className="col-2">Owned By <i
                                        className="fa fa-sort-down"></i></div>
                                    <div className="col-3">Last Modified By me</div>
                                    <div className="col-1">
                                        <i className="fa fa-grip-horizontal fa-2x"></i></div>
                                    <div className="col-1">
            <span className="small-size">
            <div className="row h-33 center"><i className="fa fa-angle-up"></i></div>
            <div className="row h-33">A-Z</div>
            <div className="row h-33 center"><i className="fa fa-angle-down"></i></div>
            </span>
                                    </div>
                                </div>
                                <div className="col-2"></div>
                            </div>
                        </div>
                    </li>
                </div>


                <div >
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <div className="list-group">
                                {this.state.courses.map(course => <CourseRow course={course} key={course.id} deleteCourse ={this.deleteCourse}  />)}
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
                </div>

                <div className="bellow-add-button"><i className="fa fa-plus text-light"></i></div>


            </div>
        )
    }
}

export default CourseTable