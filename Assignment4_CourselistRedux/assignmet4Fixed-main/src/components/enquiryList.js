import React, {Component} from 'react';
import {Link} from 'react-router-dom';
const showEnquiries=({enquiryData})=>{
    console.log({enquiryData})

    if(enquiryData){
        
        const list=enquiryData.map((item)=><div key={item.id}>
        <p>Enquiry ID: {item.id}</p>
        <p>Course Name: {item.course}</p>
        <p>Enquiry Details: {item.entry}</p>
        <p>----------</p>
  </div>)
        return list
    }
}

const EnquiryList=(props)=>{
    return(
        <div>
            {console.log(props)}
            {showEnquiries(props)}
            <div>
            <button><Link to ='/'>Return to course list</Link></button>
            </div>
        </div>
    )
}
        

export default EnquiryList;