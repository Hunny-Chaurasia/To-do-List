import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavBar from './navbar/navbar.jsx'

const maxTasks = 4;

function App() {
  const [task, setTask] = useState('');
  const [dateTime, setDateTime] = useState('');

  const [todos, setTodos] = useState([]);
  const [errorLimit, seterrorLimit] = useState(['']);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todos.length >= maxTasks) {
      seterrorLimit("max limit reached bro..");
      return;
    }

    if (!task) return;

    const newTodo = {
      id: Date.now(),
      taskName: task,
      taskTime: dateTime,
    };
    setTodos([...todos, newTodo]);

    setTask('');
    setDateTime('');
  };
  const handleDelete = (idDelete) => {
    setTodos(todos.filter((todo) => todo.id !== idDelete));
  };

  return (
    <>
      <section className=''>
        <NavBar></ NavBar>
        <h1 className='h-15'>My to-do List</h1>
        <div className='bg-blue-500  h-12 '>
          <form onSubmit={handleSubmit}>
            <input type="text" name="to-do-input" id="do" placeholder="Enter Your Task" value={task}
              onChange={(e) => setTask(e.target.value)} />
            <br />
            <input type="datetime" name="to-do-datetime" id="to-do-datetime" placeholder='to-do-datetime' value={dateTime}
              onChange={(e) => setDateTime(e.target.value)} />
            <br />
            <input type="submit" value="Add" disabled={todos.length >= maxTasks} />
          </form>

        </div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <strong>{todo.taskName}</strong> - {todo.taskTime}\
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </section>

    </>
  )
}

export default App
// bg , tsk limit , intend , local strg , time