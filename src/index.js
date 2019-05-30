import React from 'react';
import ReactDOM from 'react-dom';
import Whiteboard from './Whiteboard';
import CourseGrid from './containers/CourseGrid';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './css/courseList.style.client.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

ReactDOM.render(

    <Whiteboard/>,
    document.getElementById('root')

);
