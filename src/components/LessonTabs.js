import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class LessonTabs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            allLessons: [{
                courseId: props.match.params.id,
                lessons: props.lessons.find(lessons => lessons.id == props.match.params.lessonId),
                id: (new Date()).getTime(),
                lessonId: props.match.params.lessonId
            }]
        }
    }

    render() {

        return (<div className="btn-group text-secondary">

                {
                    this.state.allLessons.map((state, index, key) =>
                                                  <span key={index}>

          {state.lessons.lessons.map((lessons, index) =>
                                         <Link key={index}
                                               className="text-white btn"
                                               onClick={() => this.checkelement(index)}
                                               to={`/CourseEditor/${state.courseId}/LessonTabs/${state.lessonId}/TopicPills/${lessons.id}`}>
                                             {lessons.title}
                                         </Link>)
          }

          </span>)
                }


            </div>

        )
    }
}

export default LessonTabs;