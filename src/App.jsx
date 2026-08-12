import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavBar from './navbar/navbar.jsx'
// import Bg from './backgrund/bg.jsx'


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
    <div className='black-ops-one-regular min-h-screen t-0 p-0 m-0 bg-gradient-to-br from-slate-950 via-blue-950 to-pink-950 text-white flex flex-col items-center gap-20'>
      {/* <Bg/> */}
      <NavBar />
      <div className="flex flex-col items-center justify-center max-w-full">
      <main className="black-ops-one-regular w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_0_rgba(236,72,153,0.37)]">
        <h1 className="black-ops-one-regular text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-rb from-blue-400 to-pink-400 text-center mb-6">
          My To-Do List
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            required
            placeholder="Enter Your Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-pink-400/50 backdrop-blur-sm transition-all"
          />

          <input
            type="datetime-local"
            required
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 backdrop-blur-sm transition-all [color-scheme:dark]"
          />

          <button
            type="submit"
            disabled={todos.length >= maxTasks}
            className="w-full py-2.5 rounded-xl bg-gradient-to-rb from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 font-semibold shadow-lg shadow-pink-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
                <span className="font-semibold text-slate-100">{todo.taskName}</span>
                {todo.taskTime && (
                  <span className="text-xs text-slate-300">{todo.taskTime}</span>
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