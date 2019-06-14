import React, {Component} from 'react'
import CourseCard from '../components/CourseCard';
import CourseService from '../services/CourseService';
import LessonTabs from '../components/LessonTabs';
import ModuleList from "../components/ModuleList";
import TopicPills from "../components/TopicPills";
import WidgetListContainer from "./WidgetListContainer";
import widgetReducer from "../reducers/widgetReducer";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const Courses = CourseService.getInstance().findAllCourses();
const store = createStore(widgetReducer)

class CourseEditor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            module: {
                id: -1,
                title: "",
                lessons: []
            },
            lesson: {
                id: -1,
                title: ""
            },
            CourseId: props.match.params.id,
            // Course: CourseService.getInstance().findCourseById(props.match.params.id)
            Course: null
        }

        CourseService.getInstance().findCourseById(props.match.params.id).then(course => this.setState({

            Course : course
        }))


    }

    createModule = () => {

        this.setState({

                          module: {
                              id: (new Date()).getTime(),
                              lessons: []
                          }

                      })

        this.setState({
                          Course: {
                              modules: [...this.state.Course.modules, this.state.module]
                          }
                      })
    }

    changeTitle = (event) => {
        this.setState({
                          module: {
                              title: event.target.value,
                              id: (new Date()).getTime(),
                              lessons:[]

                          }
                      })
    }

    deleteModule = (id) => {
        this.setState({
                          Course: {
                              modules: this.state.Course.modules.filter(module => module.id != id)
                          }
                      })
    }

    createNewLesson = () =>{

    }

    render() {
        return (

            <div className="container-fluid">
                <div className="bg-primary list-group sticky-top bg-dark">
                    <li className="list-group-item bg-primary bg-dark">
                        <div className="row text-light">

                            <div className="col-md-1">
                                <i className="fa fa-times"></i>
                            </div>
                            <div className="col-md-3 ">
                                <h3>Course CourseId</h3>
                            </div>


                            { this.state.Course !== null && <div className="col-md-7">
                                <Router>
                                    <Route
                                        path={`/CourseEditor/:id/LessonTabs/:lessonId`}
                                        render={(props) => <LessonTabs {...props} lessons={this.state.Course.modules} createNewLesson={this.createNewLesson}/>}
                                    />
                                </Router>

                            </div>}

                            <div className="col-md-1">

                                <h2>
                                <i className="fa fa-plus fa-stack-1x"></i>
                                </h2>
                            </div>

                        </div>
                    </li>
                </div>


                <div className="row h-100">
                    <div className="col-4 h-100">
                        { this.state.Course !== null && <div>
                            {this.state.Course.modules.map(module => <ModuleList module ={module} key={module.id}
                             deleteModule={this.deleteModule} courseId={this.state.CourseId}/>)}
                        </div> }
                    </div>
                    <div className="col-8">
                        { this.state.Course !== null &&  <Router>
                            <Route path={`/CourseEditor/:id/LessonTabs/:lessonId/TopicPills/:topicId`}
                                   render={(props) => <TopicPills {...props} lessons={this.state.Course.modules}/>}
                            />
                        </Router> }

                        <Provider store={store}>
                            <WidgetListContainer />
                        </Provider>
                    </div>
                </div>
            </div>

        )
    }

}

export default CourseEditor