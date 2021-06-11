import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class EnquiryList extends Component {

    constructor(){
        super()

        this.state ={
            enquiries: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:7000/enquiries',{method:'GET'})
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                enquiries:data
            })
        })
    }

    render(){

        return(
            <div>
                {this.state.enquiries.map((item)=>(
                    <div key={item.id}>
                        <p>Enquiry ID: {item.id}</p>
                        <p>Course Name: {item.course}</p>
                        <p>Enquiry Details: {item.entry}</p>
                        <p>----------</p>
                  </div>
                ))}
                <button><Link to ='/'>Return to course list</Link></button>
            </div>
        )
    }
}

export default EnquiryList;