import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavBar from './navbar/navbar.jsx'
import Bg from './backgrund/bg.jsx'


const maxTasks = 4;

function App() {
  const [task, setTask] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [todos, setTodos] = useState([]);
  const [errorLimit, seterrorLimit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todos.length >= maxTasks) {
      seterrorLimit("Max task limit reached");
      return;
    }

    if (!task) return;

    const newTodo = {
      id: Date.now(),
      taskName: task,
      taskTime: dateTime,
    };
    setTodos([...todos, newTodo]);
    seterrorLimit('');
    setTask('');
    setDateTime('');
  };

  const handleDelete = (idDelete) => {
    setTodos(todos.filter((todo) => todo.id !== idDelete));
    if (todos.length - 1 < maxTasks) {
      seterrorLimit('');
    }
  };

  return (
    <div className=' min-h-screen t-0 p-0 m-0 bg-white '>
      <Bg/>
      <NavBar />
      <Bg/>
       <div className="relative z-10 w-full max-w-md p-8 rounded-2xl bg-white  mx-auto mt-20">
      <main className="black-ops-one-regular   w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)]">
        <h1 className="black-ops-one-regular  text-3xl font-extrabold text-black ">
          My To-Do List
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            required
            placeholder="Enter Your Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className=" px-4 py-2.5 rounded-xl bg-white/10 border border-white/20   focus:outline-none focus:ring-2 focus:ring-gray-400/50 backdrop-blur-sm transition-all"
          />

          <input
            type="datetime-local"
            required
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            className=" px-4 py-2.5 rounded-xl bg-gray-500 border border-white/20   focus:outline-none focus:ring-2 focus:ring-gray-400/50 backdrop-blur-sm transition-all text-black"
          />

          <button
            type="submit"
            disabled={todos.length >= maxTasks}
            className="w-fit px-4 py-2.5 rounded-xl bg-gray-500/20 hover:bg-gray-500/40  border-gray-500/30 text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed mx-auto "
          >
            Add Task
          </button>
        </form>



        <ul className="mt-6 flex flex-col gap-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <div className="flex flex-col">
                <span className="font-semibold  ">{todo.taskName}</span>
                {todo.taskTime && (
                  <span className="text-xs">{todo.taskTime}</span>
                )}
              </div>
              <button
                onClick={() => handleDelete(todo.id)}
                className="px-3 py-1 rounded-lg bg-red-500/20 hover:bg-red-500/40 text-red-300 border border-red-500/30 text-xs transition-all"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </main>
      </div>
    </div>
  )
}

export default App
// bg , tsk limit , intend , local strg , time