import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addTodo } from './action/todoAction';
import { deleteTodo } from './action/todoAction';
function App() {
  const [task, setTask] = useState("")
  const todos=useSelector(state =>state.todoReducer)
  const dispatch=useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" placeholder='add task...' 
        onChange={(e)=>setTask(e.target.value)}  />
        <button onClick={()=>dispatch(addTodo(task))}>add task</button>
        {todos.map(el=><div>
          <h2>{el.title}</h2>
          <button onClick={()=>dispatch(deleteTodo(el.id))}>delete</button>
        </div>)}
      </header>
    </div>
  );
}

export default App;
