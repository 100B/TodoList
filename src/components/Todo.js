import React, { memo } from 'react'
import TodoList from './TodoList'

const Todo = memo(props =>{
    const { todo } = props
    
    return (
        <li>
            <div className="view">
                <input className="toogle" type="checkbox" checked={todo.isCompleted}/>
                <label>{todo.text}</label>
                <button className="destroy"></button>
            </div>
        </li>
    )
})

export default Todo