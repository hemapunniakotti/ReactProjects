import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class Form extends Component{

    constructor (props){
        super(props)
        if (typeof props.location.aboutProps ==="undefined"){
            this.state={
                course:"",
                entry:""
            }
        }
        else{
            this.state={
                course:props.location.aboutProps.courseProp,
                entry:""
            }
        }
        
       
        console.log("prob")
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
        console.log(event.target.value)
    }

    handleSubmit(event){
        event.preventDefault();

        
        const requestOptions=
        {method:'POST',
        body:JSON.stringify(this.state),
        headers:{'Content-Type':'application/json'}}
        console.log(requestOptions.body)
        
        fetch('http://localhost:6700/enquiries',requestOptions)
        .then((response)=>response.json())
        .then((data)=>console.log(data))

    } 
    render(){

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="entry" name="entry"
                     value={this.state.entry} 
                     placeholder="Enter details here" onChange={this.handleChange}  />
                    <input type="submit" value="Enquire"></input>
                </form>
                <button><Link to ='/'>Return to course list</Link></button>
            </div>
        )
    }
}

export default Form