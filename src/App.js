import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import './App.scss'

const App = () => {

  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <section className="container">
    <div className="heading">
      <h1 className="heading__title">To-Do List</h1>
    </div>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const trimmedText = task.trim()
        if (trimmedText.length > 0) {
        setTodos([...todos, trimmedText])
        setTask('');
      }
      }}
     className="form">
      <div>
        <label className="form__label" htmlFor="todo">~ Today I need to ~</label>
        <input className="form__input"
             type="text" 
             value={task}
             id="todo" 
             name="to-do"
             size="30"
             onChange={e => {
               setTask(e.target.value)
               }
               }
             required />
        <button type='submit' className="button">
        <span>Submit</span>
        </button>
      </div>
    </form>
    <div>
      <ul className="toDoList">
       {
         todos.map((todo, index) => (
           <li 
            key={index}
           >{todo} <span><MdDelete key={index} className="delete" onClick={(e) => {
              const newTodos = todos.filter((_,todo) => todo !== index)

              setTodos(newTodos);
           }} /></span>  </li>
         ))
       }
       
      </ul>
    </div>
  </section>
   
    
  )
}

export default App;