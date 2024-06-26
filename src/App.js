import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
function App() {
      let [todoInput, updateInput] = useState()

      let [todoList, updateTodos] = useState(
            [
                  {
                        id: uuidv4(),
                        task: 'Hlo this is Aditya🙌'

                  },
                 
            ]
      )

      function addNewTodo() {

            if (todoInput === "") {
                  alert("Add some task")
            }
            else {

                  let newTodos = [
                        ...todoList,
                        {
                              id: uuidv4(),
                              task: todoInput

                        }
                  ]
                  updateTodos(newTodos);
                  updateInput("")
            }

      }

      function deleteTodo(id)
      {
            let filteredTodos = todoList.filter(
                  (todo) => {
                        return todo.id !== id
                  }
            )
            updateTodos(filteredTodos);
      }


      return (
            <div className="container mt-5 w-50">
                  <h3 className='text-center'>Work To-Do</h3>
                  <div className="input-group">
                        <input className="form-control" onChange={(e) => {
                              let task = e.target.value;
                              updateInput(task)

                        }} type='text' value={todoInput} />
                        <button onClick={() => {
                              addNewTodo()
                        }} className="btn btn-primary">Add</button>
                  </div>
                  <ul className="list-group mt-4">
                        {
                              todoList.map(
                                    (todo) => {
                                          return(
                                                <li key={todo.id} className="list-group-item">
                                                      <p>{todo.task}</p>
                                                      <button onClick={() => {
                                                            deleteTodo(todo.id);
                                                      }} className="btn"> ❌</button>
                                                </li>
                                          )
                                    }
                              )
                        }

                  </ul>
            </div>
      )

}

export default App
