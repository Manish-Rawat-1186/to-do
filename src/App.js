import React from 'react'
import './App.css'

const App = () => {
  return (
    <section class="container">
    <div class="heading">
      <h1 class="heading__title">To-Do List</h1>
    </div>
    <form class="form">
      <div>
        <label class="form__label" for="todo">~ Today I need to ~</label>
        <input class="form__input"
             type="text" 
             id="todo" 
             name="to-do"
             size="30"
             required />
        <button class="button"><span>Submit</span></button>
      </div>
    </form>
    <div>
      <ul class="toDoList">
      </ul>
    </div>
  </section>
   
    
  )
}

export default App;