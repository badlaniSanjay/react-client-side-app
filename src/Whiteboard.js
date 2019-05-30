import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CourseTable from './containers/CourseTable';
import CourseEditor from './containers/CourseEditor';
import CourseGrid from './containers/CourseGrid';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

export default class WhiteBoard extends Component {
    render() {
        return (
            <Router>

                <Route exact path='/' component={CourseTable}/>
                <Route path="/CourseTable" component={CourseTable}/>
                <Route path="/CourseEditor/:id" component={CourseEditor}/>
                <Route path="/CourseGrid" component={CourseGrid}/>
            </Router>
        )
    }
}




