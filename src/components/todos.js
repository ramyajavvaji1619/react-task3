import React, {useState} from 'react'

import './index.css'


const SimpleTodos = ({initialTodosList}) => {

    const [todosList,setTodosList] = useState(initialTodosList);


   const deleteTodo = (id)=> {
    const updatedTodosList = todosList.filter((eachTodo) => eachTodo.id !== id)
    setTodosList(updatedTodosList)
  }


    return (
      <div className="app-container-e">
        <div className="simple-todos-container">
          <h1 className="heading">Simple Todos</h1>
          <ul className="todos-list">
            {todosList.map((eachTodo) => (
            <li key={eachTodo.id} className="todo-item">
                <p className="title">{eachTodo.title}</p>
                <button type="button" className="delete-btn" onClick={() => deleteTodo(eachTodo.id)}>
                    Delete
                </button>
            </li>
            ))}
          </ul>
        </div>
      </div>
    )
}

export default SimpleTodos