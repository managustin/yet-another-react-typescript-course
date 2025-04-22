import {useState} from 'react'
import './App.css'
import Button from './components/button'

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Count: {count}</h1>
      <Button setCount={setCount}> hola</Button>

    </main>
  )
}

export default App
