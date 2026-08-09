import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [task, setTask] = useState('');
  const [dateTime, setDateTime] = useState('');

  const [todos, setTodos] = useState([]);

  const handleSubmit=(e)=>{
    e.preventDefalut();
    console.log('Submitted')
    const newTodo = {
      id: Date.now(),
      taskName: task,
      taskTime: dateTime,
    };
  setTodos([...todos, newTodo]);

    setTask('');
    setDateTime('');
  };

  return (
    <>
      <section id="center">
       
          <h1>My to-do List</h1>
          
          <form onSubmit={handleSubmit}>
          <input type="text" name="to-do-input" id="do" placeholder="Enter Your Task" value={task} 
          onChange={(e) => setTask(e.target.value)}/>
          <br/>
          <input type="datetime" name="to-do-datetime" id="to-do-datetime" placeholder='to-do-datetime' value={dateTime}
          onChange={(e) => setDateTime(e.target.value)} />
          <br/>
          <input type="submit" value="Add" />
          </form>
          <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.taskName}</strong> - {todo.taskTime}
          </li>
        ))}
      </ul>
      </section>

    </>
  )
}

export default App
