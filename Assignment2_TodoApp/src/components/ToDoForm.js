import React,{Component} from 'react'


class ToDoForm extends Component{

    constructor (props){
        super(props)
        this.state={
            toDo:""
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit(event){
        var toDoText=this.refs.toDo
        event.preventDefault();
        this.props.onSubmit({
            text:this.state.toDo,
            completed:false
        })

        this.setState({
            toDo:""
        })

    }
    render(){

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="toDo" name="toDo" value={this.state.toDo} placeholder="Have a new skillset?" onChange={this.handleChange}  />
                    <input type="submit" text="Add skillset"></input>
                </form>
            </div>
        )
    }
}

export default ToDoForm