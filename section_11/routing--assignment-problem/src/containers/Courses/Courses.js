import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Course from '../Course/Course'
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    handleClick = (id, title) => {
        this.props.history.push(`/courses/${id}?title=${title}`)
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return <article onClick={() => this.handleClick(course.id, course.title)} className="Course" key={course.id} >{course.title}</article>;
                        } )
                    }
                </section>
                <Switch>
                    
                </Switch>
                <Route path={this.props.match.url + '/:id'}   component={Course} />
                    
            </div>
        );
    }
}

export default Courses;