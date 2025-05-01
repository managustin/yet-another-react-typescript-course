import './App.css'
import Button from './components/button'

function App() {
  return (
    <main>
      <Button countValue={5} countHistory={[10, 20, 30]}/>
    </main>
  )
}

export default App
