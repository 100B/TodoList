import React, { memo } from 'react'
import Todo from './Todo'

const TodoList = memo(props => {
    const { todosList } = props
    return (
        <section className="main">
            <input className="toogle-alt"/>
            <label htmlFor="toogle-alt"></label>
            <ul className="todo-list">
                {
                    todosList.map(todo => <Todo key={`todo${todo.id}`} {...{todo}}/>)
                }
                
            </ul>
        </section>
    )
})

export default TodoList