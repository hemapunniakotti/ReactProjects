import React from 'react'
import {Link} from 'react-router-dom'
const Course=(props)=>{
    return(
        <div>
            <h3>{props.name}</h3>
            <button><Link to ={{key: '1', pathname:'/form',
            aboutProps:{
                courseProp:props.name
            }}}>Enquire</Link></button>
        </div>
    )
}

export default Course;