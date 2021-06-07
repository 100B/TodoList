import React, { memo } from 'react'
import Todo from './Todo'

const TodoList = memo(props => {
    const { todosList, isCheckedAll } = props
    return (
        <section className="main">
            <input className="toogle-alt" type="checkbox" checked={isCheckedAll}/>
            <label htmlFor="toogle-alt"></label>
            <ul className="todo-list">
                {
                    todosList.map((todo, index) => <Todo key={`todo${todo.id}`} {...{todo}} {...props} index={index}/>)
                }
                
            </ul>
        </section>
    )
})

export default TodoList