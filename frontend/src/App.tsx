import './App.css'
import Button from './components/button'

function App() {

  return (
    <>
      <Button 
        backgroundColor='green' 
        fontSize={30} 
        pillShape={true}
        padding={[4,2,4,2]} 
        textColor='black'
        />
    </>
  )
}

export default App
