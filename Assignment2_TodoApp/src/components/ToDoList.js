import React,{Component} from 'react'
import ToDoItem from './ToDoItem'
import ToDoForm from './ToDoForm'

class ToDoList extends Component{
    constructor(){
        super()
        this.state={
            toDoItems:[]
        }
    }

    addToDoItem=ToDoItem=>{
        this.setState({
            toDoItems:[ToDoItem,...this.state.toDoItems]
        })
    }

    render(){
        return(
            <div>
                <ToDoForm onSubmit={this.addToDoItem}/>
                {this.state.toDoItems.map( (item,index) => <ToDoItem key={index} text={item.text}></ToDoItem>)}
            </div>
        )
    }
}

export default ToDoList