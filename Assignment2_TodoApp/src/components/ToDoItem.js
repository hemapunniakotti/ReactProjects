import React from 'react'

const ToDoItem=(props)=>{
    return(
        <div>
            <input type="checkbox" value={props.text}></input><label>{props.text}</label>
        </div>
    )
}

export default ToDoItem