import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
       
          <h1>My to-do List</h1>
          
          <form action="/">
          <input type="text" name="to-do-input" id="do" placeholder="Enter Your Task"/>
          <br/>
          <input type="datetime" name="to-do-datetime" id="to-do-datetime" placeholder='to-do-datetime' />
          <br/>
          <input type="submit" value="Add" />
          </form>
        
      </section>

    </>
  )
}

export default App
