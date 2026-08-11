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
    <NavBar></ NavBar>
      <section className="flex-none bg-slate-900 text-white px-4 py-1.5 rounded-md border-2 border-fuchsia-400 shadow-[4px_2px_0px_0px_rgba(59,130,246,1)] w-fit ">
        
        <h1 className='h-15'>My to-do List</h1>
        <div >
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