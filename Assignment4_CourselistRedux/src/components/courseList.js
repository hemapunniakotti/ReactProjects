import React from 'react';
import Course from './course';
import {Link} from 'react-router-dom';


 
const showCourses=({courseData})=>{

    if(courseData.latest){
        console.log('courseData===>',courseData);
        const list=courseData.latest.map((item)=><Course
        key={item.id} name={item.name} category={item.category} price={item.price}>
        </Course>)
        return list
    }
}

const CourseList=(props)=>{
    return(
        <div>
            {showCourses(props)}
            <div>
            <button><Link to ='/enquiries'>View Enquiry list</Link></button>
            </div>
        </div>
    )
}


export default CourseList;