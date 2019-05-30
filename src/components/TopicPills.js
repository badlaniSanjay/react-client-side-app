import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class TopicPills extends Component{
    constructor(props){
        super(props);

        this.state = {

            lessons :props.lessons.find((lesson) => lesson.id == props.match.params.lessonId),
            d: (new Date()).getTime()
        }

        this.state = {

            lesson :this.state.lessons.lessons.find((lesson) => lesson.id == props.match.params.topicId)
        }
    }




    render(){

        return (
        <div className="list-group text-white">{
            this.state.lesson.topics.map( (eachTopic, index) => <div className='list-group-item' key={index} >
            {eachTopic.title}
            </div>
        )}
        </div>
    )
    }
}

export default TopicPills