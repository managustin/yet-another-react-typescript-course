import './App.css'
import Button from './components/button'

function App() {

  return (
    <>
      <Button style={{
        backgroundColor: "blue",
        fontSize: 25,
        color: "white",
        padding: "1rem 2rem",
        borderWidth: 2,
        borderColor: "black"
      }}
      borderRadius={{
        topLeft: 10,
        topRight: 20,
        bottomLeft: 20,
        bottomRight: 10
      }}/>
    </>
  )
}

export default App
