import React, {Component} from 'react';
import Course from './course';
import {Link} from 'react-router-dom';

class CourseList extends Component {

    constructor(){
        super()

        this.state ={
            courses: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:7000/courses',{method:'GET'})
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                courses:data
            })
        })
    }

    render(){
        console.log(this.state.courses)
        const list=this.state.courses.map((item)=><Course key={item.id}
            name={item.name} category={item.category} price={item.price}></Course>)
        return(
            <div>
                {list}
                <div>
                <button><Link to ='/enquiries'>View Enquiry list</Link></button>
                </div>
            </div>
        )
    }
}

export default CourseList;